// Flatten an array means to convert the 3d or 2d array into a single dimentional array
// for that we use reduce() method

// Reducer function takes four arguments:
//accumulator,current value,current index,source array

let arr =[2,3,4,5,6,8];
let sum = arr.reduce((accumultor,element,index,array) =>{
    debugger;
    //return accumultor += element
    return accumultor *= element
})
console.log(sum);

// or way 
// If we know the one value and we have to add in sum 
// that is the way we can do 

let arr =[2,3,4,5,6,8];
let sum = arr.reduce((accumultor,element,index,array) =>{
    debugger;
    //return accumultor += element
    return accumultor += element
    // here we add the known value
},7)
console.log(sum);

// or sum
let arr =[2,3,4,5,6,8];
let arr1= arr.map((element,index,array) => 
 element * 2)
.filter((element) => 
    element>10).reduce((accumultor,element) => {
        return accumultor += element
    });
console.log(arr1);

// or multiply

let arr =[2,3,4,5,6,8];
let arr1= arr.map((element,index,array) => 
 element * 2)
.filter((element) => 
    element>10).reduce((accumultor,element) => {
        debugger;
        return accumultor *= element
    });
console.log(arr1);
