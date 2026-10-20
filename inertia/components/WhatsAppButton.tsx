import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { WhatsAppLink } from "./WhatsAppLink";

export function WhatsAppButton() {
  // No topo o hero já tem o CTA de agendar; o flutuante só aparece depois,
  // e assim não cobre os botões do hero no mobile.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <WhatsAppLink
      origem="Floating Button"
      aria-label="Agendar consulta pelo WhatsApp"
      tabIndex={visible ? 0 : -1}
      className={cn(
        "fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 inline-flex items-center gap-2 rounded-full bg-green-700 hover:bg-green-800 text-white font-medium shadow-2xl animate-glow transition-all duration-300",
        "h-14 w-14 justify-center sm:h-12 sm:w-auto sm:px-6",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <MessageCircle className="h-6 w-6 shrink-0" />
      <span className="hidden sm:inline">Agendar Consulta</span>
    </WhatsAppLink>
  );
}
