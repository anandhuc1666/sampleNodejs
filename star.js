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

// console.log('anandhu')

// function name(){
//     console.log('anandhu one')
// }
// name()
// const names = function(){
//     console.log('anandhu two')
// }
// names()
// const tname = ()=>{ console.log('anandhu three')}
// tname();

// (function(){
//     console.log('anandhu four')
// })();
// let person = {name:'anandhu',age:20,place:'vazhikkadavu',
//     qalification :function(){
//         console.log('bca') 
//     }
// }
// console.log(person.qalification())
// person.age=21;

// person.work = 'developer'
// console.log(person)

// function person(name,age){
//     this.name=name,
//     this.age=age,
//     this.display=function(){
//       console.log('name: '+this.name,'age: '+this.age)
//     }
// }
// var ad = new person("anandu",21)
// ad.display()
module.exports.hello=function(num1,num2){
    console.log(num1+num2)
}