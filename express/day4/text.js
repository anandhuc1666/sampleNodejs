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

// const Promise = require('promise')

// const newNumber = (num1, num2) => {
//     return new Promise((resolve, reject) => {
//         let err = false
//         if (num1 === 12) {
//             err = true
//             reject(err)
//         } else {
//             resolve(num1 + num2)
//         }

//     })
// }
// const multiply = (num1, num2) => {
//     return new Promise((resolve, reject) => {
//         resolve(num1 * num2)
//     })
// }
// const div = (num1,num2) =>{
//   return  new Promise((resolve, reject) => {
//         resolve(num1/num2)
//     })
// }
// newNumber(20, 20)
//     .then((p) => {
//         console.log(p)
//         return multiply(p,p)
//     })
//     .then((p) => {console.log(p)
//          return div(p,p)})
//          .then((y)=>console.log(y))
//     .catch((e) => console.log('error is found', e))

const Promise = require('promise')

const num = (num1, num2) => {
    return new Promise((resolve, reject) => {
        resolve(num1 + num2)
    })
}
const nums = (num1, num2) => {
    return new Promise((resolve, reject) => {
        resolve(num1 * num2)
    })
}
// Promise.all([num(10,20),nums(10,20)])
// .then((p)=>console.log(p))

const result = async () => {
    let name = await num(10, 20)
    console.log(name);

}
result(10, 20)