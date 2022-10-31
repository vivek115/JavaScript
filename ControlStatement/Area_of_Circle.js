//It evaluates an expression,matching the expression's value to a
//case clause, and executes statements associated with that case.

// first without break statement
//Find the area of circle,triangle and rectangle?
var area = "circle";
var area = "triangle";
var area = "rectangle";
var PI=3.142;
var l=5,b=4,r=3;
if(area=="circle"){
    console.log("the area of circle is : "+PI*r**2);
}else if(area=="triangle"){
    console.log("the area of triangle is : "+(l*b)/2);
}else if(area=="rectangle"){
    console.log("the area of rectangle is : "+(l*b));
}else{
    console.log("enter valid data");
}
