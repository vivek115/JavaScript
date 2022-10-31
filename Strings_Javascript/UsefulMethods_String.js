// other useful methods

// toUpperCase() and toLowerCase() method

let myname = "vivek joshi";
console.log(myname.toUpperCase());
console.log(myname.toLowerCase());

//concat() method joins two or more string 
let fname="vivek";
let lname="joshi";
console.log(fname + lname);
console.log(fname.concat(" ",lname));
console.log(`${fname} ${lname}`);
console.log(fname.concat(lname));

// trim() method removes the whitespaces from both sides of a string
// it will remove starting space and ending space

 let str = "   hello world!  ";
 console.log(str.trim());

 // how to convert string to array

 // string can be converted to an array with the split() method

 let txt ="a, b, c|d, e,f";
 console.log(txt.split(",")); // split on commas
 console.log(txt.split(" ")); // split on spaces
 console.log(txt.split(" | ")); // split on pipe
