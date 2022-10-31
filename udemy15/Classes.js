// module.exports = 
class Person {
    // To extend/use the properties of class in another class 
    // const Person(class name) = require(./jsname in which class is having)
    age = 20;
    get location() {
        return "canada"
    }
    // constructor is method which executes by default when you create object of the class
    // variable that is defined under constructor is instance variable
    // this will represent the current class object

    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }
    //methods

    fullname() {
        console.log(this.firstname + this.lastname);
    }
}
// here we are creating the object of the class
// person is the name of the object
let person = new Person("vivek", "joshi")
console.log(person.age);
console.log(person.location);
console.log(person.fullname());