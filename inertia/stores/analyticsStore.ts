import { create } from "zustand";
import ReactGA from "react-ga4";
import posthog from "posthog-js";

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
      ReactGA.initialize(tagIds.map((trackingId) => ({ trackingId })));
      set({ gtagReady: true, adsConversion: googleAds.conversion });
    }

    if (!posthogReady && posthogConfig.key) {
      posthog.init(posthogConfig.key, {
        api_host: posthogConfig.host,
        defaults: "2025-05-24",
        person_profiles: "identified_only",
      });
      set({ posthogReady: true });
    }
  },

  trackEvent: (category, action, label, value) => {
    const { gtagReady, adsConversion, posthogReady } = get();

    if (gtagReady) {
      ReactGA.event({ category, action, label, value });

      // Todo botão de WhatsApp passa por aqui: o clique é a conversão do Ads.
      if (adsConversion && category === "WhatsApp Button" && action === "Click") {
        ReactGA.gtag("event", "conversion", { send_to: adsConversion });
      }
    }

    if (posthogReady) {
      posthog.capture(`${category} ${action}`, { label, value });
    }
  },
}));
