var area = "circle";
var PI = 3.142;
var l = 5, b = 4, r = 3;
switch (area) {

    case 'circle':
        console.log("the area of circle is : " + PI * r ** 2);
        break;

    case 'rectangle':
        console.log("the area of rectangle is : " + (l * b));
        break;

    case 'triangle':
        console.log("the area of triangle is : " + (l * b) / 2);
        break;

    case 'square':
        console.log("the are of square is : ");
        break;

    default:
        console.log("Please enter valid data");
}