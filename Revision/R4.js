var raincoat = 'new one'
if (raincoat == 'new one') {
    console.log("nyc coat");
} else {
    console.log("not a new coat");
}

let area = 'circle'
let PI = 3.143
let l = 5, b = 10, r = 6
switch (area) {

    case 'circle':
        console.log("area of circle is : " + PI * r ** 2);
        break;

    case 'rectangle':
        console.log('area of rectangle is : ' + l * b);
        break;

    case 'triangle':
        console.log('area of rectangle is : ' + (l * b) / 2);
        break;

    default:
        console.log("Please enter valid data");

}

var mybest=null
console.log(mybest);
 var mydream
 console.log(mydream);
 console.log(typeof(mydream));

 var myname = 'vicky'
 var number = 3456789088
 console.log(isNaN(myname));
 console.log(isNaN(number));
if(isNaN(number)){
    console.log("enter valid name");
}else{
    console.log("please enter valid phone number");
}

console.log(007+"vicky");
console.log(9-"joshi");
console.log("javascript"+"good");
console.log(" "+ " ");
console.log(" " + 0);
console.log( "vicky" - "joshi");
console.log( true + true); // true represent 1 and false return 0

// ==-It will check the value only during comparison

//=== - It will check the value and datatypes during comparison

var a=13;
var b=14
var c=b;
b=a;
a=c;
console.log("the value of a is "+a);
console.log("the value of b is "+b);

var age=17
console.log((age>18 ? "you age is good enough":"your age is not good enough"));