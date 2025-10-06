const express = require('express')
const app =express()
const path =require('path')
const PORT = 3000

app.get('/',(req,res)=>{
   res.sendFile(path.join,(__dirname,'sample.html'))
})
app.get('/person/:id',(req,res)=>{
    res.send(`new person = ${req.url.slice(8)}`)
})

app.listen(PORT,()=>{
    console.log(`sever is running port ${PORT}`)
})