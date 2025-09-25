// const path = require('path')
// const fs = require('fs')
// const http = require('http')

// http.createServer((req, res) => {
//  fs.appendFile('txtone.txt','hello checking the code issus',(err)=>{
//     if(err){
//         console.log(err)
//         res.end('writing error is find')
//         return
//     }else{
//         console.log('add the content on the _.txt')
//     }
//  })
//  fs.readFile('txtone.txt','utf8',(err,data)=>{
//     if(err){
//         res.writeHead(500,{'content-type':'text/plain'})
//         res.end('connot be read file')
//     }
//     res.writeHead(200,{'content-type':'text/plian'})
//     res.write(data)
//     console.log('content add on the _.txt'+data)
//     res.end()
//  })

// }).listen(7007, () => console.log('server on..'))






// const fs = require('fs');
// const http = require('http');

// http.createServer((req, res) => {
//   fs.writeFile('textone.txt', 'sample text one', (err) => {
//     if (err) {
//       res.writeHead(500, { 'Content-Type': 'text/plain' });
//       res.end("Error writing file");
//       return;
//     }

//     fs.readFile('textone.txt', "utf8", (err, data) => {
//       if (err) {
//         res.writeHead(500, { 'Content-Type': 'text/plain' });
//         res.end("Error reading file");
//         return;
//       }

//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       res.write(data);
//       console.log("File content:", data);
//       res.end();
//     });
//   });
// }).listen(7007, () => console.log('Server running on http://localhost:7007'));




// const fs = require('fs');
// const http = require('http');

// fs.appendFile('txtone.txt','\n third content is add on the texts00',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('new content is add')
//     }
// })

// http.createServer((req,res)=>{
//     fs.readFile('txtone.txt','utf8',(err,data)=>{
//         if(err){
//             res.writeHead(500,{'content-type':'text/plian'})
//             res.end('connote be read the file')
//             return
//         }
//         res.writeHead(200,{"content-type":"text/plain"})
//         res.write(data)
        
//         console.log("content is :"+data)
//         res.end()
//     })

// }).listen(5000,()=>console.log('Server running on http://localhost:5000'))