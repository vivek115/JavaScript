// function expression is similar to and has the same syntax
// as a function decleration one can define "named"
//function expression (where the name of the expressions might)
// be used in the call stack for example
// or anonymous function expressions.

//function without name is called anonymous function

var funexp = function (a,b){
    return total=a+b;
}
//console.log(funexp(5,15));
var sum = funexp(5,15);
console.log("the sum of two number "+sum);
