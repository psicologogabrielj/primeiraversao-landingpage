import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export const InstagramSection = () => {
  return (
    <section className="py-20 bg-background-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Conteúdos no Instagram
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe meus conteúdos sobre psicologia e bem-estar
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-card rounded-2xl p-8 shadow-card mb-8">
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center" 
                alt="Instagram @gabrieljpsi"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            <h3 className="text-2xl font-serif font-bold text-card-foreground mb-4">
              @gabrieljpsi
            </h3>
            <p className="text-muted-foreground mb-6">
              Conteúdos sobre psicologia, saúde mental e bem-estar emocional
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('https://www.instagram.com/gabrieljpsi/', '_blank')}
              className="flex items-center gap-3"
            >
              <Instagram className="h-5 w-5" />
              Seguir no Instagram
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};