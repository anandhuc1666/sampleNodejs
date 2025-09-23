// const Eventemiter = require('events')
// const event = new Eventemiter()

// event.on('message',(data)=>{
//     console.log(data.use)
// })
// event.on('logout',(data)=>{
//     console.log(data)
// })
// event.emit('message',{use: 'login'})
// event.emit('logout',{user: 'logout'})
// const path = require('path')
// const fs = require('fs')
// const http = require("http")
// fs.readFile(path.join(__dirname, "/app/index.txt"), "utf8", (err, data) => {
//     if (err) throw err
//     if (data) {
//         const server = http.createServer((req, res) => {
//             console.log(req.url)
//             res.write(data)
//             res.end()
//         })
//         const PORT = process.env.PORT || 3001;
//         server.listen(PORT, () => console.log(`server is running in ${PORT}`))
//     } else {
//         console.log("server not running")
//     }
// })

console.log('anandhu')

function name(){
    console.log('anandhu one')
}
name()
const names = function(){
    console.log('anandhu two')
}
names()
const tname = ()=>{ console.log('anandhu three')}
tname();

(function(){
    console.log('anandhu four')
})();