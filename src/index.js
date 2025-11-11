import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

const app = express()
dotenv.config()
app.use(express.json())

app.get("/",(req,res)=>{
    res.json("hello server is ok 200")
})

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log('mongoDB connected'))
.catch((err)=>console.log(err))

const PORT = process.env.PORT

app.listen(PORT,()=>console.log(`server is running on ${PORT}`))