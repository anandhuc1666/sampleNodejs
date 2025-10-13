const express = require('express')
const app = express()

const PORT = 3000
app.use(express.json())
let users = []

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', (req, res) => {
    const { name, email } = req.body
    const user = { id: users.length + 1, name, email }
    users.push(user)
    res.json(user)
})

app.get('/users/:id', (req, res) => {
    const { id } = req.params
    const userID = Number(id)
    const user = users.find((u) => u.id === userID)
    res.json(user)
})

app.delete('/users/:id', (req, res) => {
    const { id } = req.params
    const userID = Number(id)
    const user = users.find((u) => u.id === userID)
    users = users.filter((u) => u.id !== user.id)
    res.json(users)
})
app.patch('/users/:id', (req, res) => {
    const { id } = req.params
    const userID = Number(id)
    const user = users.find((u) => u.id === userID)
    const { name, email } = req.body
    if (name) {
        user.name = name
    }
    if (email) {
        user.email = email
    }
    const index = users.indexOf((i) => i.id === userID)
    users[index] = user
    res.json(user)
})

app.listen(PORT, () => console.log('server is on running'))