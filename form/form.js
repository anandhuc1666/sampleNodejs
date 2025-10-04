const fs = require('fs')
const http = require('http')
const url = require('url')

http.createServer((req, res) => {
    let q = url.parse(req.url,true)
    if (q.pathname === '/') {
        fs.readFile('form.html', 'utf8', (err, data) => {
            if (err) {
                console.log(err)
                return
            }
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write(data)
            res.end()
        })
    }else if(q.query.name === 'anandhu' && q.query.password==="123456") {
        res.write('welcome home')
        res.end()
    }else{
       res.write('pass not found')
       res.end() 
    }




}).listen(3000, () => console.log('server is running 3000'))