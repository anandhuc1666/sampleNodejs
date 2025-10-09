// function add(num1,num2,callbsck){
//     let err = false
//     if(num1 === 0){
//         err = true
//     }
//     callbsck(num1+num2,err)
// }
// function mult(num1,num2,callbsck){
// callbsck(num1*num2)
// }
// add(10,20,(sum,err)=>{
//    if(err){
//     console.log('first number is 0')
//    }else{
//     console.log(sum)
//     mult(sum,sum,(p)=>{
//         console.log(p);

//     })
//    }
// })

const Promise = require('promise')

const newNumber = (num1, num2) => {
    return new Promise((resolve, reject) => {
        let err = false
        if(num1 === 12){
            err = true
             reject(err)
        }else{
        resolve(num1 + num2)
        }

    })
}
newNumber(12, 20)
.then((p) => console.log(p))
.catch((e)=>console.log('error is found',e))