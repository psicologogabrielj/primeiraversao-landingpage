import type { HttpContext } from '@adonisjs/core/http'
import env from '#start/env'
import analyticsConfig from '#config/analytics'

/**
 * Domínio oficial do site: a URL canônica de tudo (canonical, og:url, JSON-LD).
 */
export const siteUrl = () =>
  env.get('SITE_URL', 'https://gabrieljesuspsicologo.com.br').replace(/\/$/, '')

/**
 * Hosts de preview recebem noindex, para o Google não indexar a mesma página
 * em dois endereços. A lista é de quem NÃO indexa (e não "só o domínio
 * oficial indexa") de propósito: se o host vier diferente atrás do proxy, o
 * pior caso é o preview ficar indexável — nunca o site oficial sumir do Google.
 */
const HOSTS_DE_PREVIEW = [/\.upuai\.cloud$/, /^localhost$/, /^127\./]

const indexavel = (hostname: string | null) =>
  !hostname || !HOSTS_DE_PREVIEW.some((padrao) => padrao.test(hostname))

export default class LandingController {
  async show({ inertia, request }: HttpContext) {
    return inertia.render(
      'landing',
      {
        analytics: analyticsConfig.cliente,
        siteUrl: siteUrl(),
        indexavel: indexavel(request.hostname()),
      },
      { gtagIds: analyticsConfig.gtagIds }
    )
  }
}
