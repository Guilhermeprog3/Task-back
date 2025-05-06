const UsersController = () => import('#controllers/users_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
const TaskController = () => import('#controllers/tasks_controller')
const SessionController = () => import('#controllers/session_controller')

router.post('session', [SessionController, 'store'])
router.delete('session', [SessionController, 'destroy'])

router.resource('users', UsersController).apiOnly()

router
  .group(() => {
    router.resource('tasks', TaskController).apiOnly()
    router.patch('tasks/:id/edit', [TaskController, 'edit'])
  })
  .use(middleware.auth())