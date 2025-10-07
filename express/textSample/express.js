const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

const users = [
    {id:1,name:"anandhu",email:"anandhu@gmail.com"},
    {id:2,name:"arun",email:"arun@gmail.com"},
    {id:3,name:"vinnu",email:"vinnu@gmail.com"}
]

app.get('/',(req,res)=>{
   return res.send('create get users')
})
app.post('/users',(req,res)=>{
  return  res.json(users)
})

app.post('/users/:id',(req,res)=>{
    const {id} = req.params
    console.log(id)
   return res.json(users.find((user)=>user.id === id))
})


app.listen(PORT,()=>console.log('server is on'))