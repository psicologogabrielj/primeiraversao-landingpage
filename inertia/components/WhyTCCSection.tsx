import { CheckCircle, TrendingUp, Target, Clock } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export function WhyTCCSection() {
  const benefits = [
    {
      icon: Target,
      title: "Focada em Objetivos",
      description:
        "Trabalha com metas específicas e mensuráveis, direcionando cada sessão para resultados práticos.",
    },
    {
      icon: TrendingUp,
      title: "Eficácia Comprovada",
      description:
        "Mais de 2.000 estudos científicos comprovam a efetividade da TCC para ansiedade, depressão e TDAH.",
    },
    {
      icon: Clock,
      title: "Resultados em Menos Tempo",
      description:
        "Abordagem estruturada que geralmente apresenta melhorias significativas em 12 a 20 sessões.",
    },
    {
      icon: CheckCircle,
      title: "Ferramentas Práticas",
      description:
        "Ensina técnicas que você pode usar no dia a dia para gerenciar pensamentos e emoções.",
    },
  ];

  const conditions = [
    { name: "Transtornos de Ansiedade", effectiveness: "85-90%" },
    { name: "Depressão", effectiveness: "75-85%" },
    { name: "TDAH", effectiveness: "70-80%" },
    { name: "Fobias Específicas", effectiveness: "80-90%" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Por que Terapia Cognitivo-Comportamental?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A TCC é uma das abordagens psicológicas mais estudadas e eficazes
              do mundo, reconhecida pela comunidade científica internacional
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <AnimatedSection
              key={benefit.title}
              animation="fade-in-up"
              delay={`${(index + 1) * 100}` as "100" | "200" | "300" | "400"}
            >
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 h-full group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="scale-in">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 lg:p-12 border border-primary/20">
            <h3 className="text-2xl font-serif font-bold text-center text-foreground mb-8">
              Taxa de Eficácia da TCC
            </h3>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {conditions.map((condition, index) => (
                <div
                  key={condition.name}
                  className="bg-card/50 backdrop-blur-sm rounded-xl p-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-card-foreground font-medium">
                      {condition.name}
                    </span>
                    <span className="text-2xl font-bold text-primary">
                      {condition.effectiveness}
                    </span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full transition-all duration-1000"
                      style={{
                        width: condition.effectiveness,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              *Dados baseados em meta-análises de estudos científicos publicados
              em revistas internacionais
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in" className="mt-12">
          <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-card max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-1 h-full bg-primary rounded-full" />
              <div>
                <h4 className="text-xl font-semibold text-card-foreground mb-4">
                  Como a TCC Funciona
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A Terapia Cognitivo-Comportamental parte do princípio de que
                  nossos <strong>pensamentos</strong>, <strong>emoções</strong>{" "}
                  e <strong>comportamentos</strong> estão interligados. Ao
                  identificar e modificar padrões de pensamento disfuncionais,
                  conseguimos alterar como nos sentimos e agimos.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Durante as sessões, você aprenderá a reconhecer pensamentos
                  automáticos negativos, questionar sua validade e desenvolver
                  formas mais adaptativas de interpretar situações. Isso resulta
                  em uma melhora significativa em sintomas de ansiedade,
                  depressão e outros transtornos emocionais.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
