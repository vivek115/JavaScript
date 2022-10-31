// map() method 
// it returns a new array containing the results of calling a 
// function on every element in this array
// it will return the new array without mutating the original array


const array1 = [1,4,9,16,25];
let newarry = array1.map((element,index,array1) => {
return element>9
});
console.log(array1);
console.log(newarry);

// or way

const array1 = [1,4,9,16,25];
let newArr = array1.forEach((element,index,array) => {
return `index no = ${index} and value is ${element} belong to ${array}`
});
console.log(newArr);

// Difference between for each and map method

//for each = It will return undefined
//map method will return the new array
// with map method is chainable this means you can attach reduce(),sort(),filter()
// and so on after performing a map() method of an array but with for each we can
// do and it will return undefined 

