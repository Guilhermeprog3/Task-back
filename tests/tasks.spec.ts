// tests/tasks.spec.ts
import { test } from '@japa/runner'

test.group('Tarefas (HTTP)', (group) => {
  group.setup(async () => {
    
  })

  group.teardown(async () => {
    
  })

  test('POST /tasks deve criar uma nova tarefa', async ({ client, assert }) => {
    const payload = {
      title: 'Comprar leite',
      description: 'Ir ao mercado e comprar 1L de leite',
      completed: false,
    }

    const postRes = await client.post('/tasks').json(payload)
    postRes.assertStatus(201)

    const task = postRes.body()
    assert.exists(task.id)
    assert.equal(task.title, payload.title)
    assert.equal(task.description, payload.description)
    assert.equal(task.completed, payload.completed)
  })

  test('DELETE /tasks/:id remove e depois retorna 404', async ({ client }) => {
    // 1) Cria uma tarefa
    const createRes = await client
      .post('/tasks')
      .json({ title: 'Para deletar', description: '...', completed: false })
    createRes.assertStatus(201)
    const created = createRes.body()

    // 2) Deleta
    const deleteRes = await client.delete(`/tasks/${created.id}`)
    deleteRes.assertStatus(204)

    // 3) Tenta buscar de novo (separa em duas linhas para usar await corretamente)
    const getRes = await client.get(`/tasks/${created.id}`)
    getRes.assertStatus(404)
  })
})
