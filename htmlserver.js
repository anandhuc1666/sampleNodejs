// const http = require('http')
// const fs = require('fs')

// http.createServer((req,res)=>{
//     if(req.url === '/'){
//             fs.readFile('sample.html',(err,data)=>{
//                 if(err){
//                     res.writeHead(500, { 'content-type': 'text/plain' });
//                     console.log(err)
//                 }else{
//                     res.writeHead(200,{'content-type':'html/text'})
//                     res.write(data)
//                     res.end('sample not work')
//                 }
//     })
//     }else if(req.url === '/login'){
//         fs.readFile('Home.html',(err,data)=>{
//             if(err){
//                 res.writeHead(500, { 'content-type': 'text/plain' });
//                 console.log(err)
//             }else{
//                 res.writeHead(200,{'content-type':'text/html'})
//                 res.write(data)
//                 res.end('home not work')
//             }
//         })
//     }else{
//         res.write('no file available')
//         res.end()
//     }

// }).listen(7000,()=>console.log('server running: http://localhost:7000'))

// const http = require('http');
// const fs = require('fs');
// const url =require('url')

// http.createServer((req, res) => {
//     const q = url.parse(req.url)
//     if (q.pathname === '/') {
//         fs.readFile('sample.html', (err, data) => {
//             if (err) {
//                 console.log(err);
//                 res.writeHead(500, { 'content-type': 'text/plain' });
//                 res.end('Error loading sample.html');
//             } else {
//                 res.writeHead(200, { 'content-type': 'text/html' });
//                 res.end(data); 
//             }
//         });
//     } else if (q.pathname === '/home') {
//         fs.readFile('Home.html', (err, data) => {
//             if (err) {
//                 console.log(err);
//                 res.writeHead(500, { 'content-type': 'text/plain' });
//                 res.end('Error loading Home.html');
//             } else {
//                 res.writeHead(200, { 'content-type': 'text/html' });
//                 res.end(data);
//             }
//         });
//     } else {
//         res.writeHead(404, { 'content-type': 'text/plain' });
//         res.end('No file available');
//     }
// }).listen(7000, () => console.log('Server running on port 7000'));
