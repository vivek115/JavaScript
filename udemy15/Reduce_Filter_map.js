// Reduce filter and map
// use accumaltor for sum and multiplication of array 

let marks = [12,13,14,15,16,17]
let sum = marks.reduce((accumultor,element,index,array) =>{
    //return accumultor += element
    return accumultor *= element
})
console.log(sum);

// to print only even number
var evenscores=[]
var scores =[12,13,14,16]
for(let i =0;i<scores.length;i++){
    if(scores[i]%2==0){
       evenscores.push(scores[i])
    }
}
console.log(evenscores);

// using filter method

var scores =[12,13,14,16]
let newfilter = scores.filter(score =>
    score%2==0)
    console.log(newfilter);


// if you want to filtering an array then use filter method 
// if you want to accumulate an element then you can use reduce method

// using map function

// mapping  value to new value


var scores =[12,13,14,16]
let newfilter = scores.filter(score =>
    score%2==0)
    console.log(newfilter);
  let maparay = newfilter.map(scores=>scores*3)
    console.log(maparay);

maparay.reduce((accumulator,element)=>
accumulator+element,0
)

