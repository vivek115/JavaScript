// block of code will be executed in the function

function sum(a,b){
return a+b;
}
sum(2,3)

// Anyonymus function- don have the name --- function expression
//Anyonymus function can only assign to the variable

let sumofinteger = function(c,d){
    return c+d
}
console.log(sumofinteger(4,5));

// another way to declare function (using fat arrow function) 

let sumofnumbers = (c,d)=> c+d;
console.log(sumofnumbers(3,4));