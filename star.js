const Eventemiter = require('events')
const event = new Eventemiter()

event.on('message',(data)=>{
    console.log(data.use)
})
event.on('logout',(data)=>{
    console.log(data)
})
event.emit('message',{use: 'login'})
event.emit('logout',{user: 'logout'})