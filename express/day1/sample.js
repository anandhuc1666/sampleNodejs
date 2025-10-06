const express = require('express')
const app =express()
const path =require('path')
const PORT = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname,'sample.html'))
})
app.post('/',(req,res)=>{
   let Nuser = req.body
    res.send(`new user name : ${Nuser.name} <br> new user password : ${Nuser.password}` )
    console.log(Nuser.name ,Nuser.password)
})

app.listen(PORT,()=>{
    console.log(`sever is running port ${PORT}`)
})