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
app.get('/users',(req,res)=>{
  return  res.json(users)
})

app.get('/users/:id', (req, res) => {
  const { id } = req.params
  const user = users.find(u => u.id === Number(id))
  res.json(user)
})

app.post('/users',(req,res)=>{
  const {name,email}=req.body;
  let user = {id:users.length + 1,name,email}
  users.push(user)
  res.json(user)
})

app.listen(PORT,()=>console.log('server is on'))