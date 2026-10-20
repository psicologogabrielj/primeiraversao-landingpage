/**
 * Teste de fumaça do build de produção num Chrome de verdade.
 *
 * Existe porque o HTML do SSR pode estar perfeito e a página ainda assim
 * ficar em branco depois da hidratação (aconteceu com o react-ga4). Sobe o
 * build com todo o analytics ligado e confere que:
 *   - a página continua de pé depois de hidratar, sem erro de JS;
 *   - o clique no WhatsApp dispara a conversão do Google Ads;
 *   - o PostHog envia eventos;
 *   - o banner de cookies começa negando e o "Aceitar" libera e persiste.
 *
 * Uso: npm run build && npm run test:smoke
 * Chrome: CHROME_PATH (padrão /usr/bin/google-chrome).
 */
import { spawn } from 'node:child_process'
import { existsSync, symlinkSync } from 'node:fs'
import { setTimeout as esperar } from 'node:timers/promises'
import puppeteer from 'puppeteer-core'

const PORTA = 3399
const URL_LOCAL = `http://127.0.0.1:${PORTA}/`
const CONVERSAO = 'AW-000000000/smoke'
const POSTHOG_HOST = 'https://posthog.invalid'

// O build/ não tem node_modules próprio fora do Docker.
if (!existsSync('build/node_modules')) symlinkSync('../node_modules', 'build/node_modules')

const servidor = spawn('node', ['bin/server.js'], {
  cwd: 'build',
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_ENV: 'production',
    HOST: '127.0.0.1',
    PORT: String(PORTA),
    APP_KEY: 'smoke-smoke-smoke-smoke-smoke-smoke',
    APP_NAME: 'smoke',
    APP_URL: URL_LOCAL,
    LOG_LEVEL: 'warn',
    SESSION_DRIVER: 'memory',
    TZ: 'UTC',
    GA_MEASUREMENT_ID: 'G-SMOKE',
    GOOGLE_ADS_ID: 'AW-000000000',
    GOOGLE_ADS_CONVERSION: CONVERSAO,
    POSTHOG_KEY: 'phc_smoke',
    POSTHOG_HOST,
  },
})

const falhas = []
const verificar = (ok, mensagem) => {
  console.log(`${ok ? '✓' : '✗'} ${mensagem}`)
  if (!ok) falhas.push(mensagem)
}

const navegador = await puppeteer.launch({
  executablePath: process.env.CHROME_PATH ?? '/usr/bin/google-chrome',
  // Sem a marca de automação: o PostHog descarta eventos de navegador robô.
  args: ['--no-sandbox', '--disable-blink-features=AutomationControlled'],
  ignoreDefaultArgs: ['--enable-automation'],
})

try {
  await aguardarServidor()

  const pagina = await navegador.newPage()
  await pagina.setUserAgent(
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36'
  )

  // Nada sai para terceiros: só registramos o que a página tentou enviar.
  const errosJs = []
  const pedidosPostHog = []
  pagina.on('pageerror', (erro) => errosJs.push(erro.message))
  await pagina.setRequestInterception(true)
  pagina.on('request', (pedido) => {
    if (pedido.url().startsWith(URL_LOCAL)) return pedido.continue()
    if (pedido.url().startsWith(POSTHOG_HOST)) pedidosPostHog.push(pedido.url())
    pedido.abort()
  })

  await pagina.goto(URL_LOCAL, { waitUntil: 'networkidle0' })
  await esperar(1000)

  verificar(errosJs.length === 0, `sem erro de JS (${errosJs.join(' | ') || 'nenhum'})`)
  verificar(
    Boolean(await pagina.$eval('h1', (h1) => h1.textContent?.trim())),
    'o h1 continua na página depois da hidratação'
  )

  await pagina.evaluate(() => {
    const link = document.querySelector('a[href*="wa.me"]')
    link.addEventListener('click', (evento) => evento.preventDefault())
    link.click()
  })
  await esperar(1000)

  const conversoes = await pagina.evaluate(() =>
    window.dataLayer
      .map((comando) => Array.from(comando))
      .filter(([tipo, nome]) => tipo === 'event' && nome === 'conversion')
      .map(([, , parametros]) => parametros.send_to)
  )
  verificar(conversoes.includes(CONVERSAO), 'o clique no WhatsApp dispara a conversão do Ads')
  verificar(pedidosPostHog.length > 0, 'o PostHog envia eventos')

  const consentimentos = () =>
    pagina.evaluate(() =>
      window.dataLayer
        .map((comando) => Array.from(comando))
        .filter(([tipo]) => tipo === 'consent')
        .map(([, acao, estado]) => `${acao}:${estado.ad_storage}`)
    )
  const banner = 'section[aria-label="Aviso de cookies"]'
  verificar((await consentimentos())[0] === 'default:denied', 'cookies negados até a escolha')
  verificar(Boolean(await pagina.$(banner)), 'o banner de cookies aparece')

  const [aceitar] = await pagina.$$(`xpath/.//section[@aria-label="Aviso de cookies"]//button[.="Aceitar"]`)
  await aceitar.click()
  verificar((await consentimentos()).includes('update:granted'), 'o Aceitar libera os cookies')
  verificar(!(await pagina.$(banner)), 'o banner some depois da escolha')

  await pagina.reload({ waitUntil: 'networkidle0' })
  await esperar(500)
  verificar(
    (await consentimentos())[0] === 'default:granted' && !(await pagina.$(banner)),
    'a escolha vale na próxima visita'
  )
} finally {
  await navegador.close()
  servidor.kill()
}

if (falhas.length > 0) {
  console.error(`\n${falhas.length} verificação(ões) falharam`)
  process.exit(1)
}

async function aguardarServidor() {
  for (let tentativa = 0; tentativa < 50; tentativa++) {
    try {
      await fetch(URL_LOCAL)
      return
    } catch {
      await esperar(200)
    }
  }
  throw new Error(`o servidor não subiu em ${URL_LOCAL}`)
}
