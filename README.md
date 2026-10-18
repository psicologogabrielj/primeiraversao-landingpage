# Landing Page - Psicólogo Clínico

Uma landing page profissional para psicólogo clínico especializado em atendimento online.

## Características

- **Design profissional** com cores escuras e destaques dourados
- **Seções personalizáveis** para informações do psicólogo
- **Responsivo** para todos os dispositivos
- **Integração com WhatsApp** para agendamento de consultas
- **Seção de depoimentos** de pacientes
- **Integração com Instagram** para mostrar conteúdos
- **Animações suaves** e transições elegantes

## Stack

AdonisJS 7 + Inertia (React 19) com SSR, Tailwind 4. Sem banco de dados.

- `inertia/pages/landing.tsx` — a página; seções em `inertia/components/`
- `resources/views/inertia_layout.edge` — `<head>` com SEO, Open Graph e JSON-LD
- `public/` — favicons, `robots.txt`, `sitemap.xml`, `llms.txt`
- `app/controllers/landing_controller.ts` — passa `GA_MEASUREMENT_ID` para a página

## Rodando localmente

Requer Node 24+.

```sh
npm install
cp .env.example .env
node ace generate:key
npm run dev        # http://localhost:3333
```

## Build e deploy

`node ace build` gera `build/`; o `Dockerfile` faz build e sobe `node bin/server.js`.
Deploy na Upuai Cloud (projeto `landing-pages`) a partir deste repositório.

Variáveis de produção: `NODE_ENV=production`, `HOST=0.0.0.0`, `PORT`, `APP_KEY`,
`APP_URL`, `APP_NAME`, `LOG_LEVEL`, `SESSION_DRIVER=cookie`, `TZ` e, opcional,
`GA_MEASUREMENT_ID` (Google Analytics 4).
