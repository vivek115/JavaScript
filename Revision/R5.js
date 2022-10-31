var typeetx = function (a, b) {
    return a + b
}
console.log(typeetx(12, 13));

var sum = typeetx(12, 13)
console.log(sum);

function sum() {
    var a = 12;
    var b = 13;
    var total = a * b
    console.log(total);
}
sum()

function sum() {
    var a = 12;
    var b = 13;
    var total = a + b
    return `total of a and b variable ${total}`
}
console.log(sum());

let add = () => {
    let a = 5, b = 6;
    let total = a + b;
    return `the sume of two number is ${total}`;
}
console.log(add());

let multiply1 = () => {
    let a = 14;
    let b = 10;
    let total = a + b;
    return `the sum of two variable a and b ${total}`
}
console.log(multiply1());

let sum1 = () =>
    `the sume of two number ${(a = 10) + (b = 20)}`
console.log(sum1());


function data(a,b) {
    var total =a+b;
    console.log(total);
}
var storedata = data(12,13)
// storedata;

function datastore(a,b){
var total = a+b;
console.log(total);
}
var getdata = datastore(12,13)