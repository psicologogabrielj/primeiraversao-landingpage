import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { CiInstagram as Instagram } from "react-icons/ci";

import psychologistPhoto from "@/assets/f18bb6da-f51f-4400-9156-6e593a7a4d56.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-hero-gradient flex items-center justify-center overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                <span className="font-bold text-primary">Pensar</span> com mais
                clareza, <span className="font-bold text-primary">sentir</span>{" "}
                com mais consciência,
                <span className="font-bold text-primary block">agir</span> com
                mais propósito
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Psicoterapia online, com eficácia e empatia. Enfrente emoções
                angustiantes com apoio especializado.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={() => {
                  const whatsappUrl = `https://wa.me/5513981664867?text=${encodeURIComponent(
                    "Olá! Gostaria de agendar uma consulta."
                  )}`;
                  window.location.href = whatsappUrl;
                }}
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white"
              >
                <MessageCircle className="h-5 w-5" />
                Agendar Consulta
              </Button>

              <Button
                variant="default"
                size="lg"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/gabrieljpsi/",
                    "_blank"
                  )
                }
                className="flex items-center gap-3"
              >
                <Instagram className="h-5 w-5" />
                Meu Instagram
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">70+</div>
                <div className="text-muted-foreground">Pacientes atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {new Date().getFullYear() - 2022}+
                </div>
                <div className="text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-muted-foreground">Online no Brasil</div>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={psychologistPhoto}
                alt="Gabriel - Psicólogo clínico especialista em Terapia Cognitivo-Comportamental para ansiedade, depressão e TDAH"
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-card border-2 border-primary/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
