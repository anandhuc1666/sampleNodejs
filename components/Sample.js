const http = require('http');
const fs = require('fs')

http.createServer((req,res)=>{
    fs.writeFile('sample.txt','hello new content on writting',(err)=>{
        if(err) throw err
        fs.readFile('sample.txt','utf8',(err,data)=>{
            console.log(`data reading ${data}`)
            res.writeHead(200,{"content-type":"text/plain"})
            
            res.end(data)
        })
    })
    fs.appendFile('sample.txt','\nadd next content on the file',(err)=>{
        if(err) throw err
    })
}).listen(5000,()=>console.log('server is on '));
