const fs = require('fs')
fs.open('newText.txt','w',(err)=>{
if(err) throw err
console.log('filte created...')
})