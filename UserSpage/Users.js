const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
let users = []



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Users.html'))
})
console.log(__dirname,"Users.html")

app.post('/users', (req, res) => {
    const { name, email, username } = req.body
    console.log(req.body)

    if (!name || !email || !username) {
        return res.status(400).json({ message: 'fill the name, email, userName' })
    }

    const newUser = {
        id: users.length + 1,
        name,
        email,
        username
    }

    users.push(newUser)
    res.status(201).json({ message: 'user created', user: newUser })
})



app.listen(PORT, () => console.log('server is running'))