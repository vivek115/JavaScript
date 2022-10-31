// The javascript math object allows you to perform mathmatical tasks on numbers
// PI value of PI is 3.143

console.log(Math.PI);

// math.round()
//return the value of x rounded to its nearest integer

let num = 10.2565;
console.log(Math.round(num));

//Math.pow()
//Math.pow(x,y) returns the value of x to the power y
console.log(Math.pow(3,3));
console.log(2**3);

//Math.sqrt()
//Math.sqrt(x) returns the square root of x

let arr = [25,36,49,64,81];
let arrsquare = arr.map((element,index,array) => {
 return Math.sqrt(element);
});
console.log(arrsquare);

// Math.abs()
//Math.abs(x) returns the absolute(positive) value of x

console.log(Math.abs(-55));
console.log(Math.abs(-55.5));
console.log(Math.abs(-955));
console.log(Math.abs(4-6));


// Math.ceil()
//Math.ceil(x) returns the value of x rounded up to its nearest integer 

console.log(Math.ceil(4.4));
console.log(Math.round(4.51));
console.log(Math.ceil(99.1));
console.log(Math.round(99.1));

//Math.floor()
//Math.floor(x) returns the value of x rounded down to its nearest integer

console.log(Math.floor(4.7));
console.log(Math.floor(99.9));

//Math.min()
//Math.min() can be used to find the lowest value in a list of arguments 

console.log(Math.min(0,150,30,20,-8,-200));

//Math.max()
//Math.max() can be used to find the highest value in a list of arguments 

console.log(Math.max(0,150,30,20,-8,-200));

//Math.random()
//Math.random() returns a random number between 0(inclusive), and 1

console.log(Math.floor(Math.random()*10)); // 0 to 9

//Math.trunc()
//trunc() method returns the integer part of a number

console.log(Math.trunc(4.6));
console.log(Math.trunc(-99.1));

// By using warn we can see result in yellow highlighted text

console.warn(Math.trunc(-99.1));



