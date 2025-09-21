let read = require('readline-sync')
let value = read.question('enter a number:')
console.log(`The number is : ${value}`)
let newNumber = 10
let number = Number(value) + Number(newNumber)
console.log(`The number add 10, sum : ${number}`)


// let num1 = 20;
// let num2 = 30
// if (num1 > num2) {
//     console.log(`The number num1 is big ${num1}`)
//     console.log(`average is num1 - num2 : ${num1 - num2}`)
// } else {
//     console.log(`The number num2 is big: ${num2}`)
//     console.log(`The average of the two number is ${num2 - num1}`)
// }

