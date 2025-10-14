import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, User, Phone, Send } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { useTrackEvent } from "@/lib/ga";
import { toast } from "sonner";

export function ContactFormSection() {
  const trackEvent = useTrackEvent();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    trackEvent("Contact Form", "Submit", "Contact Form Section");

    // Simulate form submission - In production, integrate with your backend or email service
    setTimeout(() => {
      // Create WhatsApp message with form data
      const whatsappMessage = `Olá! Meu nome é ${formData.name}.

Email: ${formData.email}
Telefone: ${formData.phone}

Mensagem: ${formData.message}`;

      const whatsappUrl = `https://wa.me/5513981664867?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      toast.success("Redirecionando para WhatsApp...", {
        description: "Vamos continuar a conversa por lá!",
      });

      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
        setIsSubmitting(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 1500);
    }, 1000);
  };

  const handleWhatsAppDirect = () => {
    trackEvent("WhatsApp Button", "Click", "Contact Form - Direct");
    const whatsappUrl = `https://wa.me/5513981664867?text=${encodeURIComponent(
      "Olá! Gostaria de agendar uma consulta."
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Entre em Contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Escolha a forma mais confortável para você dar o primeiro passo
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <AnimatedSection animation="slide-in-left">
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h3 className="text-2xl font-semibold text-card-foreground mb-6">
                  Envie uma Mensagem
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Seu nome"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="seu@email.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Telefone (opcional)
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="(00) 00000-0000"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Conte um pouco sobre o que te traz aqui..."
                      rows={4}
                      className="resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Campos obrigatórios
                  </p>
                </form>
              </div>
            </AnimatedSection>

            {/* WhatsApp Direct Contact */}
            <AnimatedSection animation="slide-in-right">
              <div className="flex flex-col gap-6">
                <div className="bg-green-500/10 border-2 border-green-500/30 rounded-2xl p-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-center text-foreground mb-4">
                    Prefere WhatsApp?
                  </h3>
                  <p className="text-muted-foreground text-center mb-6">
                    Clique no botão abaixo para iniciar uma conversa diretamente
                    pelo WhatsApp. Respondo rapidamente!
                  </p>
                  <Button
                    onClick={handleWhatsAppDirect}
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                    size="lg"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Abrir WhatsApp
                  </Button>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-card">
                  <h4 className="text-lg font-semibold text-card-foreground mb-4">
                    Informações de Contato
                  </h4>
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-card-foreground">
                          Telefone
                        </p>
                        <p className="text-sm">+55 (13) 98166-4867</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-card-foreground">
                          Atendimento
                        </p>
                        <p className="text-sm">100% Online - Todo o Brasil</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MessageCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-card-foreground">
                          Tempo de Resposta
                        </p>
                        <p className="text-sm">Geralmente em até 24 horas</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6">
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    <strong className="text-foreground">
                      Confidencialidade garantida:
                    </strong>{" "}
                    Todas as informações compartilhadas são protegidas pelo
                    sigilo profissional do Código de Ética do Psicólogo.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
