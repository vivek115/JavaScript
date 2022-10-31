var array = new Array(20)
new Array(10,20,20)

let mypaise = [123,341,451]
let storepaise = mypaise.slice(0,2)
console.log(storepaise);

let marks = [12,13,14,15,16,17]
marks[4]

let marks = [12,13,14,15,16,17]
console.log(marks.includes());
console.log(marks.includes()); // to check that something is present in array or not we use include method
// it return the boolean

let marks = [12,13,14,15,16,17]
let length = marks.length
let sum1=0;
for(var i =0;i<length;i++){
    sum1 = sum1+marks[i]
}
console.log(sum1);

var scores1 =[12,13,14,16]
let sumofvalue = scroes1.filter(scores1=>scores1%2==0).map(scores1=>scores1*3).reduce((accumulator,element)=>
accumulator+=element,0)
console.log(sumofvalue);

var scores =[12,13,14,16]
let sumvalue =scores.filter(scores=>scores%2==0).map(scores=>scores*3).reduce((accumulator,element)=>
accumulator+=element,0)
console.log(sumvalue);