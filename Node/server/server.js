const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
    fs.readFile('sample.html','utf8',(err,data)=>{
        if(err) throw err
        res.write(data)
        res.end()
    })
}).listen(3000,()=>console.log('server is running port 3000'))