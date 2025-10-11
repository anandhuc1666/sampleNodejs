const express = require('express')
const app = express()

const PORT = 3000
let users =[]
app.use(express.json())

app.get('/users',(req,res)=>{
    res.json(users)
})
app.post('/users',(req,res)=>{
    const {name,email}=req.body
    const newUser = {id:users.length+1,name,email}
    res.json(newUser)
})
app.get('/users/:id',(req,res)=>{
    
})