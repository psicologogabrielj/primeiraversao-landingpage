import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999"; // Substitua pelo número real
    const message = "Olá! Gostaria de agendar uma consulta psicológica online.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        variant="whatsapp"
        size="lg"
        onClick={handleWhatsAppClick}
        className="rounded-full shadow-2xl hover:shadow-3xl animate-glow"
      >
        <MessageCircle className="h-6 w-6 mr-2" />
        Agendar Consulta
      </Button>
    </div>
  );
};