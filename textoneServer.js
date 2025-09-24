const http = require('http')
const path = require('path')
const fs = require('fs')

// http.createServer((req, res) => {
//     fs.readFile(path.join(__dirname, "/app", "index.txt"), "utf8", (err, data) => {
//         if(err) throw err
//         res.write(data)
//         res.end()
//     })
// }).listen(5005, () => console.log('server is on'))
const Eventemiter = require('events')
const emiter = new Eventemiter()

emiter.on('save',(arg)=>{
    console.log(`hello student your name is : ${arg.name} and your ID is : ${arg.id}`)
})
emiter.emit('save',{
    id:20,
    name:'anandhu'
})