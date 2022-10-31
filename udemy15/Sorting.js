// sort method only sorts the string

let fruits = ["Banana","Mango","Apple","Pomergrante"]
fruits.sort()
console.log(fruits);
console.log(fruits.reverse());

// If we want to sort the numbers
// so you have to provide custom logic

let marks =[98,88,23,65,12,3,15]
// marks.sort(function(a,b){
//     return a-b;
// });

console.log(marks.sort((a,b)=> a-b));
// reversing the number
let marks =[98,88,23,65,12,3,15]
console.log(marks.sort((a,b)=> a-b));
console.log(marks.sort((a,b)=> b-a));


