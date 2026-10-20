import {
  Phone,
  Mail,
  MapPin,
  Shield,
  Instagram,
  Linkedin,
} from "lucide-react";
import { rastrear } from "@/lib/analytics";

export const Footer = () => {
  const handlePhoneClick = () => {
    rastrear("Footer", "Click", "Phone Number");
  };

  const handleEmailClick = () => {
    rastrear("Footer", "Click", "Email");
  };

  const handleInstagramClick = () => {
    rastrear("Footer", "Click", "Instagram");
  };

  const handleLinkedInClick = () => {
    rastrear("Footer", "Click", "LinkedIn");
  };

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
              <a
                href="tel:+5513981664867"
                onClick={handlePhoneClick}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                <Phone className="h-5 w-5" />
                <span>(13) 98166-4867</span>
              </a>
              <a
                href="mailto:psicologo.gabrielj@gmail.com"
                onClick={handleEmailClick}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                <Mail className="h-5 w-5" />
                <span className="break-all">psicologo.gabrielj@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Atendimento Online</span>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.instagram.com/gabrieljpsi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleInstagramClick}
                  aria-label="Instagram do Gabriel"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/gabrielj-psi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkedInClick}
                  aria-label="LinkedIn do Gabriel"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
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
                Atendimento psicológico online seguindo rigorosamente o código
                de ética profissional
              </p>
            </div>
          </div>

          {/* Horários */}
          <div>
            <h3 className="text-xl font-serif font-bold text-card-foreground mb-4">
              Horários de Atendimento
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <div>Segunda à Sexta: 10:30h - 13h e 14h - 22:30h</div>
              <div className="text-sm italic mt-2">
                Atendimento apenas com hora marcada
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>Enfrentar o desconforto é o que gera a mudança</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
