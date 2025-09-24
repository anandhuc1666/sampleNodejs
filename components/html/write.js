const path = require('path')
const fs = require('fs')
const http = require('http')
http.createServer((req, res) => {
const text = path.join(__dirname,"text.txt")
fs.writeFile(text,'hello my first text',(err)=>{
 if(err) throw err
 fs.readFile(text,'utf8',(err,data)=>{
    console.log(data)
   res.writeHead(200,{"content-Type":"text/plan"})
   res.end(data)
 })
})
fs.appendFile(text,"\nthis is second time txt",(err)=>{
    if(err) throw err
    fs.readFile(text,"utf8",(err,data)=>{
        res.writeHead(200,{"content-Type":"text/plan"})
        res.end(data)
    })
})

}).listen(5000, () => console.log('server on new!..'))