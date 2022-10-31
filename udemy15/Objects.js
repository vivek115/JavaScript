// object is collection of properties 
// It stores the key value pair
// this represent current object
let person = {
    firstname:"Tim",
    lastname:"pandey",
    age:24,
    fullName: function()
    {
      console.log(this.firstname + this.lastname);
    }

}
console.log(person.fullName());
console.log(person.lastname);

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

console.log('firstname' in person);

// To print all the value of the property using for loop(enhanced for loop)

for (let key in  person){
    console.log(person[key]);
}

