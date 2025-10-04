const fs = require('fs')
const http = require('http')

http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('form.html', 'utf8', (err, data) => {
            if (err) {
                console.log(err)
                return
            }
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write(data)
            res.end()
        })
    }else if('/home'){
        res.write('welcome home')
        res.end()
    }

}).listen(3000, () => console.log('server is running 3000'))