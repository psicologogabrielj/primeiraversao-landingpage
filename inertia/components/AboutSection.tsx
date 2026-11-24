import { AnimatedSection } from "./AnimatedSection";

// Atuação e formações na ordem pedida pelo Gabriel. "Formação Acadêmica"
// aparece como item de destaque no meio da lista (e não como título de outro
// bloco), então a lista é uma só, sem subdivisões.
const atuacoesEFormacoes = [
  "Psicoterapia",
  "Terapia Cognitivo-Comportamental",
  "Tomada de decisão via paradigma da PBE",
  "Formação Acadêmica",
  "Cursos de formação em PBE",
  "1ª turma de Especialização no InPBE",
  "Formação em psicoterapia para Autismo nível 1 de suporte",
];

const demandasAtendidas = [
  "Transtornos de Ansiedade",
  "Transtornos Depressivos",
  "Autismo nível 1 de suporte",
  "Procrastinação",
  "Autocobrança",
  "Autoestima",
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-background-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                Sobre o Psicólogo Gabriel
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale-in">
            <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card hover:shadow-hover transition-all duration-300">
              <div className="prose prose-lg max-w-none">
                <div className="space-y-6 text-card-foreground">
                  <p className="text-lg leading-relaxed">
                    <strong className="text-primary">Bem vindo (a)!</strong>{" "}
                    Meu nome é Gabriel. Sou psicólogo clínico. No tratamento, eu
                    espero te ajudar a ganhar real independência sobre a sua
                    saúde mental, sejam os seus problemas envolvendo diferentes
                    transtornos, mas também dificuldades da vida que te abalam
                    de alguma forma. Quero realmente que você viva uma vida que
                    sente que vale à pena, apesar do desconforto que aparecer.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-4">
                        Atuação e Formações
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        {atuacoesEFormacoes.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-4">
                        Demandas atendidas
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        {demandasAtendidas.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-background-subtle rounded-lg border border-primary/20">
                    <p className="text-center text-muted-foreground italic">
                      "Ter autonomia sobre sua saúde mental, não significa
                      deixar de viver experiências sofridas, mas saber que o
                      sofrimento não é o fim do mundo. Podemos ir juntos nesse
                      caminho."
                    </p>
                  </div>

                  <div className="text-center mt-8">
                    <p className="text-sm text-muted-foreground">
                      CRP: 06/171722 - Registro válido no Conselho Regional de
                      Psicologia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
