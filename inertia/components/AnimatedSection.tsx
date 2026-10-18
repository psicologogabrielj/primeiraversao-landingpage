import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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

export function AnimatedSection({
  children,
  animation = "fade-in-up",
  delay,
  className = "",
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const animationClass = isVisible ? `animate-${animation}` : "";
  const delayClass = delay ? `animation-delay-${delay}` : "";

  return (
    <div ref={ref} className={`${animationClass} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
