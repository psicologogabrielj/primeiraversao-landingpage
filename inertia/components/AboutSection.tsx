import { AnimatedSection } from "./AnimatedSection";
import retratoSobre from "@/assets/gabriel-sobre.webp";

// Atuação e formações em dois grupos: "Psicoterapia" e "Formação Acadêmica" são
// as categorias (sem marcador, em destaque) e os itens abaixo delas são o que
// compõe cada uma.
const atuacoesEFormacoes = [
  {
    categoria: "Psicoterapia",
    itens: [
      "Terapia Cognitivo-Comportamental",
      "Tomada de decisão via paradigma da PBE",
    ],
  },
  {
    categoria: "Formação Acadêmica",
    itens: [
      "Cursos de formação em PBE",
      "1ª turma de Especialização no InPBE",
      "Formação em psicoterapia para Autismo nível 1 de suporte",
    ],
  },
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
                <div className="text-card-foreground">
                  {/* Retrato ao lado do texto de abertura; no mobile a foto vem
                      primeiro, para a apresentação começar pelo rosto. */}
                  <div className="grid gap-8 lg:grid-cols-[minmax(0,19rem)_1fr] lg:gap-12 lg:items-center">
                    <div className="relative mx-auto w-full max-w-[15rem] sm:max-w-[17rem] lg:max-w-none">
                      <div
                        aria-hidden
                        className="absolute -inset-2 rounded-2xl bg-primary/20 blur-xl"
                      />
                      <img
                        src={retratoSobre}
                        alt="Gabriel, psicólogo clínico, com a mão no queixo, em fundo escuro"
                        width={900}
                        height={1125}
                        className="relative w-full aspect-[4/5] object-cover rounded-2xl shadow-card ring-1 ring-primary/30"
                        loading="lazy"
                      />
                    </div>

                    <p className="text-lg leading-relaxed text-center lg:text-left">
                      <strong className="text-primary">Bem vindo (a)!</strong>{" "}
                      Meu nome é Gabriel. Sou psicólogo clínico. No tratamento,
                      eu espero te ajudar a ganhar real independência sobre a
                      sua saúde mental, sejam os seus problemas envolvendo
                      diferentes transtornos, mas também dificuldades da vida que
                      te abalam de alguma forma. Quero realmente que você viva
                      uma vida que sente que vale à pena, apesar do desconforto
                      que aparecer.
                    </p>
                  </div>

                  {/* "Psicoterapia" e "Formação Acadêmica" são categorias, não
                      itens de lista: entram em negrito, sem marcador, e o que
                      vem abaixo é o que compõe cada uma. */}
                  <div className="grid gap-x-10 gap-y-8 mt-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr]">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-4">
                        Atuação e Formações
                      </h3>
                      <div className="space-y-5 text-[0.95rem] leading-snug text-muted-foreground">
                        {atuacoesEFormacoes.map((grupo) => (
                          <div key={grupo.categoria} className="space-y-2">
                            <p className="font-semibold text-card-foreground">
                              {grupo.categoria}
                            </p>
                            <ul className="space-y-1.5 pl-4">
                              {grupo.itens.map((item) => (
                                <li key={item} className="flex gap-2">
                                  <span aria-hidden className="text-primary/70">
                                    •
                                  </span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-4">
                        Demandas atendidas
                      </h3>
                      <ul className="space-y-1.5 text-[0.95rem] leading-snug text-muted-foreground">
                        {demandasAtendidas.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span aria-hidden className="text-primary/70">
                              •
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10 p-6 bg-background-subtle rounded-lg border border-primary/20">
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
