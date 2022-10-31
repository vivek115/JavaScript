// function sum(){
//     let a=5,b=6;
//     let total = a+b;
//     return `the sume of two number is ${total}`; 
// }
// console.log(sum());

// how to convert in into fat arrow function

// let Add = ()  => {
//     let a=5,b=6;
//     let total = a+b;
//     return `the sume of two number is ${total}`; 
// }
//  console.log(Add());

//If we are having single line  code then we can use arrow function in that way 
let Add = ()  => `the sum of two number is ${(a=10)+(b=40)}`; 
console.log(Add());
