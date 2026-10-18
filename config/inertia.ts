import { defineConfig } from '@adonisjs/inertia'

export default defineConfig({
  rootView: 'inertia_layout',

  /**
   * Desligado de propósito. A cifragem do histórico depende da Web Crypto, que
   * só existe em contexto seguro — fora de HTTPS a visita do Inertia quebra com
   * "Encryption is not supported in this environment" e o formulário fica preso
   * em "Enviando…". É uma landing pública: não há nada no histórico que
   * justifique pagar esse preço.
   */
  encryptHistory: false,

  ssr: {
    enabled: true,
    entrypoint: 'inertia/app/ssr.tsx',
  },
})
