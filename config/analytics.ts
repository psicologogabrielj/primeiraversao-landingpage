import env from '#start/env'

/**
 * Tudo de analytics vem de env, para trocar ID sem novo build. O que não
 * estiver configurado simplesmente não carrega.
 */
const analyticsConfig = {
  /**
   * GA4 e Google Ads dividem a mesma gtag.js, injetada pelo layout no HTML do
   * SSR — carrega cedo e não depende de o React hidratar.
   */
  gtagIds: [env.get('GA_MEASUREMENT_ID'), env.get('GOOGLE_ADS_ID')].filter((id): id is string =>
    Boolean(id)
  ),

  /**
   * O que o cliente precisa para disparar conversão e ligar o PostHog —
   * mesmo formato do AnalyticsConfig em inertia/lib/analytics.ts.
   */
  cliente: {
    adsConversion: env.get('GOOGLE_ADS_CONVERSION', ''),
    posthog: {
      key: env.get('POSTHOG_KEY', ''),
      host: env.get('POSTHOG_HOST', 'https://us.i.posthog.com'),
    },
  },
}

export default analyticsConfig
