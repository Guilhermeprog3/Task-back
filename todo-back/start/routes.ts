const UsersController = () => import('#controllers/users_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
const TaskController = () => import('#controllers/tasks_controller')
const SessionControler = () => import('#controllers/session_controller')

// Rotas de sessão
router.post('session', [SessionControler, 'store'])
router.delete('session', [SessionControler, 'destroy'])


router.resource('user', UsersController).apiOnly()

router
  .group(() => {router.resource('task', TaskController).apiOnly()}).use(middleware.auth())