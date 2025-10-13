import { useEffect, useRef } from "react";
import { useTrackEvent } from "@/lib/ga";

export function useScrollDepthTracking() {
  const trackEvent = useTrackEvent();
  const trackedDepths = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = Math.round(
        ((scrollTop + windowHeight) / documentHeight) * 100
      );

      // Track milestones: 25%, 50%, 75%, 100%
      const milestones = [25, 50, 75, 100];

      for (const milestone of milestones) {
        if (
          scrollPercentage >= milestone &&
          !trackedDepths.current.has(milestone)
        ) {
          trackedDepths.current.add(milestone);
          trackEvent("Scroll Depth", "Reached", `${milestone}%`, milestone);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [trackEvent]);
}

export function useSectionVisibility(sectionName: string) {
  const trackEvent = useTrackEvent();
  const hasTracked = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !hasTracked.current) {
            hasTracked.current = true;
            trackEvent("Section Visibility", "Viewed", sectionName);
          }
        }
      },
      { threshold: 0.3 } // 30% da seção precisa estar visível
    );

    const section = document.querySelector(`#${sectionName}`);
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [sectionName, trackEvent]);
}
