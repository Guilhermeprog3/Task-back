import { createTaskValidator } from '#validators/task'
import type { HttpContext } from '@adonisjs/core/http'
import { updateTaskValidator } from '#validators/task'
import Task from '#models/task'
export default class ObjectsController {
  async index({ auth }: HttpContext) {
    const user = auth.user!
    await user.load('tasks', (query) => {
      query.orderBy('created_at', 'desc')
    })
    return user.tasks
  }

  async store({ request, auth, response }: HttpContext) {
    try {
      const { title } = await request.validateUsing(createTaskValidator)
      const user = auth.user!
      await user.related('tasks').create({
        title,
      })
      return {
        title,
      }
    } catch (error) {
      response.status(400).json({ error: 'erro' })
    }
  }

  async show({ params, response }: HttpContext) {
    try {
      const task = await Task.findByOrFail('id', params.id)
      return task
    } catch (error) {
      response.status(400).json({ error: 'Task not found' })
    }
  }
  async update({ request, params, response }: HttpContext) {
    try {
      const task = await Task.findByOrFail('id', params.id)
      const { title,} = await request.validateUsing(updateTaskValidator)
      task.merge({ title,})
      await task.save()
      return task
    } catch (error) {
      response.status(400).json({ error: 'Task not found' })
    }
  }
  async edit({ params, response }: HttpContext) {
    try {
      const task = await Task.findByOrFail('id', params.id)
      task.completed = !task.completed
      await task.save()
      return task
    } catch (error) {
      response.status(400).json({ error: 'Object not found' })
    }
  }

  async destroy({ params, response }: HttpContext) {
    try {
      const task = await Task.findByOrFail('id', params.id)
      await task.delete()
      return response.status(203)
    } catch (error) {
      response.status(400).json({ error: 'Object not found' })
    }
  }
}
