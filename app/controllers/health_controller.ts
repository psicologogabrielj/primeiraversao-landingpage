import type { HttpContext } from '@adonisjs/core/http'

/**
 * Sem banco nesta app, o health check só prova que o processo HTTP responde
 * — é o que o orquestrador precisa saber.
 */
export default class HealthController {
  async show({ response }: HttpContext) {
    return response.ok({ ok: true })
  }
}
