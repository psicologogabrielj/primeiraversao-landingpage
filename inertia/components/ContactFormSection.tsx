import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, User, Phone, Send, Globe } from "lucide-react";
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

  // O "envio" é abrir o WhatsApp com a mensagem pronta. O window.open precisa
  // rodar direto no submit: dentro de setTimeout ele sai do gesto do usuário e
  // o bloqueador de pop-up (Safari/iOS principalmente) barra a janela.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("Contact Form", "Submit", "Contact Form Section");

    const linhas = [
      `Olá! Meu nome é ${formData.name}.`,
      "",
      formData.email ? `Email: ${formData.email}` : null,
      formData.phone ? `Telefone: ${formData.phone}` : null,
      "",
      `Mensagem: ${formData.message}`,
    ].filter((linha) => linha !== null);
    const whatsappUrl = `https://wa.me/5513981664867?text=${encodeURIComponent(
      linhas.join("\n")
    )}`;

    // Sem "noopener" aqui: com ele o window.open sempre retorna null e não dá
    // para saber se o pop-up foi bloqueado. O opener é zerado à mão.
    const janela = window.open(whatsappUrl, "_blank");
    if (!janela) {
      window.location.href = whatsappUrl;
      return;
    }
    janela.opener = null;

    toast.success("Abrindo o WhatsApp...", {
      description: "É só enviar a mensagem por lá!",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsAppDirect = () => {
    trackEvent("WhatsApp Button", "Click", "Contact Form - Direct");
    const whatsappUrl = `https://wa.me/5513981664867?text=${encodeURIComponent(
      "Olá! Gostaria de agendar uma consulta."
    )}`;
    window.open(whatsappUrl, "_blank", "noopener");
  };

  return (
    <section id="contato" className="py-20 bg-section-gradient">
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
                    <label
                      htmlFor="contato-name"
                      className="block text-sm font-medium text-card-foreground mb-2"
                    >
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User aria-hidden className="pointer-events-none absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="text"
                        id="contato-name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Seu nome"
                        autoComplete="name"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contato-email"
                      className="block text-sm font-medium text-card-foreground mb-2"
                    >
                      Email (opcional)
                    </label>
                    <div className="relative">
                      <Mail aria-hidden className="pointer-events-none absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="email"
                        id="contato-email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="seu@email.com"
                        autoComplete="email"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contato-phone"
                      className="block text-sm font-medium text-card-foreground mb-2"
                    >
                      Telefone (opcional)
                    </label>
                    <div className="relative">
                      <Phone aria-hidden className="pointer-events-none absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="tel"
                        id="contato-phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="(00) 00000-0000"
                        autoComplete="tel"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contato-message"
                      className="block text-sm font-medium text-card-foreground mb-2"
                    >
                      Mensagem *
                    </label>
                    <Textarea
                      id="contato-message"
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
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground [&_svg]:size-5"
                    size="lg"
                  >
                    <Send />
                    Enviar pelo WhatsApp
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Campos obrigatórios. A mensagem abre pronta no
                    WhatsApp — nada fica salvo no site.
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
                      <Globe className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
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
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Confidencialidade - Centralizada entre as duas colunas */}
        <AnimatedSection animation="fade-in-up" className="mt-12">
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground block mb-1">
                  Confidencialidade garantida:
                </strong>
                Todas as informações compartilhadas são protegidas pelo sigilo
                profissional do Código de Ética do Psicólogo.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
