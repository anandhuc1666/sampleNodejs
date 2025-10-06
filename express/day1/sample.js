const express = require('express')
const app =express()

app.use('/',(req,res)=>{
    res.send('new express page')
})

app.listen(3000,()=>console.log('sever is running port 3000'))