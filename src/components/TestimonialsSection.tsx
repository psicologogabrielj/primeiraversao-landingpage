import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TestimonialsSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5513981664867";
    const message = "Olá! Gostaria de começar meu tratamento psicológico online.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const testimonials = [
    {
      text: "Acho que o melhor ganho que tive mesmo com pouco tempo de tratamento foi organizar melhor meus pensamentos. E isso acaba me ajudando no dia a dia desde as coisas mías básicas até as mais complexas",
      author: "V. C."
    },
    {
      text: "Desde que iniciei a terapia com o Gabriel, minha forma de enxergar meus pensamentos e emoções mudou significativamente. Aprendi a questionar meus pensamentos, diferenciando o que é real do que é apenas uma percepção distorcida, além de entender melhor o que está ou não no meu controle. Também percebi que alguns sentimentos que eu interpretava de uma forma eram, na verdade, manifestações da ansiedade, o que me trouxe mais clareza sobre minhas emoções. Outro ponto fundamental foi desenvolver o hábito de analisar minhas reações no dia a dia, evitando que certas situações passem despercebidas sem que eu compreenda o impacto delas em mim. Além disso, ser analisado por uma perspectiva externa, sem estar preso apenas ao meu próprio olhar, foi essencial para evoluir. O que mais me motiva na terapia com o Gabriel é a forma como as conversas acontecem: um diálogo real, construído em conjunto, com análises e exemplos que facilitam minha compreensão. Esse processo tem sido transformador e tem me ajudado a crescer cada vez mais.",
      author: "C. C."
    },
    {
      text: "As maiores mudanças que percebi depois de começar a fazer terapia foi inicialmente começar a lidar melhor com a minha ansiedade, saber identificar e controlá-la quando aparece, por meio de ferramentas como a respiração diafragmática. Aprendi também a buscar ajuda quando preciso e a contar com a minha rede de apoio.",
      author: "J. B."
    },
    {
      text: "Eu notei uma melhora significativa em relação ao meu bem estar, na forma que conduzo minhas emoções, fui perdendo o hábito de sempre pensar que algo ruim estava prestes a acontecer. Entendi melhor meus sentimentos e sou muito mais racional em relação aos meus medos. O fato de eu estar longe dos jogos de aposta também foi um alívio pra mim. Sei que é um trabalho 50/50 e que eu preciso estar disposta a evoluir e aplicar na vida o que você me entrega nas sessões. Então é muito bom saber que pros próximos \"problemas\" já vou ter uma base de como lidar, sabendo da forma que me sinto diante a eles",
      author: "A. W."
    },
    {
      text: "Acho que após o início da terapia eu consegui desenvolver algumas habilidades, como técnicas para me acalmar em momentos de stress ou ansiedade, além de identificar os gatilhos que me causam isso, assim eu consigo prevenir que isso aconteça. Além disso, acho que ensinou muito em descobrir quais são meus limites e como respeitá-los. Também em como me priorizar nas decisões, onde eu só olhava o que o outro achava era o correto. Acho que meu deu mais força / sabedoria em conseguir lidar com conflitos e situações não agradáveis, deixando claro o que é importante para mim e não abrir mão disso",
      author: "K. P."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Depoimentos de Pacientes
          </h2>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-testimonial rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 group break-inside-avoid mb-8">
              <div className="mb-4">
                <Quote className="h-8 w-8 text-primary opacity-60 mb-4" />
                <p className="text-testimonial-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-400">
                <p className="font-semibold text-testimonial-foreground">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            variant="hero"
            size="xl"
            onClick={handleWhatsAppClick}
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow hover:shadow-hover"
          >
            Começar Tratamento
          </Button>
        </div>
      </div>
    </section>
  );
};