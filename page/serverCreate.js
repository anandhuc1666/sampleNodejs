// // const path = require('path')
// const fs = require('fs')
// const http = require('http')

// http.createServer((req, res) => {
//     fs.writeFile('txtone.txt', 'sample text one', (err) => {
//         if (err) {
//             res.writeHead(500, { 'Content-Type': 'text/plain' })
//             res.end('writing 404')
//             return
//         }
//         fs.readFile('textone.txt', "utf8", (err, data) => {
//             if (err) {
//                 res.writeHead(500, { 'Content-Type': 'text/plain' })
//                 res.end('reading 404')
//                 return
//             }
//             res.writeHead(200, { 'Content-Type': 'text/plain' })
//             res.write(data)
//             console.log(data)
//             res.end()
//         })
//     })

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
