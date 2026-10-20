import { ChevronDown } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { rastrear } from "@/lib/analytics";
import { faqs } from "@/data/faq";

/**
 * <details>/<summary> nativos em vez do Accordion do Radix: o Radix só monta
 * a resposta quando o item abre, então o HTML do SSR chegava ao Google sem
 * nenhuma resposta. Aqui todas vêm no HTML, funciona sem JS, e o atributo
 * `name` mantém um item aberto por vez, como o accordion fazia.
 */
const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-background-subtle">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Dúvidas Frequentes
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Encontre respostas para as principais questões sobre terapia
              online e nossos serviços
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up">
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                name="faq"
                className="group bg-card rounded-2xl px-6 border border-border shadow-card hover:border-primary/30 open:border-primary/40 transition-colors duration-300"
                onToggle={(e) => {
                  if (e.currentTarget.open) {
                    rastrear("FAQ", "Question Opened", faq.question);
                  }
                }}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 sm:py-6 text-left text-base sm:text-lg font-semibold text-foreground hover:text-primary transition-colors [&::-webkit-details-marker]:hidden">
                  <h3>{faq.question}</h3>
                  <ChevronDown
                    aria-hidden
                    className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>
                <p className="text-muted-foreground leading-relaxed pb-6 text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export { FAQSection };
