let person ={
    firstname: "vivek",
    lastname: "joshi",
    age: 28,
    fullname: function(){
        console.log(this.firstname + this.lastname);
    }
}
console.log(person.fullName());
console.log(person.age);
// another way to access properties
console.log(person['lastname']);

// you can change/update the property at runtime

person.firstname="Tim david"
console.log(person.firstname);

//you can add the property 

person.gender ='male';
console.log(person);

// if you want to delete the property

delete person.gender
console.log(person);

// to check if the property exist or not 

console.log('lastname' in profile);

// To print all the value of the property using for loop(enhanced for loop)

for (let key in  person){
    console.log(person[key]);
}

 for(let key in person){
     console.log(person[key]);
 }