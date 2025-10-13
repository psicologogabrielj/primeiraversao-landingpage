import { useEffect } from "react";
import { useAnalyticsStore } from "@/stores/analyticsStore";
import { useLocation } from "react-router-dom";

export const GA_ID = import.meta.env.VITE_GA_ID;

// Hook para inicializar o GA (usar apenas no App.tsx)
export function useGAInitialize() {
  const initialize = useAnalyticsStore((state) => state.initialize);

  useEffect(() => {
    if (GA_ID) {
      initialize(GA_ID);
    }
  }, [initialize]);
}

// Hook para rastrear mudanças de página
export function usePageTracking() {
  const location = useLocation();
  const trackPageView = useAnalyticsStore((state) => state.trackPageView);

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location, trackPageView]);
}

// Hook para rastrear eventos personalizados
export function useTrackEvent() {
  const trackEvent = useAnalyticsStore((state) => state.trackEvent);
  return trackEvent;
}
