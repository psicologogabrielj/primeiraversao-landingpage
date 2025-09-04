import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Sessões online são seguras?",
      answer: "Sim, por conta de as chamadas serem realizadas através de plataforma que utiliza criptografia de dados em trânsito e em repouso, proteção contra acesso não autorizado a reuniões. Para estar de acordo com as orientações de privacidade e sigilo colocadas pelo Conselho Federal de Psicologia, as são sessões a partir de um ambiente privado, seguro e utilizando fones de ouvido a todo momento (o paciente é aconselhado a seguir as mesmas orientações)."
    },
    {
      question: "Preciso levar alguma coisa para as consultas?",
      answer: "Não é obrigatório levar nada para o atendimento. Mas, pensando em melhorar a experiência da sessão, aproveitando o conforto da sua casa e mantendo o sigilo do atendimento, algumas ideias são: trazer um bloco de anotações para insights, trazer uma bebida como um chá ou chocolate quente, manter o ambiente climatizado, estar em um local confortável e privativo, ter um lenço para se uma emoção mais intensa surgir. Evite ter no ambiente estímulos que possam te distrair, como músicas agitadas ou avisos de notificação."
    },
    {
      question: "Como sei que o tratamento está funcionando?",
      answer: "Os objetivos terapêuticos, de curto e longo prazo, ajudam a ter uma melhor compreensão do quanto as habilidades desenvolvidas estão permitindo sua evolução para melhora. Além disso, como medida objetiva, é feito ao longo do tratamento um monitoramento do progresso via aplicação de escalas e automonitoramento de comportamentos-alvo relevantes ao tratamento."
    },
    {
      question: "Sou obrigado a também passar com psiquiatra?",
      answer: "Não existe obrigatoriedade, porém há quadros em que a consulta com o psiquiatra pode sim ser recomendada para melhorar a evolução do caso, facilitando reduzir o sofrimento psicológico. Porém caso o paciente não queira fazer uso de medicações, é de sua livre escolha deixar de passar por esse tipo de atendimento com o médico psiquiatra."
    },
    {
      question: "Preciso fazer terapia para sempre?",
      answer: "Não, pois o processo é pensado baseado em objetivos terapêuticos que auxiliam a direcionar o tratamento, e planejar as intervenções. Assim, de forma colaborativa com cada paciente, as sessões passam de semanais, para quinzenais e, finalmente, chega-se à alta da psicoterapia."
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
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
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