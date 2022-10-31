let string = 'India is a country of festivals and culture'
console.log(string.charAt(2));

let str = 'India is a country of festivals and culture'
console.log(str.charCodeAt(3));

let str = 'India is a country of festivals and culture'
let newstr = str.slice(0,10)
console.log(newstr);

let str = 'India is a country of festivals and culture'
let newstr = str.slice(0,-2) 
console.log(newstr);

let str = 'India is a country of festivals and culture'
let newstr = str.substring(9,-2)
console.log(newstr);

let str = 'India is a country of festivals and culture'
let newstr = str.substring(9)
console.log(newstr);

let str = 'India is a country of festivals and culture'
let newstr = str.slice(9)
console.log(newstr);

let str = 'India is a country of festivals and culture'
let newstr = str.substring(6,-2)
console.log(newstr);

let str = "Apple,Bananaa,kiwi";
let res = str.substr(-4);
// It will display/print last four character of the string 
console.log(res);

const biodata = 'I am software engineer';
console.log(biodata.indexOf("software"));

const biodata = 'I am software engineer';
console.log(biodata.indexOf('i',6));

// Property class [] in a string

let Ltne = "vivek joshi"
console.log(Ltne[4]);

const biodata = 'I am software engineer';
let update = biodata.replace('engineer','analyst')
console.log(update);

const biodata = 'I am software engineer';
let search = biodata.search('software')
console.log(search);

const biodata = 'I am software engineer';
console.log(biodata.toLowerCase());

const biodata = 'I am software engineer';
console.log(biodata.toUpperCase());

const biodata = 'I am software engineer';
console.log(biodata.trim());

// how to convert string to array

 // string can be converted to an array with the split() method

 let txt ="a, b, c|d, e,f";
 console.log(txt.split(",")); // split on commas
 console.log(txt.split(" ")); // split on spaces
 console.log(txt.split(" | ")); // split on pipe

let newname = new String("vivek joshi");
console.log(newname);

let anysentence = "we are the so-called \"vikings\" \"pandey\" from the north.";
console.log(anysentence);

let anysentence = 'we are the so-called "vikings"  "pandey" from the north.';
console.log(anysentence);

