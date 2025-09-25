const path = require('path')
const fs = require('fs')
const http = require('http')

fs.unlink('re-Text.txt',(err)=>{
    if(err) throw err
})
