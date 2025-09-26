const fs = require('fs')

let numb = 5;
for(let i = 0; i<=numb; i++){
fs.unlink(`sample${i}.txt`,(err)=>{
    if(err) throw err
})
}
