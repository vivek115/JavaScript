var iAmBest = null;
// we have assigned the value null
console.log(iAmBest);
console.log(typeof(iAmBest));
// it will show output in terminal "object" and it is a bug
var iAmStandBy;
// it is undefined
console.log(iAmStandBy);

var phoneNumber ='9812344444';
var myName='vicky';
console.log(isNaN(phoneNumber)); // It will return value in boolean(false)
console.log(isNaN(myName)); // It will return value in boolean (true)
if(isNaN(myName)){
    console.log("plz enter valid phone number");
}