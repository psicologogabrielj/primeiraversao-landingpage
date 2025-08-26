export const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Sobre o Psicólogo Gabriel
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-card-foreground">
                <p className="text-lg leading-relaxed">
                  <strong className="text-primary">Bem-vindo(a)!</strong> Me chamo Gabriel. Sou psicólogo clínico, com 3 anos de atuação, com experiência em demandas variadas, e dedicado a ajudar pessoas a ganharem real independência sobre sua saúde mental.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">Formação Acadêmica</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Graduação em Psicologia – Universidade Federal de São Paulo</li>
                      <li>• Atuação com Terapia Cognitivo-Comportamental</li>
                      <li>• Formações em Prática Baseada em Evidências</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">Demandas atendidas</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Transtornos de Ansiedade</li>
                      <li>• Transtornos Depressivos</li>
                      <li>• TDAH</li>
                      <li>• Conflitos Amorosos</li>
                      <li>• Desenvolvimento Pessoal</li>
                      <li>• Autoestima</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-background-subtle rounded-lg border border-primary/20">
                  <p className="text-center text-muted-foreground italic">
                    "Ter autonomia sobre sua saúde mental, não significa deixar de viver experiências sofridas, mas saber que o sofrimento não é o fim do mundo. Podemos ir juntos nesse caminho."
                  </p>
                </div>
                
                <div className="text-center mt-8">
                  <p className="text-sm text-muted-foreground">
                    CRP: 06/171722 - Registro válido no Conselho Regional de Psicologia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};