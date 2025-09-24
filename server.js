const http = require('http')
const fs = require('fs')

http.createServer(function(req,res){
    fs.readFile('sample.html',(err,data)=>{
      res.writeHead(200,{'content-type':'html/type'})
      res.write(data)
      res.end()
    })
}).listen(7000)