import factory from '@adonisjs/lucid/factories'
import Todo from '#models/todo'

export const TodoFactory = factory
  .define(Todo, async ({ faker }) => {
    return {
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      priority: faker.number.int({ min: 1, max: 3 }),
      completed: faker.datatype.boolean(0.2),
    }
  })
  .build()
