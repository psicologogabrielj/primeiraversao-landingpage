import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-psychology.jpg";
import psychologistPhoto from "@/assets/psychologist-photo.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Consultório de psicologia" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                Sua jornada de 
                <span className="text-primary block">bem-estar mental</span>
                começa aqui
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Atendimento psicológico online com qualidade, sigilo e acolhimento. 
                Transforme sua vida com o apoio de um profissional qualificado.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                className="flex items-center gap-3"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              >
                <MessageCircle className="h-5 w-5" />
                Agendar Consulta
              </Button>
              
              <Button 
                variant="elegant" 
                size="xl"
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conheça mais
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground">Pacientes atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-muted-foreground">Online</div>
              </div>
            </div>
          </div>
          
          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl animate-glow" />
              <img 
                src={psychologistPhoto} 
                alt="Psicólogo clínico" 
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-hover border-4 border-primary/30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};