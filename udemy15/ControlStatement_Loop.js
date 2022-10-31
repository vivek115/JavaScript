const flag = true;
// const will tell that I an not having another value expect true in const variable

if(!flag){
console.log("condition satisfied");// expression become false not variable

}else{
    console.log(flag);
console.log("condition not statisfied");
}

// It will print infinite loop 
while(true){
    console.log("i am inside loop");
}

let i =0;
while(i<10){
    i++
    console.log(i);
}

// do while loop - one round of loop will run before it checks condition

do{
i++
}while(i>10){
    console.log(i);
}

// for loop

for(let k=0;k<=10;k++){
    console.log(k);
}

// when you know that how many times you have to run then used for loop (fixed number of iteration)

//When number of iteration is not fixed then you can use while loop
// If you want to do iteration with certain condition then you can used while loop
 
//from 1 to 10 give me the common multiple values of 2 and 5
let n=0;
for(let k=1;k<=10;k++){
    if(k%2==0 && K%5==0){
        n++
        console.log(k);
        if(n==3){
            break;
        }
    }
}

