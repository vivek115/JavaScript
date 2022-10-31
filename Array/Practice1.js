// find the square root of each element in an array

let arr = [25,36,49,64,81];
let arrsquare = arr.map((element,index,array) => {
 return Math.sqrt(element);
});
console.log(arrsquare);

// or way 

let arr = [25,36,49,64,81];
let arrsquare = arr.map((element,index,array) => 
Math.sqrt(element));
console.log(arrsquare);

// 2nd question - multiply each element by 2 and return only those elements which are greater than 10?

let arr =[2,3,4,5,6,8];
let arr1= arr.map((element,index,array) => {
return element * 2;
}).filter((element) => {
    return element>10;
});
console.log(arr1);

// or way

let arr =[2,3,4,5,6,8];
let arr1= arr.map((element,index,array) => 
 element * 2)
.filter((element) => 
    element>10);
console.log(arr1);