// Why Use Arrays?
// If you have a list of items (a list of car names, for example), storing the names in single variables could look like this:

// let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
// However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

// The solution is an array!

// An array can hold many values under a single name, and you can access the values by referring to an index number.

// Creating an Array
// Using an array literal is the easiest way to create a JavaScript Array.

// Syntax:

// const array_name = [item1, item2, ...];      
// It is a common practice to declare arrays with the const keyword.

// Learn more about const with arrays in the chapter: 

// Example
// const cars = ["Saab", "Volvo", "BMW"];

// Spaces and line breaks are not important. A declaration can span multiple lines:

// Example
const cars2 = [
  "Saab",
  "Volvo",
  "BMW"
];

// You can also create an empty array, and provide elements later:

// Example
const cars3 = [];
cars3[0]= "Saab";
cars3[1]= "Volvo";
cars3[2]= "BMW";

// Using the JavaScript Keyword new
// The following example also creates an Array, and assigns values to it:

// Example
const cars4 = new Array("Saab", "Volvo", "BMW");
// The two examples above do exactly the same.

// There is no need to use new Array().

// For simplicity, readability and execution speed, use the array literal method.

// Accessing Array Elements
// You access an array element by referring to the index number:

const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
console.log(car); // Outputs: Saab
document.getElementById("demo").innerHTML = car; // Outputs: Saab
// Note: Array indexes start with 0.

// [0] is the first element. [1] is the second element.

// Changing an Array Element
// This statement changes the value of the first element in cars:
cars[0] = "Opel";
let car1 = cars[0];
// The first element of cars is now changed from "Saab" to "Opel".
console.log(car1); // Outputs: Opel
// console.log(cars); // Outputs: ["Opel", "Volvo", "BMW"]
document.getElementById("demo1").innerHTML = car1; // Outputs: Opel

// Converting an Array to a String
// The JavaScript method toString() converts an array to a string of (comma separated) array values.

// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo2").innerHTML = fruits.toString();
// Result:

// Banana,Orange,Apple,Mango

// Access the Full Array
// With JavaScript, the full array can be accessed by referring to the array name:

// Example
// const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo3").innerHTML = cars;

// Arrays are Objects
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

// But, JavaScript arrays are best described as arrays.

// Arrays use numbers to access its "elements". In this example, person[0] returns John:

// Array:
const person1 = ["John", "Doe", 46];
console.log(person1[0]); // Outputs: John
document.getElementById("demo4").innerHTML = person1[0]; // Outputs: John
// Objects use names to access its "members". In this example, person2.firstName returns John:

// Object:
const person2 = {firstName:"John", lastName:"Doe", age:46};
console.log(person2.firstName); // Outputs: John
document.getElementById("demo5").innerHTML = person2.firstName; // Outputs: John

// Array Elements Can Be Objects
// JavaScript variables can be objects. Arrays are special kinds of objects.

// Because of this, you can have variables of different types in the same Array.

function myFunction() {
  return "Hello World!";
}
const myCars = [
  {type:"Fiat", model:"500", color:"white"},
  {type:"BMW", model:"X3", color:"black"}
];
function Datenow() {
  return new Date();
}
// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
const myArray = [];
myArray[0] = Datenow();
myArray[1] = myFunction();
myArray[2] = myCars;

console.log(myArray); 
document.getElementById("demo6").innerHTML = myArray;

// Array Properties and Methods
// The real strength of JavaScript arrays are the built-in array properties and methods:

// cars.length   // Returns the number of elements
// cars.sort()   // Sorts the array

// The length Property
// The length property of an array returns the length of an array (the number of array elements).

// Example
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits2.length;
console.log(length); // Outputs: 4

// Accessing the First Array Element
// Example
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits2[0];
console.log(fruit); // Outputs: Banana
// Accessing the Last Array Element
// Example
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits2[fruits2.length - 1];
console.log(fruit); // Outputs: Mango
