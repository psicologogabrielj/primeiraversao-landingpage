import { useEffect } from "react";
import { useAnalyticsStore, type PostHogConfig } from "@/stores/analyticsStore";

// Os IDs chegam como prop do servidor (GA_MEASUREMENT_ID, POSTHOG_KEY), não
// do build do Vite: trocar um ID não exige rebuild e o SSR não toca em window.
export function useAnalyticsInitialize(gaId: string, posthog: PostHogConfig) {
  const initialize = useAnalyticsStore((state) => state.initialize);

  useEffect(() => {
    initialize(gaId, posthog);
  }, [gaId, posthog.key, posthog.host, initialize]);
}

// Hook para rastrear eventos personalizados
export function useTrackEvent() {
  const trackEvent = useAnalyticsStore((state) => state.trackEvent);
  return trackEvent;
}
