var year=1600;
if(year%400==0 || (year%4==0 && year%100!=0)){
    console.log("It is a leap year");
}else{
    console.log("It is not a leap year");
}

// we have total 5 falsy value in javascript 
// 0,"",undefined,null,false**