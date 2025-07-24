import { Clock, Shield, CreditCard, Video } from "lucide-react";
import onlineTherapyImage from "@/assets/online-therapy-illustration.jpg";

export const OnlineTherapySection = () => {
  const features = [
    {
      icon: Video,
      title: "Atendimento por Videochamada",
      description: "Sessões realizadas através de plataforma segura e profissional, garantindo a mesma qualidade do atendimento presencial."
    },
    {
      icon: Clock,
      title: "Sessões de 50 minutos",
      description: "Encontros semanais ou quinzenais, de acordo com a etapa em que o seu processo de terapia está."
    },
    {
      icon: Shield,
      title: "Sigilo e Ética Profissional",
      description: "Todos os atendimentos seguem o código de ética estabelecido pelo Conselho Federal de Psicologia (CFP), garantindo sigilo durante os atendimentos."
    },
    {
      icon: CreditCard,
      title: "Formas de Pagamento",
      description: "Pagamento via PIX ou cartão de crédito, via aplicativo InfinitePay. Envio de recibo, seguindo as normas do CFP, através do Receita Saúde."
    }
  ];

  return (
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Como Funciona a Terapia Online
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um processo simples, seguro e eficaz para cuidar da sua saúde mental no conforto do seu lar
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <img 
              src={onlineTherapyImage} 
              alt="Como funciona a terapia online" 
              className="w-full rounded-2xl shadow-hover"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-lg p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">R$ 120</div>
                <div className="text-sm opacity-90">por sessão</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card">
          <h3 className="text-2xl font-serif font-bold text-center text-card-foreground mb-8">
            Processo de Agendamento
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="text-lg font-semibold text-card-foreground mb-2">Entre em Contato</h4>
              <p className="text-muted-foreground">Envie uma mensagem via WhatsApp para agendar sua primeira consulta</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h4 className="text-lg font-semibold text-card-foreground mb-2">Primeiro Encontro</h4>
              <p className="text-muted-foreground">Momento para você trazer o que te motiva a procurar tratamento, tirar suas maiores dúvidas e entender como o processo de psicoterapia pode te ajudar de maneira específica.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h4 className="text-lg font-semibold text-card-foreground mb-2">Início das sessões</h4>
              <p className="text-muted-foreground">Sessões semanais regulares, focadas em um trabalho horizontal e com objetivo de sanar as metas estipuladas em conjunto ao longo do processo de psicoterapia. Seguindo, portanto, até o momento da alta.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};