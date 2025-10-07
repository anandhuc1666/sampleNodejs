const express = require('express')
const app = express()
const PORT = 3000

// Middleware to parse JSON data from request body
app.use(express.json())

// User data (in-memory storage)
let users = []

// -----------------------------
// CREATE a new user (POST /users)
// -----------------------------
app.post('/users', (req, res) => {
  const { name, email, username } = req.body

  // Basic validation
  if (!name || !email || !username) {
    return res.status(400).json({ message: 'All fields are required: name, email, username' })
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    username
  }

  users.push(newUser)
  res.status(201).json({ message: 'User created successfully', user: newUser })
})

// -----------------------------
// READ all users (GET /users)
// -----------------------------
app.get('/users', (req, res) => {
  res.json({ users })
})

// -----------------------------
// READ a specific user (GET /users/:id)
// -----------------------------
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id)
  const user = users.find(u => u.id === userId)

  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

  res.json({ user })
})

// -----------------------------
// UPDATE a specific user (PUT /users/:id)
// -----------------------------
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id)
  const user = users.find(u => u.id === userId)

  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

  const { name, email, username } = req.body

  if (name) user.name = name
  if (email) user.email = email
  if (username) user.username = username

  res.json({ message: 'User updated successfully', user })
})

// -----------------------------
// DELETE a specific user (DELETE /users/:id)
// -----------------------------
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id)
  const index = users.findIndex(u => u.id === userId)

  if (index === -1) {
    return res.status(404).json({ message: 'User not found' })
  }

  const deletedUser = users.splice(index, 1)
  res.json({ message: 'User deleted successfully', deletedUser })
})

// -----------------------------
// Start the server
// -----------------------------
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
