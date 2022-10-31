// Array of an array is called 2 dimensional array
// we use reduce() and concat() method 
const arr =[['zone1','zone2'],['zone3','zone4'],
['zone5','zone6']
];
let flattenarray = arr.reduce((accumulator,element) => {
return accumulator.concat(element);
})
console.log(flattenarray);