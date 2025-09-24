const fs = require('fs')
fs.rename('newText.txt','re-Text.txt',(err)=>{
    if(err) throw err
    console.log('file re-name')
})