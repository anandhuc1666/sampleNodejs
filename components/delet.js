const fs = require('fs')
fs.unlink('newText.txt',(err)=>{
    if(err) throw err
    console.log('file delete')
})