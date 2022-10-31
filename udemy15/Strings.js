//let day = 'tuesday'
let day="Monday"
console.log(day.length);
day.slice(0,4)
console.log(day[1]);
// it will return an array
let split = day.split("d");
console.log(split[1].trim().length);

// what is the difference between date 
let date='23'
let nextdate ='27'
let diff = parseInt(nextdate) - parseInt(date)
console.log(diff);
diff.toString()

//concate 
let day="Monday"
let newquote = day + "is funday"
console.log(newquote);
let val = newquote.indexOf("day",5)
console.log(val);

// 
let count =0;
let day="Monday"
let newquote = day + "is funday"
console.log(newquote);
let val = newquote.indexOf("day")
// this will search the day after index 5
//let val = newquote.indexOf("day",5)
console.log(val);
while(val!=-1){
    count++
    val = newquote.indexOf("day",val+1)
}
console.log(count);

