import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "O atendimento online superou minhas expectativas. Me senti muito acolhida e consegui trabalhar questões importantes da minha vida. Recomendo totalmente!",
      author: "Maria, 34 anos",
      rating: 5
    },
    {
      text: "Estava com muita ansiedade e encontrei no atendimento online uma forma prática e eficaz de cuidar da minha saúde mental. Profissional muito competente!",
      author: "João, 28 anos", 
      rating: 5
    },
    {
      text: "A flexibilidade de horários e a qualidade do atendimento me ajudaram muito. Já são 8 meses de terapia e posso dizer que minha vida mudou para melhor.",
      author: "Ana, 41 anos",
      rating: 5
    },
    {
      text: "Nunca imaginei que a terapia online funcionaria tão bem. O psicólogo é muito atencioso e profissional. Me sinto muito mais confiante agora.",
      author: "Pedro, 25 anos",
      rating: 5
    },
    {
      text: "Excelente profissional! Me ajudou a superar um momento muito difícil da minha vida. O atendimento online é muito conveniente e eficaz.",
      author: "Carla, 37 anos",
      rating: 5
    },
    {
      text: "Recomendo de olhos fechados! A terapia online me permitiu cuidar da minha saúde mental sem sair de casa. Profissional muito qualificado.",
      author: "Lucas, 30 anos",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Depoimentos de Pacientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja o que nossos pacientes dizem sobre o atendimento psicológico online
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 group">
              <div className="mb-4">
                <Quote className="h-8 w-8 text-primary opacity-60 mb-4" />
                <p className="text-card-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                <div>
                  <p className="font-semibold text-card-foreground">{testimonial.author}</p>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
            <Star className="h-5 w-5 fill-primary" />
            <span className="font-semibold">4.9/5 - Baseado em 127 avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
};