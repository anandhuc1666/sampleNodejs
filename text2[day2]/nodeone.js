const fs = require('fs')
const http = require('http')

http.createServer((req,res)=>{
    fs.writeFile('text.txt','hello new file',(err)=>{
        if(err) throw err
    })
    const readData = async()=>{
        try{
             const data = await fs.readFile('text.txt','utf8',()=>{
                console.log(data)
                res.writeHead(200, {'content-type':'text/html'})
                res.write(data)
                res.end()
             })
        }catch (err){
          console.log(err)
        }
      
    }
    readData()

}).listen(5000,()=>console.log('server is on running 5000 port'))

