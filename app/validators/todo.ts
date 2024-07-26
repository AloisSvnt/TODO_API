import vine from '@vinejs/vine'

export const createTodoValidator = vine.compile(
  vine.object({
    title: vine.string().trim().minLength(3).maxLength(255),
    description: vine.string().trim().minLength(10).maxLength(1000).optional(),
    completed: vine.boolean().optional(),
  })
)

export const updateTodoValidator = vine.compile(
  vine.object({
    title: vine.string().trim().minLength(3).maxLength(255).optional(),
    description: vine.string().trim().minLength(10).maxLength(1000).optional(),
    completed: vine.boolean().optional(),
  })
)
