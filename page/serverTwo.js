const path = require('path')
const fs = require('fs')
const http = require('http')

// fs.writeFile(path.join(__dirname,'txttwo.txt'),'hellow sample',(err)=>{
//    if(err){
//     console.log(err)
//    }else{
//     console.log('file are created')
//    }
// })


// fs.appendFile('txttwo.txt','new content',(err)=>{
//     if(err) throw err
//     console.log('content add in txttwo.txt')
// })

// http.createServer((req,res)=>{
//     fs.readFile('txttwo.txt','utf8',(err,data)=>{
//         if(err){
//             console.log(err)
//             res.writeHead(500,{ 'Content-Type': 'text/plain' })
//             res.end()
//             return
//         }
//         res.writeHead(200,{ 'Content-Type': 'text/plain' })
//         res.write(data)
//         res.end()
//         console.log('the file data is:'+data)
//     })
// }).listen(5100,()=>console.log('http://localhost:5100'))



