// the "push()" method adds one or more elements to the
// end of the array and returns the new length of the array

const animals = ['pigs','goats','sheep'];
const count = animals.push("tiger");
console.log(animals);
console.log(count);

// To add  multiple elements
const animals = ['pigs','goats','sheep'];
animals.push("tiger","lion","elephent");
console.log(animals);

// "unshift()" method adds one or more elements to the
// begining of the array and returns the new length of the array.

const animals = ['pigs','goats','sheep'];
animals.unshift("tiger","lion","elephent");
console.log(animals);

// 2nd example

const myNumbers =[1,2,3,5];
myNumbers.unshift(4,6);
console.log(myNumbers);

// 3rd example
// pop() method removes the last element from the array and returns
// that element.This method changes the length of the array

const myNumbers =[1,2,3,5];
myNumbers.pop();
console.log(myNumbers);

// 4th example
//The shift() method is used for remove the frist element from an array and 
// returns element.This method changes the length of the array

const myNumbers =[1,2,3,5];
myNumbers.shift();
console.log(myNumbers);
