const express = require('express')
const app = express()
const PORT = 3001

app.use(express.json())
const users = [
    { id: 1, name: "anandhu", email: "anandhu@gmail.com" },
    { id: 2, name: "varun", email: "varun@gmail.com" }
]
app.get('/', (req, res) => {
    res.send('user page')
})
app.get('/user', (req, res) => {
    res.json(users)
})
app.get('/user/:id', (req, res) => {
    let { id } = req.params
    res.json(users.find((user) => user.id === Number(id)))
})
app.post('/user', (req, res) => {
    const { name, email } = req.body;
    const user = { id: users.length + 1, name, email }
    if (!name || !email) {
        res.send('enter the name and email')
    } else {
        users.push(user)
        res.json(user)
    }

})


app.listen(PORT, () => console.log('server is on'))