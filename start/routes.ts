/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const TodoController = () => import('#controllers/todo_controller')

router.on('/').render('pages/home')

router
  .group(() => {
    router.get('/todos', [TodoController, 'index'])
    router.post('/todos', [TodoController, 'store'])
    router.get('/todos/:id', [TodoController, 'show'])
    router.put('/todos/:id', [TodoController, 'update'])
    router.delete('/todos/:id', [TodoController, 'destroy'])
  })
  .prefix('api')
