// const fs = require('fs').promises
// const http = require('http')
// http.createServer(async (req, res) => {
//     try {
//         await fs.writeFile('text1.txt', 'text is writing')
//         const data = await fs.readFile('text1.txt', 'utf8')
//         res.writeHead(200, { 'content-type': 'text/html' })
//         res.write(data)
//         res.write("<h1> wellcome user </h1>")
//         res.end()
//     } catch (err) {
//         console.log(err)
//         res.writeHead(500, { 'content-type': 'text/html' })
//         res.end()
//     }
// }).listen(5000, () => console.log('server is on running 5000 port'))


const fs = require('fs')
const http = require('http')

http.createServer((req,res)=>{
    fs.writeFile('sample.txt','hello sample.txt file',(err)=>{
        if(err) throw err
    })
    fs.readFile('sample.txt','utf8',(err,data)=>{
        if(err){
            res.writeHead(500,{'content-type':'text/plain'})
            console.log('server issus',err)
            res.end('server end')
        }
        res.writeHead(200,{'content-type':'text/plain'})
        res.write(data)
        res.end()
    })
}).listen(3000,()=>console.log('server is running on prot 3000'))