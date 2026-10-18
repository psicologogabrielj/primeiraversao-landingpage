/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
*/

import router from '@adonisjs/core/services/router'

const LandingController = () => import('#controllers/landing_controller')
const HealthController = () => import('#controllers/health_controller')

router.get('/', [LandingController, 'show']).as('landing')

// robots.txt, sitemap.xml, llms.txt etc. saem de public/ pelo static middleware.

router.get('/health', [HealthController, 'show']).as('health')
