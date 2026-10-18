import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import BaseInertiaMiddleware from '@adonisjs/inertia/inertia_middleware'

/**
 * Não há envio de formulário para o servidor nesta app — o agendamento sai
 * pelo próprio WhatsApp do visitante — então não há flash nem erros de
 * validação do servidor para compartilhar. O middleware fica registrado
 * porque o Inertia o usa para montar o contexto da página.
 */
export default class InertiaMiddleware extends BaseInertiaMiddleware {
  share(_ctx: HttpContext) {
    return {}
  }

  flash(_ctx: HttpContext) {
    return {}
  }

  async handle(ctx: HttpContext, next: NextFn) {
    await this.init(ctx)

    const output = await next()
    this.dispose(ctx)

    return output
  }
}

declare module '@adonisjs/inertia/types' {
  type MiddlewareSharedProps = InferSharedProps<InertiaMiddleware>
  export interface SharedProps extends MiddlewareSharedProps {}
}
