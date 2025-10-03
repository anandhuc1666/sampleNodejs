// const http = require('http')
// const fs = require('fs')

// http.createServer((req,res)=>{
//     fs.readFile('sample.html','utf8',(err,data)=>{
//         if(err) throw err
//         res.write(data)
//         res.end()
//     })
// }).PORT
// const PORT = process.env.PORT || 3000
// const http = require('http')
// const fs = require('fs')
// const path = require('path')

// const server = http.createServer((req, res) => {
//     fs.readFile(path.join(__dirname, 'sample.html'), 'utf8', (err, data) => {
//         if (err) {
//             res.writeHead(500, { 'content-type': 'text/html' })
//             res.end('<h1>server not response 404</h1>')
//             console.log(err)
//             return
//         }
//         if (req.url === "/") {
//             res.writeHead(200, { 'content-type': 'text/html' })
//             res.write(data)
//             res.end()
//         }else{
//             res.writeHead(200,{'content-type':'text/html'})
//             res.write('<h1> this page not available </h1>')
//             res.end()
//         }

//     })
// })

// const PORT = process.env.PORT || 3000
// server.listen(PORT, () => console.log(`server is running in ${PORT}`))

