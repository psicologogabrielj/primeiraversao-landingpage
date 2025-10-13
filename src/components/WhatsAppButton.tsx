import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function WhatsAppButton({
  onClick,
  onMouseEnter,
  onMouseLeave,
}: WhatsAppButtonProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        href={`https://wa.me/5513981664867?text=${encodeURIComponent(
          "Olá! Gostaria de agendar uma consulta."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="default"
          size="lg"
          onClick={onClick}
          className="rounded-full shadow-2xl hover:shadow-3xl animate-glow bg-green-500 hover:bg-green-600 text-white"
        >
          <MessageCircle className="h-6 w-6 mr-2" />
          Agendar Consulta
        </Button>
      </a>
    </div>
  );
}
