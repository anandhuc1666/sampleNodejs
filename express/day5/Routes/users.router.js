const express = require('express')
const router = express.Router()


let users = []


app.get('/',(req,res)=>{
    if(users.length !== 0){
        res.status(200)
        res.json({message:'users is found',users})
    }else{
       res.status(404)
       res.json({message:'no users is login',users})
    }
})

router.post('/',(req,res)=>{
    const{name,email}=req.body
    // if(users.name !== name, users.email !==email){
    const user = {id:users.length +1,name,email}
    users.push(user)
    res.json(user)
    
})
router.get('/:id',(req,res)=>{
    const {id} = req.params
    const userID = Number(id)
    const user = users.find((u)=>u.id === userID)
    res.json(user)
})
router.delete('/:id',(req,res)=>{
    const {id} = req.params
    const userID = Number(id)
    users = users.filter((u)=>u.id !== userID)
    res.json(users)
})
router.patch('/:id',(req,res)=>{
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




module.exports = router