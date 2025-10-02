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


