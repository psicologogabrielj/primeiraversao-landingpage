/*
|--------------------------------------------------------------------------
| Environment variables service
|--------------------------------------------------------------------------
*/

import { Env } from '@adonisjs/core/env'

export default await Env.create(new URL('../', import.meta.url), {
  // Node
  NODE_ENV: Env.schema.enum(['development', 'production', 'test'] as const),
  PORT: Env.schema.number(),
  HOST: Env.schema.string({ format: 'host' }),
  LOG_LEVEL: Env.schema.string(),

  // App
  APP_NAME: Env.schema.string(),
  APP_KEY: Env.schema.secret(),
  APP_URL: Env.schema.string({ format: 'url', tld: false }),

  // Session
  SESSION_DRIVER: Env.schema.enum(['cookie', 'memory'] as const),

  /*
  |----------------------------------------------------------------------
  | Google Analytics
  |----------------------------------------------------------------------
  |
  | Measurement ID do GA4 (G-XXXXXXXXXX). Vazio, o snippet não é injetado
  | na página — nada é carregado de terceiros sem o ID confirmado.
  */
  GA_MEASUREMENT_ID: Env.schema.string.optional(),
})
