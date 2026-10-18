import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?:
    | "fade-in-up"
    | "fade-in"
    | "slide-in-left"
    | "slide-in-right"
    | "scale-in";
  delay?: "100" | "200" | "300" | "400" | "500";
  className?: string;
}

/**
 * Revela o conteúdo uma única vez quando entra na tela.
 *
 * O estado inicial (escondido) vem do CSS (`.js .reveal` em app.css), não de
 * uma animação disparada depois: antes o elemento nascia visível e, ao entrar
 * na tela, ganhava um keyframe que começava em opacity 0 — a seção aparecia,
 * sumia e voltava, o "piscar" no scroll. Como o esconder depende da classe
 * `js` no <html>, sem JavaScript o conteúdo do SSR fica visível normalmente.
 */
export function AnimatedSection({
  children,
  animation = "fade-in-up",
  delay,
  className = "",
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px",
  });

  return (
    <div
      ref={ref}
      data-reveal={animation}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn("reveal", isVisible && "is-visible", className)}
    >
      {children}
    </div>
  );
}
