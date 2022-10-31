//Incrementing and decrement operator
// operator : x++ or ++x
//If used postfix,with operator after operand (for example,x++)
//the increment operator increments and returns the values before incrementong
//If used prefix,with opertor before operand (for example ++x)
// the increment operator increments and return the value after
var num = 15;
var newNum =num++ + 5;
console.log(num);
console.log(newNum);

var num = 15;
var newNum =++num + 5;
console.log(num);
console.log(newNum);

var num = 15;
var newNum =num-- + 5;
console.log(num);
console.log(newNum);

var num = 15;
var newNum =--num;
console.log(num);
console.log(newNum);