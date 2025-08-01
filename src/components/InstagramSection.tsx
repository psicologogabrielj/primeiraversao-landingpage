import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import instagramPost1 from "@/assets/instagram-post-1.jpg";
import instagramPost2 from "@/assets/instagram-post-2.jpg";
import instagramPost3 from "@/assets/instagram-post-3.jpg";

export const InstagramSection = () => {
  const posts = [
    {
      image: instagramPost1,
      caption: "Conteúdo sobre psicologia e bem-estar",
      url: "https://www.instagram.com/gabrieljpsi/reel/DMuxI14O0ns/"
    },
    {
      image: instagramPost2,
      caption: "Reflexões e dicas de saúde mental",
      url: "https://www.instagram.com/gabrieljpsi/reel/DKZZOVYOw-Z/"
    },
    {
      image: instagramPost3,
      caption: "Insights sobre terapia e crescimento pessoal",
      url: "https://www.instagram.com/p/DMFk7-DOEVU/"
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
            <div key={index} className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group cursor-pointer" onClick={() => window.open(post.url, '_blank')}>
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
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Instagram className="h-4 w-4" />
                  <span>@gabrieljpsi</span>
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