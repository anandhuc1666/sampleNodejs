const path = require('path')
const fs = require('fs')
const stud = 'leave'
fs.appendFile(path.join(__dirname,'/app','index.txt'),`\n arun:${stud}`,(err)=>{
   if(err) throw err
   console.log('msg send/...')
})
