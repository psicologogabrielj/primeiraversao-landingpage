import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  consentimentoSalvo,
  definirConsentimento,
  type Consentimento,
} from "@/lib/analytics";

/**
 * Aviso de cookies da LGPD. Só aparece até a pessoa escolher; a escolha fica
 * no localStorage. Montado só no cliente (o SSR não sabe a escolha), e por
 * ser fixed não empurra o layout quando surge. No celular deixa livre o
 * canto direito, onde fica o botão flutuante do WhatsApp.
 */
export function CookieBanner() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => setVisivel(consentimentoSalvo() === null), []);

  if (!visivel) return null;

  const escolher = (consentimento: Consentimento) => {
    definirConsentimento(consentimento);
    setVisivel(false);
  };

  return (
    <section
      aria-label="Aviso de cookies"
      className="fixed left-3 right-[5.25rem] bottom-3 z-[60] rounded-2xl border border-border bg-card/95 p-5 shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-5 duration-300 sm:right-auto sm:left-6 sm:bottom-6 sm:max-w-md"
    >
      <p className="text-sm leading-relaxed text-card-foreground">
        Usamos cookies e gravações anônimas da navegação para entender como o
        site é usado e medir o resultado dos anúncios. Você pode aceitar ou
        recusar; o site funciona igual.
      </p>
      <div className="mt-4 flex justify-end gap-3">
        <Button variant="outline" size="sm" onClick={() => escolher("recusado")}>
          Recusar
        </Button>
        <Button size="sm" onClick={() => escolher("aceito")}>
          Aceitar
        </Button>
      </div>
    </section>
  );
}
