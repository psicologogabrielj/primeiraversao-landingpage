import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { CiInstagram as Instagram } from "react-icons/ci";
import { useTrackEvent } from "@/lib/ga";
import { anosDeAtuacao } from "@/lib/experiencia";

import psychologistPhoto from "@/assets/gabriel.webp";

export function HeroSection() {
  const trackEvent = useTrackEvent();

  const handleWhatsAppHover = () => {
    trackEvent("WhatsApp Button", "Hover", "Hero Section");
  };

  const handleWhatsAppLeave = () => {
    trackEvent("WhatsApp Button", "Leave", "Hero Section");
  };

  const handleWhatsAppClick = () => {
    trackEvent("WhatsApp Button", "Click", "Hero Section");
  };

  const handleInstagramHover = () => {
    trackEvent("Instagram Button", "Hover", "Hero Section");
  };

  const handleInstagramLeave = () => {
    trackEvent("Instagram Button", "Leave", "Hero Section");
  };

  const handleInstagramClick = () => {
    trackEvent("Instagram Button", "Click", "Hero Section");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-hero-gradient flex items-center justify-center overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      {/* Content: pt-28 desconta a navbar fixa (h-20) para o título não colar nela */}
      <div className="relative z-10 container mx-auto px-4 pt-28 pb-16 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight text-balance">
                <span className="text-primary">Pensar</span> com mais clareza,{" "}
                <span className="text-primary">sentir</span> com mais
                consciência, <span className="text-primary">agir</span> com
                mais propósito
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Psicoterapia online, com eficácia e empatia. Enfrente emoções
                angustiantes com apoio especializado.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 [&_svg]:size-5"
              >
                <a
                  href={`https://wa.me/5513981664867?text=${encodeURIComponent(
                    "Olá! Gostaria de agendar uma consulta."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={handleWhatsAppHover}
                  onMouseLeave={handleWhatsAppLeave}
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle />
                  Agendar Consulta
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/50 bg-transparent text-foreground hover:bg-primary/10 hover:text-foreground transition-all duration-300 hover:scale-105 active:scale-95 [&_svg]:size-5"
              >
                <a
                  href="https://www.instagram.com/gabrieljpsi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={handleInstagramHover}
                  onMouseLeave={handleInstagramLeave}
                  onClick={handleInstagramClick}
                >
                  <Instagram />
                  Meu Instagram
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-4 sm:pt-8 max-w-lg">
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold text-primary">70+</p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Pacientes atendidos
                </p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold text-primary">
                  {anosDeAtuacao()}+
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Anos de experiência
                </p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Online no Brasil
                </p>
              </div>
            </div>
          </div>

          {/* Photo: no mobile vem antes do texto, menor, para o rosto aparecer na primeira tela */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-full bg-primary/20 blur-2xl"
              />
              <img
                src={psychologistPhoto}
                alt="Gabriel - Psicólogo clínico especialista em Terapia Cognitivo-Comportamental para ansiedade, depressão e TDAH"
                width={384}
                height={384}
                className="relative w-44 h-44 sm:w-64 sm:h-64 lg:w-96 lg:h-96 object-cover rounded-full shadow-card ring-4 ring-primary/60 ring-offset-4 ring-offset-background"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
