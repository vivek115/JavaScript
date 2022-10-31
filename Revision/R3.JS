let arr =[2,3,4,5,6,8]
let newarry = arr.reduce(function(accumulator,element,index,array){
    return accumulator += element
})
console.log(newarry);

let arr =[2,3,4,5,6,8]
let newarry = arr.reduce(function(accumulator,element,index,array){
    return accumulator *= element
})
console.log(newarry);

let arr =[2,3,4,5,6,8]
let newarry = arr.reduce((accumulator,element,index,array) =>{
    return accumulator *= element
})
console.log(newarry);

let arr =[2,3,4,5,6,8]
let newarry = arr.map((element,index,array) =>{
   return element*2
}).filter((element) =>
{
return element>10
}).reduce((accumulator,element)=>{
    return accumulator+=element
})
console.log(newarry);


var myfriends = ['vicky',23,true,'ramesh','vishal']
console.log(myfriends[myfriends.length-1]);

var myfriends = ['vicky',23,true,'ramesh','vishal']
console.log(myfriends.length);

var myfriends = ['vicky',23,true,'ramesh','vishal']
for(let i =0;i<myfriends.length;i++){
    console.log(myfriends[i]);
}

var listoffriends = [['vicky is a', 'great' ,'leader'],
[ 'and','great','inspiration'],['himself']]
var storeelement = listoffriends.reduce((accumulator,element,index,array)=>{
return accumulator.concat(element)
})
console.log(storeelement);