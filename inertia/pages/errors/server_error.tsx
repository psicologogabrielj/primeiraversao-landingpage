import { Head } from "@inertiajs/react";

export default function ServerError() {
  return (
    <>
      <Head>
        <title>Erro no servidor — Psicólogo Gabriel</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main className="grid min-h-screen place-items-center bg-background px-6 text-foreground">
        <div className="max-w-[46ch] text-center">
          <h1 className="mb-3 font-serif text-3xl">Algo deu errado do nosso lado.</h1>
          <p className="mb-7 text-muted-foreground">Tente de novo em instantes. Se preferir, fale direto pelo WhatsApp ou Instagram.</p>
          <a
            href="/"
            className="inline-flex h-11 items-center rounded-full bg-primary px-6 font-semibold text-primary-foreground hover:opacity-90"
          >
            Voltar para o início
          </a>
        </div>
      </main>
    </>
  );
}
