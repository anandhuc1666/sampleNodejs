const path = require('path')
const fs = require('fs')
const http = require('http')


http.createServer((req, res) => {
    fs.writeFile('server1.txt', "hello text one", (err) => {
        if (err) throw err
        return
    })
    fs.readFile('server1.txt','utf8',(err,data)=>{
        if(err) throw err
        res.writeHead(200,{"content-Type":"html/text"})
        console.log('file readed....')
        console.log(data)
        res.write(data)
        res.end()
        return
    })
}).listen(5005, () => console.log('server running...'))
