var scores =[12,13,14,16]
let sumvalue =scores.filter(scores=>scores%2==0).map(scores=>scores*3).reduce((accumulator,element)=>
accumulator+=element,0);
console.log(sumvalue);