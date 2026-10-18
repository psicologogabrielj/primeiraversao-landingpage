import { useEffect } from "react";
import { useAnalyticsStore } from "@/stores/analyticsStore";

// O ID do GA chega como prop do servidor (GA_MEASUREMENT_ID), não mais do
// build do Vite: trocar o ID não exige rebuild e o SSR não toca em window.
export function useGAInitialize(gaId: string) {
  const initialize = useAnalyticsStore((state) => state.initialize);

  useEffect(() => {
    if (gaId) {
      initialize(gaId);
    }
  }, [gaId, initialize]);
}

// Hook para rastrear eventos personalizados
export function useTrackEvent() {
  const trackEvent = useAnalyticsStore((state) => state.trackEvent);
  return trackEvent;
}
