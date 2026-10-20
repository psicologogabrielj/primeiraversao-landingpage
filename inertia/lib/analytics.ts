import type { PostHog } from "posthog-js";

// O gtag.js (GA4 e Google Ads) vem do layout, no HTML do SSR. Este módulo
// liga o PostHog e despacha os eventos para quem estiver configurado.

/** Vem do servidor, montado em config/analytics.ts. */
export type AnalyticsConfig = {
  /** send_to da conversão de clique no WhatsApp (AW-.../rótulo). */
  adsConversion: string;
  posthog: { key: string; host: string };
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

let adsConversion = "";

// O posthog-js tem ~150 KB: sai do bundle da página e só carrega com o
// navegador ocioso. Eventos de antes disso esperam na fila.
let posthog: PostHog | null = null;
let posthogPendente = false;
const fila: [evento: string, propriedades: Record<string, unknown>][] = [];

export function iniciarAnalytics(config: AnalyticsConfig) {
  adsConversion = config.adsConversion;

  if (posthog || posthogPendente || !config.posthog.key) return;
  posthogPendente = true;

  quandoOcioso(async () => {
    const { default: cliente } = await import("posthog-js");
    semQuebrar(() => {
      cliente.init(config.posthog.key, {
        api_host: config.posthog.host,
        defaults: "2025-05-24",
        person_profiles: "identified_only",
        disable_surveys: true,
        persistence: persistenciaPostHog(consentimentoSalvo()),
      });
      for (const [evento, propriedades] of fila.splice(0)) {
        cliente.capture(evento, propriedades);
      }
      posthog = cliente;
    });
  });
}

export function rastrear(
  categoria: string,
  acao: string,
  rotulo?: string,
  valor?: number
) {
  window.gtag?.("event", acao, {
    event_category: categoria,
    event_label: rotulo,
    value: valor,
  });

  const evento = `${categoria} ${acao}`;
  const propriedades = { label: rotulo, value: valor };
  if (posthog) {
    semQuebrar(() => posthog?.capture(evento, propriedades));
  } else if (posthogPendente) {
    fila.push([evento, propriedades]);
  }
}

/** Todo clique no WhatsApp é a conversão do Google Ads. */
export function rastrearCliqueWhatsApp(origem: string) {
  rastrear("WhatsApp Button", "Click", origem);

  if (adsConversion) {
    window.gtag?.("event", "conversion", { send_to: adsConversion });
  }
}

// LGPD: sem o "Aceitar" do banner, nada vai para cookie/localStorage. O
// Google recebe só sinais anônimos (Consent Mode, ver o layout) e o PostHog
// guarda o visitante só na memória da aba — as visitas e os cliques ainda
// contam, mas quem volta aparece como pessoa nova.

/** Mesma chave lida pelo script do gtag no layout. */
const CHAVE_CONSENTIMENTO = "consentimento-cookies";

export type Consentimento = "aceito" | "recusado";

export function consentimentoSalvo(): Consentimento | null {
  try {
    const valor = localStorage.getItem(CHAVE_CONSENTIMENTO);
    return valor === "aceito" || valor === "recusado" ? valor : null;
  } catch {
    return null;
  }
}

export function definirConsentimento(consentimento: Consentimento) {
  try {
    localStorage.setItem(CHAVE_CONSENTIMENTO, consentimento);
  } catch {
    // Sem localStorage (aba anônima restrita): vale só para esta visita.
  }

  const estado = consentimento === "aceito" ? "granted" : "denied";
  window.gtag?.("consent", "update", {
    ad_storage: estado,
    ad_user_data: estado,
    ad_personalization: estado,
    analytics_storage: estado,
  });

  semQuebrar(() =>
    posthog?.set_config({ persistence: persistenciaPostHog(consentimento) })
  );
}

function persistenciaPostHog(consentimento: Consentimento | null) {
  return consentimento === "aceito" ? "localStorage+cookie" : "memory";
}

function quandoOcioso(fn: () => void) {
  if ("requestIdleCallback" in window) {
    requestIdleCallback(fn, { timeout: 3000 });
  } else {
    setTimeout(fn, 1000);
  }
}

// Analytics nunca pode derrubar a página: um erro dentro de um useEffect
// desmonta a árvore inteira do React.
function semQuebrar(fn: () => void) {
  try {
    fn();
  } catch (erro) {
    console.error(erro);
  }
}
