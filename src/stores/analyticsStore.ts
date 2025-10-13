import { create } from "zustand";
import ReactGA from "react-ga4";

interface AnalyticsStore {
  isInitialized: boolean;
  gaId: string | undefined;
  initialize: (gaId: string) => void;
  trackPageView: (path: string) => void;
  trackEvent: (
    category: string,
    action: string,
    label?: string,
    value?: number
  ) => void;
}

export const useAnalyticsStore = create<AnalyticsStore>((set, get) => ({
  isInitialized: false,
  gaId: import.meta.env.VITE_GA_ID,

  initialize: (gaId: string) => {
    const { isInitialized } = get();

    if (!isInitialized && gaId) {
      ReactGA.initialize(gaId);
      set({ isInitialized: true, gaId });
      console.log("Google Analytics initialized with ID:", gaId);
    }
  },

  trackPageView: (path: string) => {
    const { isInitialized } = get();

    if (isInitialized) {
      ReactGA.send({ hitType: "pageview", page: path });
      console.log("Page view tracked:", path);
    }
  },

  trackEvent: (
    category: string,
    action: string,
    label?: string,
    value?: number
  ) => {
    const { isInitialized } = get();

    if (isInitialized) {
      ReactGA.event({
        category,
        action,
        label,
        value,
      });
      console.log("Event tracked:", { category, action, label, value });
    }
  },
}));
