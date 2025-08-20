import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Como funciona a terapia online?",
      answer: "A terapia online acontece através de videochamadas seguras e confidenciais. Utilizamos plataformas criptografadas que garantem a privacidade total das sessões. Você pode participar de qualquer lugar confortável e privado, mantendo a mesma qualidade terapêutica das consultas presenciais."
    },
    {
      question: "Qual a duração das sessões?",
      answer: "Cada sessão tem duração de 50 minutos, seguindo o padrão estabelecido pela psicologia clínica. Esse tempo permite um trabalho terapêutico aprofundado e eficaz, respeitando os limites necessários para o processo terapêutico."
    },
    {
      question: "Com que frequência devo fazer terapia?",
      answer: "Geralmente recomendo sessões semanais no início do tratamento. A frequência pode ser ajustada conforme seu progresso e necessidades específicas. Alguns pacientes se beneficiam de sessões quinzenais após um período inicial de estabilização."
    },
    {
      question: "A terapia online é tão eficaz quanto a presencial?",
      answer: "Sim! Estudos científicos comprovam que a terapia online apresenta a mesma eficácia da terapia presencial. O que importa é o vínculo terapêutico e a qualidade do trabalho desenvolvido, não necessariamente o formato da sessão."
    },
    {
      question: "Como posso agendar uma consulta?",
      answer: "Você pode agendar através do WhatsApp, onde discutiremos sua disponibilidade e necessidades. Também oferecemos uma primeira conversa gratuita de 15 minutos para que você possa me conhecer e esclarecer suas dúvidas antes de iniciar o processo terapêutico."
    },
    {
      question: "Qual o valor das consultas?",
      answer: "Os valores são personalizados de acordo com a modalidade de atendimento escolhida. Entre em contato via WhatsApp para conhecer as opções de pagamento e possíveis facilidades. Oferecemos diferentes formas de pagamento para tornar o tratamento mais acessível."
    },
    {
      question: "Você atende convênios médicos?",
      answer: "Atualmente trabalho como particular, mas posso fornecer recibos para reembolso junto ao seu convênio médico. Muitos planos de saúde oferecem reembolso para consultas psicológicas - consulte seu convênio sobre essa possibilidade."
    },
    {
      question: "A terapia online é segura e confidencial?",
      answer: "Absolutamente! Utilizamos plataformas com criptografia de ponta a ponta e seguimos rigorosamente o Código de Ética Profissional do Psicólogo. Todas as informações compartilhadas são mantidas em sigilo absoluto, garantindo sua privacidade e segurança."
    }
  ];

  return (
    <section className="py-20 bg-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Encontre respostas para as principais questões sobre terapia online e nossos serviços
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-2xl px-6 border-0 shadow-card hover:shadow-hover transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export { FAQSection };