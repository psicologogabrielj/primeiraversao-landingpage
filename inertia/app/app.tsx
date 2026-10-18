import { hydrateRoot } from 'react-dom/client'
import { createInertiaApp, type ResolvedComponent } from '@inertiajs/react'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'

/**
 * Sem callback de `title`: cada página escreve o próprio <title> via <Head>, e
 * o default do scaffold anexaria o nome da app de novo, duplicando a marca.
 */
createInertiaApp({
  resolve: (name) => {
    return resolvePageComponent<ResolvedComponent>(
      `../pages/${name}.tsx`,
      import.meta.glob<ResolvedComponent>('../pages/**/*.tsx')
    )
  },
  setup({ el, App, props }) {
    // hydrateRoot, não createRoot: o SSR está ligado (config/inertia.ts) e o
    // markup já vem pronto. createRoot jogaria tudo fora e remontaria.
    hydrateRoot(el, <App {...props} />)
  },
  progress: false,
})
