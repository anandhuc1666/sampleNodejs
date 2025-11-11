import express from "express"
import multer from "multer"

const app = express()

const storage = multer.diskStorage({
    destination:"./upload",
    filename:(req,res,cd)=>cd(null,"test.jpg")
})

const uploader = multer({storage})
app.post("/file",uploader.single("file"),(req,res)=>{
    res.send("send dome")
})
// const PORT = process.env.PORT || 3001

// app.listen(PORT,()=>console.log(`server is rinning on ${PORT}`))