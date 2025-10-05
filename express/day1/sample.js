// const express = require('express')
// const app = express()
// const path = require('path')
// const url = require('url')

// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

// app.get('/', (req, res ,next) => {
//     res.sendFile(path.join(__dirname, 'sample.html'), (err, data) => {
//         next()
//         let q= url.parse(req.url,true).query
//  console.log(req.query.name)      // ✅ better than url.parse
//     console.log(req.query.password)
//     })
// })
// app.post('/home', (req, res) => {
//     res.send('new home page are login')
// })
// app.listen(3000, () => console.log('server is running '))
const express = require('express')
const app = express()
const path = require('path')

// Middleware for POST body parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Serve sample.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'sample.html'))
})

// Example: http://localhost:3000/login?name=anand&password=123
app.get('/login', (req, res) => {
    console.log(req.query.name)      // ✅ better than url.parse
    console.log(req.query.password)

    res.send(`Hello ${req.query.name}, your password is ${req.query.password}`)
})

// POST request
app.post('/home', (req, res) => {
    console.log(req.body) // logs form data
    res.send(`Welcome ${req.body.name}, you are logged in!`)
})

app.listen(3000, () => console.log('server is running on http://localhost:3000'))
