const express = require('express')
const app = express()
const multer = require('multer')
const storage = multer.diskStorage({destination: './uplodimg',filename:(req,file,callback)=>{
    callback(null,"text.jpg")
}})

const PORT = 3000

app.get('/file', (req, res) => {
  res.send('done')
})

app.listen(PORT, () => console.log('server is on running'))