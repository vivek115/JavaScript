// difference between let vs const vs var

//Let and const is having block scope
//Var is having function scope

// var myName1 = "vivek joshi";
// console.log(myName);

// var myName1="vicky joshi";
// console.log(myName);

// let myName = "vivek joshi";
// console.log(myName);

// let myName="vicky joshi";
// console.log(myName);

// const myName4 = "vivek joshi";
// console.log(myName);

// const myName3="vicky joshi";
// console.log(myName);

//agar aap const mai koi bhi value ek assign kr dete ho toh usko change nhi kr skte ho 
// but in let and var you can change 

// function scope and block scope 

function biodata(){
    //var myName = "vivek joshi";
    let myName = "vivek joshi";

    console.log(myName);

    if(true){
        var mylastname = "vicky"
        console.log('inner' + mylastname);
        console.log('inner' + myName);
    }
    console.log('innerouter' + mylastname);
}
biodata();

// jitne bhi parent ke andar hai let wale we can 
// use in child but can't use child let variable outside the block.
// we can't use const variable outside the function
