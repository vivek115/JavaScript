var mydata = [123,"vicky",45,'joshi','great']
var newdata = mydata.push('009')
console.log(mydata);

var mydata = [123,"vicky",45,'joshi','great']
var newdata = mydata.unshift('009')
console.log(mydata);

var mydata = [123,"vicky",45,'joshi','great']
var newdata = mydata.shift()
console.log(mydata);

var mydata = [123,"vicky",45,'joshi','great']
var newdata = mydata.pop()
console.log(mydata);

var mydata = [123,"vicky",45,'joshi','great']
mydata.forEach(function(element,index,array){
    console.log(element+" " +index+" " +array);
})

var mydata = [123,"vicky",45,'joshi','great']
mydata.forEach(function(element,index,array){
    console.log(element+" " +index+" " +array);
})

var mydata = [123,"vicky",45,'joshi','great']
mydata.forEach((element,index,array) => {
    console.log(element+" " +index+" " +array);
})

var mydata = [123,"vicky",45,'joshi','great']
for(let element in mydata){
    console.log();
}

var mydata = [123,"vicky",45,'joshi','great']
for(let element of mydata){
    console.log(element);
}

var mydata = [123,70,45,86,32,98]
var newmydata = mydata.map((element,index,array)=>{
    return element>50
})
console.log(mydata);
console.log(newmydata);

var mydata = [123,70,45,86,32,98]
var newmydata = mydata.map((element,index,array)=>{
    return `index number ${index} and value is ${element} & full array ${array}`
})
console.log(mydata);
console.log(newmydata);


const month = ['jan','march','april','june','july']
let addmonth = month.splice(month.length,0,'dec')
console.log(month);

const month = ['jan','march','april','june','july'];
const indexofmonth = month.indexOf('march');
// indexof() method will return -1 if there is no value in the array
if(indexofmonth!= -1){
    const updatemonth = month.splice(indexofmonth,1,'MARCH');
    console.log(month);
}else{
    console.log("No such data found");
}

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
