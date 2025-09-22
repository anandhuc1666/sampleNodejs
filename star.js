const path = require("path");
const fs = require("fs");
const { question } = require("readline-sync");

// fs.mkdir(path.join(__dirname,"app"),{},(err)=>{
//     if(err) throw err
// })
// fs.mkdir(path.join(__dirname,"/app/index.text"),{},(err)=>{ ///not currect way to create a file in side a folder(use .txt)
//     if(err) throw err
// })

// fs.rmdir(path.join(__dirname,"/app/index.text"),(err)=>{
//     if(err) throw err
// })
// fs.writeFile(path.join(__dirname,"/app","index.text"),"name: anandhu",(err)=>{
//     if(err) throw err
// })
// const clintTxt = question("enter a name:")
// fs.writeFile(path.join(__dirname,"/app","index.txt"),`your name is: ${clintTxt}`,(err)=>{
//   if(err) throw err
// })
// fs.appendFile(path.join(__dirname,"/app/index.txt"),`\n your name is: ${clintTxt}`,(err)=>{
//     if(err) throw err
// })
fs.readFile(path.join(__dirname,"/app/index.txt"),'utf8',(err,data)=>{
    if(err) throw err
    console.log(data)
})

