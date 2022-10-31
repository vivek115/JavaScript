/// there are three method for extracting a part of a string

// slice(start,end)
//substring(start,end)
//substr(start,length)

// slice() method is used to extract a part of a string and return the extracted part
//in a new string

let str = "Apple,Bananaa,kiwi";
let res = str.slice(0,4);
console.log(res);

// -2 we give it will go last of the string but -2 

let str = "Apple,Bananaa,kiwi";
let res = str.slice(5,-2);
console.log(res);

//or

let str = "Apple,Bananaa,kiwi";
let res = str.slice(5);
console.log(res);

// substring() method is similar to slice() method
// the difference is that substring() can't accept 
// negative indexes

let str = "Apple,Bananaa,kiwi";
let res = str.substring(0,4);
console.log(res);

// it will count from zeroth position to the index position(7) which you have mentioned
let str = "Apple,Bananaa,kiwi";
let res = str.substring(7,-2);
console.log(res);

//substr() method is similar to slice() method
// the difference is that the second parameter specifies the
// length of the extrcated part
// can't accept negative indexes
// We use substr() method to extract data from the backside of given string 

let str = "Apple,Bananaa,kiwi";
let res = str.substr(-4);
// It will display/print last four character of the string 
console.log(res);




