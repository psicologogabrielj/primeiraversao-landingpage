import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5513981664867";
    const message = "Olá! Gostaria de agendar uma consulta psicológica online.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="default"
        size="lg"
        onClick={handleWhatsAppClick}
        className="rounded-full shadow-2xl hover:shadow-3xl animate-glow bg-green-500 hover:bg-green-600 text-white"
      >
        <MessageCircle className="h-6 w-6 mr-2" />
        Agendar Consulta
      </Button>
    </div>
  );
};
