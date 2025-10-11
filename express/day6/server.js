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
    users.push(newUser)
    res.json(newUser)
})
app.get('/users/:id',(req,res)=>{
    const {id}=req.params
    const newId = Number(id)
    const newUser = users.find((u)=>u.id === newId)
    res.json(newUser)
})
app.delete('/users/:id',(req,res)=>{
    const {id}=req.params
    const newId = Number(id)
    const newUser = users.filter((u)=>u.id !==newId)
    res.json(newUser)
})
app.patch('/users/:id',(req,res)=>{
    const {id}=req.params
    const newId = Number(id)
    const newUser = users.find((u)=>u.id === newId)
    const {name,email}=req.body
    if(name){
       newUser.name = name
    }
    if(email){
        newUser.email = email
    }
    const index = users.findIndex((i)=>i === newId)
    users[index] = newUser
    res.json(newUser)
})

app.listen(PORT,()=>console.log('server is running on'))