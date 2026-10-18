import app from '@adonisjs/core/services/app'
import { type HttpContext, ExceptionHandler } from '@adonisjs/core/http'
import type { HttpError, StatusPageRange, StatusPageRenderer } from '@adonisjs/core/types/http'

export default class HttpExceptionHandler extends ExceptionHandler {
  protected debug = !app.inProduction

  protected renderStatusPages = app.inProduction

  protected statusPages: Record<StatusPageRange, StatusPageRenderer> = {
    '404': (_, { inertia }) => inertia.render('errors/not_found', {}),
    '500..599': (_, { inertia }) => inertia.render('errors/server_error', {}),
  }

  async handle(error: unknown, ctx: HttpContext) {
    /**
     * O @adonisjs/session já converte erro de validação em redirect-back com
     * os erros flashados (é assim que o useForm do Inertia os consome, não
     * como um 422 cru). O patch deles usa `.back()`, que sem Referer cai na
     * raiz — aqui o alvo é explícito, já que a única página é a landing.
     */
    if (
      error &&
      typeof error === 'object' &&
      'code' in error &&
      error.code === 'E_VALIDATION_ERROR' &&
      'messages' in error &&
      ctx.session
    ) {
      const negociado = ctx.request.accepts(['html', 'application/vnd.api+json', 'json'])
      if (negociado === 'html' || negociado === null) {
        // Sem withInput quando é o Inertia: o useForm mantém o próprio estado
        // dos campos, e reenviar o input duplicaria a fonte da verdade.
        const withInput = ctx.request.header('X-Inertia') ? false : true
        ctx.session.flashValidationErrors(error as HttpError, withInput)
        return ctx.response.redirect().toPath('/')
      }
    }

    return super.handle(error, ctx)
  }

  async report(error: unknown, ctx: HttpContext) {
    return super.report(error, ctx)
  }
}
