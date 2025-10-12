
const express = require('express')
const app = express()

const appRouter = require('./Routes/users.router')
app.use(express.json())
app.get('/', (req, res) => {
    return res.send('ready')
})
app.use('/users', appRouter)

app.listen(3000, () => console.log('server is running'))

