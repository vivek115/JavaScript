// function mult(a,b){
//     return a*b;
// }
// console.log(mult(5));
// here we define only one variable but we define two variable in function
// it shows result NAN(Not a number)
// so here we can use default parameter

function mult(a,b=5){
    return a*b;
}
console.log(mult(5));