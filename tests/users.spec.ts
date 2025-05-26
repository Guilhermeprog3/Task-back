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

    
    assert.equal(response.body().email, payload.email)
  })

  test('GET /users deve retornar lista de usuários', async ({ client, assert }) => {
    const response = await client.get('/users')

    
    response.assertStatus(200)

  
    assert.isArray(response.body())
  })

  test('GET /users/:id deve retornar um usuário específico', async ({ client, assert }) => {
   
    const { body: created } = await client
      .post('/users')
      .json({ name: 'João', email: 'joao@example.com', password: 'abcdef' })

    
    const response = await client.get(`/users/${created.id}`)

    response.assertStatus(200)
    assert.equal(response.body().email, 'joao@example.com')
  })
})
