// const path = require('path')
const fs = require('fs')
const http =require('http')
http.createServer((req,res)=>{
fs.readFile('sample.html',(err,data)=>{
  if(err){
     res.writeHead(500,{"content-type":"text/html"})
     res.end('server not responts')
     return
  }
  res.writeHead(200,{"content-type":"text/html"})
  res.write(data)
  res.end()
})
}).listen(7000,()=>console.log("sever is on"))


