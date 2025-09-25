
const http = require('http')

http.createServer((req,res)=>{
   res.write('hello my new project')
   res.end()
}).listen(5005,()=>console.log('server running...'))
