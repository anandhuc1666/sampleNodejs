const fs = require('fs')
const http = require('http')

http.createServer((req, res) => {
    fs.writeFile('sample.txt', 'hello world222', (err) => {
        if (err) {
            console.log('Error writing file:', err)
            res.writeHead(500, { 'Content-Type': 'text/html' })

            res.end('Error writing file')

            
        } 

        console.log('File created and text added')
      
    })
      fs.readFile('sample.txt', 'utf8', (err, data) => {
            if (err) {
                console.log('Error reading file:', err)
                res.writeHead(500, { 'Content-Type': 'text/html' })
               res.end('Error reading file')
            }

            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()
        })
}).listen(7000, () => console.log('Server is running on port 7000'))
