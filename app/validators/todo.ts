import vine from '@vinejs/vine'
import { Priority } from '../enums/priority.js'

const prioritySchema = vine.enum(Object.values(Priority))

export const createTodoValidator = vine.compile(
  vine.object({
    title: vine.string().trim().minLength(3).maxLength(255),
    description: vine.string().trim().minLength(10).maxLength(1000),
    priority: prioritySchema,
    completed: vine.boolean(),
  })
)

export const updateTodoValidator = vine.compile(
  vine.object({
    title: vine.string().trim().minLength(3).maxLength(255).optional(),
    description: vine.string().trim().minLength(10).maxLength(1000).optional(),
    priority: prioritySchema.optional(),
    completed: vine.boolean(),
  })
)
