
// Add dec at the end of the array
//what is the return value of splice method
// update march to MARCH(update)
// delete june from array

// Add dec at the end of the array
const month = ['jan','march','april','june','july'];
month.push('dec');
console.log(month);

// what is the return value of splice method
// splice() method is used to add and/or removes elements from an array
// splice methods return empty array (it will show because we are not deleting the element)

// here we are adding the elements in the array

const month = ['jan','march','april','june','july'];
const newmonth = month.splice(4,0,'dec')
console.log(month);


// or way If we are having multiple elements we are not able to count
const month = ['jan','march','april','june','july'];
const newmonth = month.splice(month.length,0,'dec')
console.log(month);

//update march to MARCH(update)
// We can use splice method 


const month = ['jan','march','april','june','july'];
const updatemonth = month.splice(1,1,'MARCH')
console.log(month);

// or way

const month = ['jan','march','april','june','july'];
const indexofmonth = month.indexOf('march');
// indexof() method will return -1 if there is no value in the array
if(indexofmonth!= -1){
    const updatemonth = month.splice(indexofmonth,1,'MARCH');
    console.log(month);
}else{
    console.log("No such data found");
}

// delete june from array

const month = ['jan','march','april','june','july'];
const indexofmonth = month.indexOf('june');
// indexof() method will return -1 if there is no value in the array
if(indexofmonth!= -1){
    const updatemonth = month.splice(indexofmonth,1);
    console.log(month);
}else{
    console.log("No such data found");
}

// or way
const month = ['jan','march','april','june','july'];
const indexofmonth = month.indexOf('april');
// indexof() method will return -1 if there is no value in the array
if(indexofmonth!= -1){
    const updatemonth = month.splice(indexofmonth,Infinity);
    // we are using infinity because it will delete all the elements in the array
    // which will come after april and also delete april also which we have mentioned in the index of method
    console.log(month);
}else{
    console.log("No such data found");
}
