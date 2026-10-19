import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Globe, Clock, Lock } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { useTrackEvent } from "@/lib/ga";

const WHATSAPP_URL = `https://wa.me/5513981664867?text=${encodeURIComponent(
  "Olá! Gostaria de agendar uma consulta."
)}`;

export function ContactSection() {
  const trackEvent = useTrackEvent();

  const handleWhatsAppClick = () => {
    trackEvent("WhatsApp Button", "Click", "Contact Section");
  };

  const infos = [
    { icon: Phone, label: "Telefone / WhatsApp", value: "+55 (13) 98166-4867" },
    { icon: Globe, label: "Atendimento", value: "100% online, todo o Brasil" },
    { icon: Clock, label: "Tempo de resposta", value: "Geralmente em até 24 horas" },
  ];

  return (
    <section id="contato" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Entre em Contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              O primeiro passo é uma mensagem. Me chame no WhatsApp e a gente
              combina o melhor horário para você.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="scale-in">
          <div className="max-w-3xl mx-auto bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-card text-center">
            <div className="mx-auto mb-6 w-16 h-16 bg-green-700 rounded-full flex items-center justify-center shadow-lg">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-card-foreground mb-3">
              Agende pelo WhatsApp
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Tire suas dúvidas, conheça como funciona o atendimento e marque
              sua primeira sessão. Respondo rapidamente!
            </p>

            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto h-14 px-10 text-base bg-green-700 hover:bg-green-800 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 [&_svg]:size-5"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle />
                Conversar no WhatsApp
              </a>
            </Button>

            <ul className="mt-10 pt-8 border-t border-border grid gap-6 sm:grid-cols-3 text-left sm:text-center">
              {infos.map((info) => (
                <li
                  key={info.label}
                  className="flex sm:flex-col items-center gap-3 sm:gap-2"
                >
                  <info.icon className="h-5 w-5 text-primary shrink-0" aria-hidden />
                  <div>
                    <p className="text-sm font-medium text-card-foreground">
                      {info.label}
                    </p>
                    <p className="text-sm text-muted-foreground">{info.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-8 flex items-start sm:items-center justify-center gap-2 text-xs text-muted-foreground text-left sm:text-center">
              <Lock className="h-4 w-4 text-primary shrink-0" aria-hidden />
              Tudo o que você compartilhar é protegido pelo sigilo profissional
              do Código de Ética do Psicólogo.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
