import type { HttpContext } from '@adonisjs/core/http'
import env from '#start/env'

export default class LandingController {
  async show({ inertia }: HttpContext) {
    return inertia.render('landing', {
      // O ID do Analytics vive em env para trocar sem novo build. Vazio, o GA
      // não é inicializado.
      gaId: env.get('GA_MEASUREMENT_ID', ''),
      appUrl: env.get('APP_URL'),
    })
  }
}
