import { defineConfig } from '@adonisjs/static'

/**
 * Configuration options to tweak the static files middleware.
 * The complete set of options are documented on the
 * official documentation website.
 *
 * https://docs.adonisjs.com/guides/basics/static-file-server
 */
const staticServerConfig = defineConfig({
  /**
   * Enable or disable static file serving middleware.
   */
  enabled: true,

  /**
   * Generate ETag headers for client/proxy caching.
   */
  etag: true,

  /**
   * Include Last-Modified headers for conditional requests.
   */
  lastModified: true,

  /**
   * Policy for files starting with a dot.
   */
  dotFiles: 'ignore',

  /**
   * Os arquivos de /assets têm hash no nome (gerados pelo Vite): o conteúdo de
   * uma URL nunca muda, então o navegador pode guardar por um ano sem
   * revalidar. O resto de public/ (favicon, robots, og-image) segue sem cache
   * longo, porque mantém o mesmo nome quando é trocado.
   */
  headers: (path) => {
    if (path.includes('/public/assets/')) {
      return { 'Cache-Control': 'public, max-age=31536000, immutable' }
    }
    return {}
  },
})

export default staticServerConfig
