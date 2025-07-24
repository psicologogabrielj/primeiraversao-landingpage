import { Heart, Phone, Mail, MapPin, Shield } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contato */}
          <div>
            <h3 className="text-xl font-serif font-bold text-card-foreground mb-4">
              Contato
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5" />
                <span>contato@psicologo.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Atendimento Online</span>
              </div>
            </div>
          </div>
          
          {/* Informações */}
          <div>
            <h3 className="text-xl font-serif font-bold text-card-foreground mb-4">
              Informações
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Shield className="h-5 w-5" />
                <span>CRP: 06/171722</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Atendimento psicológico online seguindo rigorosamente o código de ética profissional
              </p>
            </div>
          </div>
          
          {/* Horários */}
          <div>
            <h3 className="text-xl font-serif font-bold text-card-foreground mb-4">
              Horários de Atendimento
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <div>Segunda à Sexta: 08h - 19h</div>
              <div>Sábado: 08h - 12h</div>
              <div>Domingo: Fechado</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span>para cuidar da sua saúde mental</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 Psicologia Clínica Online. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};