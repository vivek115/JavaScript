let arr = [25,36,49,64,81];
let newarr = arr.map(function(element,index,array){
    return Math.sqrt(element)
})
console.log(newarr);

let arr = [25,36,49,64,81];
let newarr = arr.map((element,index,array) => {
    return Math.sqrt(element)
})
console.log(newarr);

let arr = [25,36,49,64,81];
let newarr = arr.map((element,index,array) => {
   return element*2
}).filter((element) => {
  return element>100
})
console.log(newarr);

let arr =[2,3,4,5,6,8];
let arr1= arr.map((element,index,array) => 
 element * 2)
.filter((element) => 
    element>10);
console.log(arr1);