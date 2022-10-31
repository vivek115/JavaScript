
// here we can give array length and give the value by making object of it 
var marks = Array(6)
new Array(20,30,24,45,27)

//second way to create array
// Array can start its index from 0

// we can create a sub array from main array by using slice method

let marks = [12,13,14,15,16,17]
submarks = marks.slice(2,4,)
console.log(submarks);

//marks[0]
marks[3] = 19
console.log(marks);
console.log(marks.length);
marks.push(65);
console.log(marks);
marks.pop(marks);
marks.unshift(marks);
marks.shift(marks);
console.log(marks.indexOf(17));
console.log(marks.includes()); // to check that something is present in array or not we use include method
// it return the boolean

// If we want to iterate all the element in the array

let marks = [12,13,14,15,16,17]
let count = marks.length;
for(let i=0;i<count;i++){
    console.log(marks[i]);
}

//if we want to sum of the array

let marks = [12,13,14,15,16,17]
let count = marks.length;
var sum=0;
for(let i=0;i<count;i++){
    sum = sum+ marks[i];
}
console.log(sum);

