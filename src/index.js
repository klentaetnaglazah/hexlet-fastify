import fastify from 'fastify'
import view from '@fastify/view'
import pug from 'pug'

const app = fastify()
const port = 3000

await app.register(view, { engine: { pug } })

app.get('/', (req, res) => {
  res.view('src/views/home')
})

app.get('/users', (req, res) => {
  res.send('GET /users')
})

app.post('/users', (req, res) => {
  res.send('POST /users')
})

app.get('/users/:id/post/:postId', (req, res) => {
  res.send(`User ID: ${req.params.id}; Post ID: ${req.params.postId}`)
})

app.get('/hello', (req, res) => {
  const name = req.query.name || 'World'
  res.send(`Hello, ${name}!`)
})

app.listen({ port }, () => {
  console.log(`Example app listening on port ${port}`)
})
