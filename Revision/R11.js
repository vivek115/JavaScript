let fruits = ["Banana","Mango","Apple","Pomergrante"]
fruits.sort()
console.log(fruits);
fruits.reverse()
console.log(fruits);

let marks =[98,88,23,65,12,3,15]
console.log(marks.sort((a,b)=> a-b));
// marks.sort(function(a,b){
//     return a-b;
// });

let marks =[98,88,23,65,12,3,15]
marks.sort(function(a,b){
  return  a-b;
})

let marks =[98,88,23,65,12,3,15]
console.log(marks.sort((a,b)=> a-b))

let marks =[98,88,23,65,12,3,15]
console.log(marks.sort((a,b)=> b-a))

let marks =[98,88,23,65,12,3,15]
console.log(marks.sort((a,b)=> a-b)) // sorting a number
console.log(marks.sort((a,b)=> b-a)) // reverse the number