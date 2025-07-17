export const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Sobre Mim
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-card-foreground">
                <p className="text-lg leading-relaxed">
                  <strong className="text-primary">Bem-vindo(a)!</strong> Sou um psicólogo clínico com mais de 5 anos de experiência em atendimento online, especializado em ajudar pessoas a superarem desafios emocionais e desenvolverem seu bem-estar mental.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">Formação Acadêmica</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Graduação em Psicologia - Universidade...</li>
                      <li>• Especialização em Terapia Cognitivo-Comportamental</li>
                      <li>• Mestrado em Psicologia Clínica</li>
                      <li>• Formação em Atendimento Online</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">Áreas de Atuação</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Ansiedade e Transtornos de Humor</li>
                      <li>• Depressão e Autoestima</li>
                      <li>• Relacionamentos e Família</li>
                      <li>• Desenvolvimento Pessoal</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-background-subtle rounded-lg border border-primary/20">
                  <p className="text-center text-muted-foreground italic">
                    "Acredito que cada pessoa possui a capacidade de crescer e se transformar. Meu papel é oferecer um espaço seguro e acolhedor para que você possa explorar seus sentimentos e desenvolver novas perspectivas sobre a vida."
                  </p>
                </div>
                
                <div className="text-center mt-8">
                  <p className="text-sm text-muted-foreground">
                    CRP: 06/123456 - Registro válido no Conselho Regional de Psicologia
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