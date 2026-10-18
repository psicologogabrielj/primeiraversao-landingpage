import { Head } from "@inertiajs/react";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Página não encontrada — Psicólogo Gabriel</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main className="grid min-h-screen place-items-center bg-background px-6 text-foreground">
        <div className="max-w-[46ch] text-center">
          <p className="mb-3 font-serif text-6xl text-primary">404</p>
          <h1 className="mb-3 font-serif text-3xl">Essa página não existe.</h1>
          <p className="mb-7 text-muted-foreground">O link pode estar desatualizado. A página principal continua no mesmo lugar.</p>
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
