import Todo from '#models/todo'
import { createTodoValidator, updateTodoValidator } from '#validators/todo'
import type { HttpContext } from '@adonisjs/core/http'

export default class TodoController {
  async index({ response }: HttpContext) {
    const todos = await Todo.all()
    return response.json(todos)
  }

  async store({ request, response }: HttpContext) {
    try {
      const payload = await request.validateUsing(createTodoValidator)
      const todo = await Todo.create(payload)
      return response.created(todo)
    } catch (error) {
      return response.badRequest(error.messages)
    }
  }

  async show({ params, response }: HttpContext) {
    try {
      const todo = await Todo.findOrFail(params.id)
      return response.json(todo)
    } catch (error) {
      return response.notFound({ message: 'Todo not found' })
    }
  }

  async update({ params, request, response }: HttpContext) {
    try {
      const payload = await request.validateUsing(updateTodoValidator)
      const todo = await Todo.findOrFail(params.id)
      todo.merge(payload)
      await todo.save()
      return response.json(todo)
    } catch (error) {
      return response.badRequest(error.messages)
    }
  }

  async destroy({ params, response }: HttpContext) {
    const todo = await Todo.findOrFail(params.id)
    await todo.delete()
    return response.noContent()
  }
}
