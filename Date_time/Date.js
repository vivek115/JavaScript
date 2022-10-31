
// Date() is a object 


let currendate = new Date();
console.log(currendate);
console.log(new Date());
console.log(new Date().toLocaleString());
console.log(new Date().toString());

// date.now method will return the milliseconds 

console.log(Date.now());

// 7 numbers specify (years,month,day,hour,minute,second,millisecond(in that order))
//javascript count month from 0 to 11;
// january is 0 and december is 11

let d = new Date(2022,11,24,10,33,30,0);
console.log(d.toString());