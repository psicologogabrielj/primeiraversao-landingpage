import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import instagramPost1 from "@/assets/instagram-post-1.jpg";
import instagramPost2 from "@/assets/instagram-post-2.jpg";
import instagramPost3 from "@/assets/instagram-post-3.jpg";

export const InstagramSection = () => {
  const posts = [
    {
      image: instagramPost1,
      caption: "Dica importante sobre saúde mental e autocuidado",
      likes: 245,
      comments: 18
    },
    {
      image: instagramPost2,
      caption: "Como funciona a terapia online - benefícios e vantagens",
      likes: 189,
      comments: 12
    },
    {
      image: instagramPost3,
      caption: "Reflexões sobre bem-estar emocional e crescimento pessoal",
      likes: 312,
      comments: 24
    }
  ];

  return (
    <section className="py-20 bg-background-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Conteúdos no Instagram
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe meus últimos conteúdos
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <div key={index} className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={`Post do Instagram ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="hero" size="sm" className="opacity-90">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver post
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-card-foreground mb-4 line-clamp-2">{post.caption}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{post.likes} likes</span>
                  <span>{post.comments} comentários</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open('https://instagram.com/gabrieljpsi', '_blank')}
            className="flex items-center gap-3"
          >
            <Instagram className="h-5 w-5" />
            Seguir no Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};