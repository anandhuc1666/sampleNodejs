// const express = require('express')
// const app = express()
// const PORT = 3001

// app.use(express.json())
// let users = [
// ]
// app.get('/', (req, res) => {
//     res.send('user page')
// })
// app.get('/user', (req, res) => {
//     res.json(users)
// })
// app.get('/user/:id', (req, res) => {
//     let { id } = req.params
//     const newUser = users.find((user) => user.id === Number(id))
//     if (!newUser) {
//         return res.status(404).send('user not fund')
//     }
//     return res.json(newUser)
// })
// app.post('/user', (req, res) => {
//     const { name, email } = req.body;
//     const user = { id: users.length + 1, name, email }
//     if (!name || !email) {
//         res.send('enter the name and email')
//     } else {
//         users.push(user)
//         res.json(user)
//     }

// })
// app.delete('/user/:id', (req, res) => {
//     const { id } = req.params
//     const user = users.find((u) => u.id == id)
//     if (!user) {
//         return res.status(404).send('User not found')
//     } else {
//        users = users.filter((u) => u.id != id)
//         return res.status(204).json({ message: 'User deleted successfully', users })
//     }

// })


// app.patch('/user/:id',(req,res)=>{
//     const {id} = req.params
//     const user = users.find((u)=>u.id == id)
//      const {name,email} = req.body
//      if(!user){
//        res.status(404)
//      }
//      if(name){
//          user.name = name
//      }
//      if(email){
//          user.email = email
//      }
//      const index = users.findIndex((i)=>i.id == id)
//      users[index]=user
//      return res.json(user)
// })
// app.listen(PORT, () => console.log('server is on'))




const express = require('express')
const app = express()
const PORT = 3002

let users = [
   
]
app.use(express.json())
//recive the all users
app.get('/users', (req, res) => {
    res.json(users)
})
//add a new users in users array
app.post('/users', (req, res) => {
    const { name, email } = req.body
    const user = { id: users.length + 1, name, email }
    users.push(user)
    res.json(user)
})
//take the perticular user from users array through the :id 
app.get('/users/:id', (req, res) => {
    const { id } = req.params
    const user = users.find((user) => user.id == id)
    res.json(user)
})
//delete the spesific users from the users array
app.delete('/users/:id', (req, res) => {
const {id} = req.params
const userID = Number(id)
const user = users.find((u)=>u.id === userID)
if(!user){
    return res.status(404).json('no User')
}else{
    users = users.filter((u)=>u.id !== userID)
    return res.status(200).json({message:'you are delete the user',user})
}
})
//update the spesific users in users
app.patch('/users/:id',(req,res)=>{
    const {id} = req.params
    const userID = Number(id)
    const user = users.find((u)=>u.id === userID)
    const {name,email} = req.body
   if(name){
    user.name = name
   }
   if(email){
    user.email =email
   }
   const index = users.findIndex((u)=>u.id === userID)
   users[index] =user
   res.json(user)
})

app.listen(PORT, () => console.log('server is running'))