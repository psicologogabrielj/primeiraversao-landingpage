import { useEffect } from "react";
import { rastrear } from "@/lib/analytics";

const MARCOS = [25, 50, 75, 100];

/** Registra uma vez cada marco de rolagem da página (25%, 50%, 75%, 100%). */
export function useScrollDepthTracking() {
  useEffect(() => {
    const atingidos = new Set<number>();

    const handleScroll = () => {
      const { scrollHeight } = document.documentElement;
      const percentual = Math.round(
        ((window.scrollY + window.innerHeight) / scrollHeight) * 100
      );

      for (const marco of MARCOS) {
        if (percentual >= marco && !atingidos.has(marco)) {
          atingidos.add(marco);
          rastrear("Scroll Depth", "Reached", `${marco}%`, marco);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

/** Registra a primeira vez que cada seção fica 30% visível. */
export function useSectionVisibilityTracking(ids: readonly string[]) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            rastrear("Section Visibility", "Viewed", entry.target.id);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.3 }
    );

    for (const id of ids) {
      const secao = document.getElementById(id);
      if (secao) observer.observe(secao);
    }

    return () => observer.disconnect();
  }, [ids]);
}
