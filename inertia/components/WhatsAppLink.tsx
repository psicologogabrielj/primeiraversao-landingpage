import type { ComponentProps } from "react";
import { rastrearCliqueWhatsApp } from "@/lib/analytics";

const NUMERO = "5513981664867";

type Props = Omit<ComponentProps<"a">, "href" | "target" | "rel" | "onClick"> & {
  /** Qual botão foi clicado, para o relatório de conversões. */
  origem: string;
  mensagem?: string;
};

/**
 * O único jeito de abrir o WhatsApp: monta o link e registra o clique como
 * conversão. Funciona dentro de <Button asChild>.
 */
export function WhatsAppLink({
  origem,
  mensagem = "Olá! Gostaria de agendar uma consulta.",
  ...props
}: Props) {
  return (
    <a
      {...props}
      href={`https://wa.me/${NUMERO}?text=${encodeURIComponent(mensagem)}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => rastrearCliqueWhatsApp(origem)}
    />
  );
}
