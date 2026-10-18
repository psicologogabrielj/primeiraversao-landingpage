import { Clock, Shield, CreditCard, Video } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import onlineTherapyImage from "@/assets/ambiente-atendimento.webp";

export const OnlineTherapySection = () => {
  const features = [
    {
      icon: Video,
      title: "Atendimento por Videochamada",
      description:
        "Sessões realizadas através de plataforma segura e profissional, garantindo a mesma qualidade do atendimento presencial.",
    },
    {
      icon: Clock,
      title: "Sessões de 50 minutos",
      description:
        "Encontros semanais ou quinzenais, de acordo com a etapa em que o seu processo de terapia está.",
    },
    {
      icon: Shield,
      title: "Sigilo e Ética Profissional",
      description:
        "Todos os atendimentos seguem o código de ética estabelecido pelo Conselho Federal de Psicologia (CFP), garantindo sigilo durante os atendimentos.",
    },
    {
      icon: CreditCard,
      title: "Formas de Pagamento",
      description:
        "Pagamento via PIX ou cartão de crédito, via aplicativo InfinitePay. Envio de recibo, seguindo as normas do CFP, através do Receita Saúde.",
    },
  ];

  const steps = [
    {
      title: "Entre em Contato",
      description:
        "Envie uma mensagem via WhatsApp para agendar sua primeira consulta",
    },
    {
      title: "Primeiro Encontro",
      description:
        "Momento para você trazer o que te motiva a procurar tratamento, tirar suas maiores dúvidas e entender como o processo de psicoterapia pode te ajudar de maneira específica.",
    },
    {
      title: "Início das sessões",
      description:
        "Sessões semanais regulares, focadas em um trabalho horizontal e com objetivo de sanar as metas estipuladas em conjunto ao longo do processo de psicoterapia. Seguindo, portanto, até o momento da alta.",
    },
  ];

  return (
    <section id="therapy" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Como Funciona a Terapia Online
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Um processo simples, seguro e eficaz para cuidar da sua saúde
              mental no conforto do seu lar
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <AnimatedSection animation="slide-in-left">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-in-right">
            <div className="relative group">
              <img
                src={onlineTherapyImage}
                alt="Ambiente de trabalho para terapia online - laptop e xícara em mesa de madeira"
                width={735}
                height={1028}
                className="w-full max-h-80 lg:max-h-[560px] object-cover rounded-2xl shadow-hover"
                style={{
                  filter:
                    "sepia(10%) saturate(120%) hue-rotate(340deg) brightness(95%) contrast(105%)",
                }}
                loading="lazy"
              />
              {/* Overlay sutil para harmonizar com a paleta */}
              <div className="absolute inset-0 bg-primary/5 rounded-2xl mix-blend-overlay" />
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-in-up">
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card hover:shadow-hover transition-all duration-300">
            <h3 className="text-2xl font-serif font-bold text-center text-card-foreground mb-10">
              Processo de Agendamento
            </h3>

            <ol className="grid gap-8 md:grid-cols-3">
              {steps.map((step, index) => (
                <li key={step.title} className="flex md:flex-col items-start gap-4">
                  <div className="w-14 h-14 bg-primary/15 rounded-full flex items-center justify-center border-2 border-primary/40 shadow-md flex-shrink-0">
                    <span className="text-xl font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
