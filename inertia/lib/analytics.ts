import posthog from "posthog-js";

// O gtag.js (GA4 e Google Ads) vem do layout, no HTML do SSR. Este módulo só
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
let posthogLigado = false;

export function iniciarAnalytics(config: AnalyticsConfig) {
  adsConversion = config.adsConversion;

  if (posthogLigado || !config.posthog.key) return;
  posthogLigado = true;
  semQuebrar(() =>
    posthog.init(config.posthog.key, {
      api_host: config.posthog.host,
      defaults: "2025-05-24",
      person_profiles: "identified_only",
    })
  );
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

  if (posthogLigado) {
    semQuebrar(() =>
      posthog.capture(`${categoria} ${acao}`, { label: rotulo, value: valor })
    );
  }
}

/** Todo clique no WhatsApp é a conversão do Google Ads. */
export function rastrearCliqueWhatsApp(origem: string) {
  rastrear("WhatsApp Button", "Click", origem);

  if (adsConversion) {
    window.gtag?.("event", "conversion", { send_to: adsConversion });
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
