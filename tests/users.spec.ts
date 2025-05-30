// tests/users.spec.ts
import { test } from '@japa/runner'

test.group('Usuários (HTTP)', (group) => {
  group.setup(async () => {
    
  })

  group.teardown(async () => {
    
  })

  test('POST /users deve criar um novo usuário', async ({ client, assert }) => {
    const payload = {
      name: 'Victor',
      email: 'victor@example.com',
      password: '123456',
    }

    const response = await client.post('/users').json(payload)
    response.assertStatus(201)

    const created = response.body()
    assert.equal(created.email, payload.email)
    assert.equal(created.name, payload.name)
    assert.exists(created.id)
  })

  test('GET /users deve retornar lista de usuários', async ({ client, assert }) => {
    const response = await client.get('/users')
    response.assertStatus(200)

    const list = response.body()
    assert.isArray(list)
  })

  test('GET /users/:id deve retornar um usuário específico', async ({ client, assert }) => {

    const createRes = await client
      .post('/users')
      .json({
        name: 'João',
        email: 'joao@example.com',
        password: 'abcdef',
      })

    createRes.assertStatus(201)
    const created = createRes.body()  

  
    const getRes = await client.get(`/users/${created.id}`)
    getRes.assertStatus(200)

    const fetched = getRes.body()
    assert.equal(fetched.id, created.id)
    assert.equal(fetched.email, created.email)
    assert.equal(fetched.name, created.name)
  })
})
