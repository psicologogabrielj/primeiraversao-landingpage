import { GraduationCap, Award, Brain, Lock } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export function CredibilityBadges() {
  const badges = [
    {
      icon: Award,
      title: "CRP Ativo",
      description: "Registro 06/171722",
      color: "text-primary",
    },
    {
      icon: Brain,
      title: "Abordagem",
      description: "Terapia Cognitivo-Comportamental",
      color: "text-primary",
    },
    {
      icon: GraduationCap,
      title: "Formação Acadêmica",
      description: "UNIFESP",
      color: "text-primary",
    },
    {
      icon: Lock,
      title: "100% Seguro",
      description: "Sigilo garantido",
      color: "text-primary",
    },
  ];

  return (
    <section className="py-12 bg-background-subtle border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <AnimatedSection
              key={badge.title}
              animation="scale-in"
              delay={`${(index + 1) * 100}` as "100" | "200" | "300" | "400"}
            >
              <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <badge.icon className={`h-8 w-8 ${badge.color}`} />
                </div>
                <h3 className="text-base font-bold text-foreground mb-1">
                  {badge.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {badge.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
