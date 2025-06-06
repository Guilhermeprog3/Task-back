import User from '#models/user'
import { createUserValidator, updateUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async index({}: HttpContext) {
    const users = await User.query().preload('tasks')
    return users
  }

  async store({ request }: HttpContext) {
    const { name, email, password } = await request.validateUsing(createUserValidator)
    const user = await User.create({ name, email, password })
    return user
  }

  async show({ params }: HttpContext) {
    const user = await User.findByOrFail('id', params.id)
    await user.load('tasks')
    return user
  }

  async update({ params, request }: HttpContext) {
    const user = await User.findByOrFail('id', params.id)
    const { name, password } = await request.validateUsing(updateUserValidator)
    user.merge({ name, password })
    user.save()
    return user
  }

  async destroy({ params }: HttpContext) {
    const user = await User.findByOrFail('id', params.id)
    await user.delete()
  }
}
