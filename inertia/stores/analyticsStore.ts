import { create } from "zustand";
import ReactGA from "react-ga4";
import posthog from "posthog-js";

export type PostHogConfig = { key: string; host: string };

interface AnalyticsStore {
  gaReady: boolean;
  posthogReady: boolean;
  initialize: (gaId: string, posthogConfig: PostHogConfig) => void;
  trackEvent: (
    category: string,
    action: string,
    label?: string,
    value?: number
  ) => void;
}

export const useAnalyticsStore = create<AnalyticsStore>((set, get) => ({
  gaReady: false,
  posthogReady: false,

  // Cada ferramenta liga sozinha: só o GA, só o PostHog, os dois ou nenhum.
  initialize: (gaId, posthogConfig) => {
    const { gaReady, posthogReady } = get();

    if (!gaReady && gaId) {
      ReactGA.initialize(gaId);
      set({ gaReady: true });
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
    const { gaReady, posthogReady } = get();

    if (gaReady) {
      ReactGA.event({ category, action, label, value });
    }

    if (posthogReady) {
      posthog.capture(`${category} ${action}`, { label, value });
    }
  },
}));
