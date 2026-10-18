import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { useTrackEvent } from "@/lib/ga";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const trackEvent = useTrackEvent();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Os itens são <a href="#secao"> (rastreáveis e funcionam sem JS); com JS o
  // clique vira rolagem suave descontando a navbar fixa.
  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    const element = document.getElementById(sectionId);
    if (element) {
      event.preventDefault();
      history.replaceState(null, "", `#${sectionId}`);
      const offset = 80; // Altura da navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsMobileMenuOpen(false);
      trackEvent("Navigation", "Click", sectionId);
    }
  };

  const handleWhatsAppClick = () => {
    trackEvent("WhatsApp Button", "Click", "Navbar");
  };

  const navLinks = [
    { label: "Início", id: "hero" },
    { label: "Sobre", id: "sobre" },
    { label: "Terapia Online", id: "therapy" },
    { label: "Depoimentos", id: "testimonials" },
    { label: "Dúvidas", id: "faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav aria-label="Principal" className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              trackEvent("Navigation", "Click", "logo");
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="flex flex-col">
              <span className="text-lg font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                Gabriel Jesus
              </span>
              <span className="text-xs text-muted-foreground">
                Psicólogo CRP 06/171722
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(event) => scrollToSection(event, link.id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            <Button
              asChild
              size="sm"
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <a
                href={`https://wa.me/5513981664867?text=${encodeURIComponent(
                  "Olá! Gostaria de agendar uma consulta."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle />
                Agendar
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="menu-mobile"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="menu-mobile" className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-5 duration-300">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(event) => scrollToSection(event, link.id)}
                  className="text-left px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}

              <div className="px-4">
                <Button
                  asChild
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  <a
                    href={`https://wa.me/5513981664867?text=${encodeURIComponent(
                      "Olá! Gostaria de agendar uma consulta."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageCircle />
                    Agendar Consulta
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
