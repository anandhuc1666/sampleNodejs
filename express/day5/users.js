const express = require('express')
const app = express()
const PORT = 3000

let users = []
app.use(express.json())

app.get('/users',(req,res)=>{
    res.json(users)
})
app.post('/users',(req,res)=>{
    const{name,email}=req.body
    const user = {id:users.length +1,name,email}
    users.push(user)
    res.json(user)
})
app.get('/users/:id',(req,res)=>{
    const {id} = req.params
    const userID = Number(id)
    const user = users.find((u)=>u.id === userID)
    res.json(user)
})
app.delete('/users/:id',(req,res)=>{
    const {id} = req.params
    const userID = Number(id)
    users = users.filter((u)=>u.id !== userID)
    res.json(users)
})
app.patch('/users/:id',(req,res)=>{
    const {id} = req.params
    const userID = Number(id)
    const {name,email}=req.body
    const user = users.find((u)=>u.id === userID)
    if(name){
        user.name = name
    }
    if(email){
        user.email = email
    }
    const index = users.indexOf((u)=>u.id === userID)
    users[index] = user
    res.json(user)
})
app.listen(PORT,()=>console.log('server is on running'))