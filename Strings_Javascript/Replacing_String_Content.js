//The replace() method is used to replace a specified value 
// with another value in a string
// syntex(searchfor,replacewith)


const biodata = 'I am software engineer';
let replacedata = biodata.replace("software","Qualityanalyst")
console.log(replacedata);

// if we want to replace the character but it is used multiple
// times in a string so it will replace the string which come first
// rest will not change
// for that we can use replaceall() method where he can change all the character in the string 

const biodata = 'I am software engineer software';
let replacedata = biodata.replace("software","Qualityanalyst")
console.log(replacedata);