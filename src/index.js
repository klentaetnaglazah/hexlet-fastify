import fastify from 'fastify'

const app = fastify()
const port = 3000

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
