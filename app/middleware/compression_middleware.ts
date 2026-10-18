import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import compression from 'compression'

/**
 * gzip/brotli das respostas (HTML do SSR e os assets do Vite servidos pelo
 * static middleware). O Adonis não comprime por conta própria e a Upuai repassa
 * a resposta como sai do Node: sem isto o app.js ia com 315 KB em vez de ~100.
 *
 * O `compression` é um middleware do Express, mas só mexe no req/res do Node —
 * que o Adonis expõe — então funciona aqui envolvendo o resto da cadeia.
 */
const compress = compression()

export default class CompressionMiddleware {
  handle(ctx: HttpContext, next: NextFn) {
    return new Promise<void>((resolve, reject) => {
      compress(ctx.request.request as any, ctx.response.response as any, (error?: unknown) => {
        if (error) return reject(error)
        Promise.resolve(next()).then(() => resolve(), reject)
      })
    })
  }
}
