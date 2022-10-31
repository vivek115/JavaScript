
// Array.prototype.forEach()
// It will calls a function for each element in the array

var myfriends = ['vicky',23,true,'ramesh','vishal'];
myfriends.forEach(function (element,index,array){
console.log(element+ " index of "+index+ " " + array);
});

// By using fat arrow function

var myfriends = ['vicky',23,true,'ramesh','vishal'];
myfriends.forEach((element,index,array) => {
    console.log(element+ " index of "+index+ " " + array);
});
