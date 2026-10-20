import { create } from "zustand";
import ReactGAModule from "react-ga4";
import posthog from "posthog-js";

// O react-ga4 é CommonJS: no bundle de produção o default import chega
// embrulhado num .default a mais, e sem isso o initialize não existe.
const ReactGA: typeof ReactGAModule =
  "initialize" in ReactGAModule
    ? ReactGAModule
    : (ReactGAModule as unknown as { default: typeof ReactGAModule }).default;

// Analytics nunca pode derrubar a página: um erro aqui dentro de um useEffect
// desmonta a árvore inteira do React.
const semQuebrar = (fn: () => void) => {
  try {
    fn();
  } catch (erro) {
    console.error(erro);
  }
};

export type GoogleAdsConfig = { id: string; conversion: string };
export type PostHogConfig = { key: string; host: string };

interface AnalyticsStore {
  gtagReady: boolean;
  adsConversion: string;
  posthogReady: boolean;
  initialize: (
    gaId: string,
    googleAds: GoogleAdsConfig,
    posthogConfig: PostHogConfig
  ) => void;
  trackEvent: (
    category: string,
    action: string,
    label?: string,
    value?: number
  ) => void;
}

export const useAnalyticsStore = create<AnalyticsStore>((set, get) => ({
  gtagReady: false,
  adsConversion: "",
  posthogReady: false,

  // Cada ferramenta liga sozinha, conforme o que estiver configurado. GA e
  // Google Ads dividem a mesma gtag.js.
  initialize: (gaId, googleAds, posthogConfig) => {
    const { gtagReady, posthogReady } = get();

    const tagIds = [gaId, googleAds.id].filter(Boolean);
    if (!gtagReady && tagIds.length > 0) {
      semQuebrar(() =>
        ReactGA.initialize(tagIds.map((trackingId) => ({ trackingId })))
      );
      set({ gtagReady: true, adsConversion: googleAds.conversion });
    }

    if (!posthogReady && posthogConfig.key) {
      semQuebrar(() =>
        posthog.init(posthogConfig.key, {
          api_host: posthogConfig.host,
          defaults: "2025-05-24",
          person_profiles: "identified_only",
        })
      );
      set({ posthogReady: true });
    }
  },

  trackEvent: (category, action, label, value) => {
    const { gtagReady, adsConversion, posthogReady } = get();

    if (gtagReady) {
      semQuebrar(() => ReactGA.event({ category, action, label, value }));

      // Todo botão de WhatsApp passa por aqui: o clique é a conversão do Ads.
      if (adsConversion && category === "WhatsApp Button" && action === "Click") {
        semQuebrar(() =>
          ReactGA.gtag("event", "conversion", { send_to: adsConversion })
        );
      }
    }

    if (posthogReady) {
      semQuebrar(() =>
        posthog.capture(`${category} ${action}`, { label, value })
      );
    }
  },
}));
