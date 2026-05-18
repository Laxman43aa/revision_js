// fucutions are blocke of code 

//functon decleration 
function sayGoodmorning(){
    return "good morning";
}
//fuction call or invocation
let message = sayGoodmorning();
console.log(message);

// function with parameters
// a function can be use many times with different values
function add(a,b){
    return a + b;
}
let sum = add(5,10);
console.log(sum);

function mutiply(a,b){
    return a * b;
}
let product = mutiply(5,10);
let product2 = mutiply(50,50);
console.log(product);
console.log(product2);

// //local variables these variables are only accessible within the function
// function myfuction(){
//     let carNAme = "volvo";
//     return carNAme;
// }
//console.log(carNAme); // this will give an error because carNAme is a local variable
// console.log(myfuction()); // this will work because we are calling the function that contains the local variable

// global variables these variables are accessible anywhere in the code
let globalVar = "I am a global variable";
console.log(globalVar);
function testGlobal(){
    console.log(globalVar); // this will work because globalVar is a global variable
}
testGlobal();

function toCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9;
}
//fuction used as variable
let x = toCelsius(77);
let text = "The temperature is " + x + " degrees Celsius.";
console.log(text);

// function invocation 
 function sayHii(){
    return "hello world";
}
let greet = sayHii();
console.log(greet);

// function invocation using the return value

function sayHello(){
    return "hello laxman";
}
let greeting = sayHello(); // this will return "hello laxman" but we are not storing it in a variable or using it in any way
console.log(greeting); // this will print "hello laxman" to the console because we are calling the function and printing its return value
// display the resutl in the html page
document.getElementById("demo1").innerHTML = greeting; // this will change the innerHTML of the element with id "demo1" to "hello laxman" because we are calling the function and using its return value to set the innerHTML of the element
 
// calling a function many times with different values

function add(a,b){
    return a + b;
}
let sum1 = add(5,10);
let sum2 = add(20,30);
console.log(sum1);
console.log(sum2);

// function are invoked with ()
function toCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9;
}
let value = toCelsius(77); // this will call the function toCelsius with the argument 77 and return the result which is 25
console.log(value); // this will print 25 to the console because we are calling the function and printing its return value
document.getElementById("demo2").innerHTML = "the value is: " + value; // this will change the innerHTML of the element with id "demo2" to 25 because we are calling the function and using its return value to set the innerHTML of the element

// calling and referencing a function
function myFunction(){
    return "hello javaScript, welcome to functions";
}

let text1 = myFunction;
console.log(text1); // this will print the function definition to the console because we are referencing the function without calling it
let text2 = myFunction(); // this will call the function and return the result which is "hello javaScript, welcome to functions"
console.log(text2); // this will print "hello javaScript, welcome to functions" to the console because we are calling the function and printing its return value
document.getElementById("demo3").innerHTML = text1; // this will change the innerHTML of the element with id "demo3" to "hello javaScript, welcome to functions" because we are calling the function and using its return value to set the innerHTML of the element
document.getElementById("demo4").innerHTML = text2; // this will change the innerHTML of the element with id "demo4" to "hello javaScript, welcome to functions" because we are calling the function and using its return value to set the innerHTML of the element


// function can be called from anyware in the code
function sayjavaScript(){
    return "hello javaScript";
}

function showjavaScript(){
 document.getElementById("demo5").innerHTML = sayjavaScript(); // this will change the innerHTML of the element with id "demo5" to "hello javaScript" because we are calling the function and using its return value to set the innerHTML of the element
}
// showjavaScript(); // this will call the function showjavaScript which will call the function sayjavaScript and change the innerHTML of the element with id "demo5" to "hello javaScript" because we are calling the function and using its return value to set the innerHTML of the element
// console.log(showjavaScript()); // this will print "hello javaScript" to the console because we are calling the function and printing its return value

//  function with parameters
function add(a,b){
    return a + b;
}
// function with parameters can be called with different values to get different results , Parameters are listed inside the parentheses in the function definition.
let sum3 = add(5,10);
console.log(sum3);

function mutiply(a,b){
    return a * b;
}
let product3 = mutiply(5,10);
let product4 = mutiply(50,50);
console.log(product3);
console.log(product4);

// function with one peramenter
function sayMYName(name){
    return "hello " + name;
}
let greeting1 = sayMYName("laxman");
let greeting2 = sayMYName("vishnu");
console.log(greeting1);
console.log(greeting2);
document.getElementById("demo6").innerHTML = greeting1; // this will change the innerHTML of the element with id "demo6" to "hello laxman" because we are calling the function and using its return value to set the innerHTML of the element
document.getElementById("demo7").innerHTML = greeting2; // this will change the innerHTML of the element with id "demo7" to "hello vishnu" because we are calling the function and using its return value to set the innerHTML of the element   

// function with multiple parameters
function fullName(firstName, lastName){
    return firstName + " " + lastName;
}
let name1 = fullName("Laxman", "Rawat");
console.log(name1);
document.getElementById("demo8").innerHTML = "the full name is: " + name1; // this will change the innerHTML of the element with id "demo8" to "Laxman Rawat" because we are calling the function and using its return value to set the innerHTML of the element

// parameters vs arguments
// parameters are the names listed in the function definition, while arguments are the real values passed to the function when it is called. In the above example, firstName and lastName are parameters, while "Laxman" and "Rawat" are arguments.
function toCelsius(farenheit) {
  return (5/9) * (farenheit-32);
}

let value2 = toCelsius(68); // this will call the function toCelsius with the argument 68 and return the result which is 20
console.log(value2); // this will print 20 to the console because we are calling the function with an argument and performing a mathematical operation on it

// document.getElementById("demo").innerHTML = value; // this will change the innerHTML of the element with id "demo" to NaN because we are calling the function with no arguments and trying to perform a mathematical operation on undefined

// default parameters
function addition(x,y=10){
    return x + y;
}     

let result1 = addition(5); // this will call the function addition with the argument 5 and use the default value of y which is 10 to return the result which is 15
let result2 = addition(5,20); // this will call the function addition with the arguments 5 and 20 and return the result which is 25
console.log(result1);
console.log(result2);

// function with return statement 
//When a function reaches a return statement, the function stops executing.
//The value after the return keyword is sent back to the caller.
function sayHello2(){
    return "hello world again";
}
let greeting3 = sayHello2(); // this will call the function sayHello2 and return the result which is "hello world again"
console.log(greeting3); 
document.getElementById("demo9").innerHTML = greeting3; // this will change the innerHTML of the element with id "demo9" to "hello world again" because we are calling the function and using its return value to set the innerHTML of the element

// returning a calculated value
function multiply2(a,b){
    return a * b;
}
let result3 = multiply2(5,10); // this will call the function multiply2 with the arguments 5 and 10 and return the result which is 50
console.log(result3);
document.getElementById("demo10").innerHTML = "the result is: " + result3; // this will change the innerHTML of the element with id "demo10" to "the result is: 50" because we are calling the function and using its return value to set the innerHTML of the element

// Using Return Values in Expressions
function multiply3(a,b){
    return a * b;
}
let result4 = multiply3(5,10) * 10; // this will call the function multiply3 with the arguments 5 and 10 and return the result which is 50 and then add 20 to it to get the final result which is 70
console.log(result4);
document.getElementById("demo11").innerHTML = "the final result is: " + result4; // this will change the innerHTML of the element with id "demo11" to "the final result is: 70" because we are calling the function and using its return value in an expression to set the innerHTML of the element

// Return Values
// a function can return any type of value, including numbers, strings, arrays, objects, and even other functions. The return value can be used in expressions, stored in variables, or passed as arguments to other functions.
function fullName2(firstName, lastName){
    return firstName + " " + lastName;
}
let name2 = fullName2("Kalua", "Rawat"); // this will call the function fullName2 with the arguments "Laxman" and "Rawat"
console.log(name2);

// Return Statements Stop Execution
// Code written after a return statement will NOT be executed.
function multiply4(a, b) {
  return "Done"; // this will return "Done" and stop executing the function, so the next line will never run
  // Next line will never run
  return a * b;
}

let result = multiply4(4, 3);
console.log(result); // this will print "Done" to the console because the function will return "Done" and stop executing before it reaches the second return statement which is never executed

// Functions Without return
// If a function does not return a value, the return value will be undefined.
function multiply5(a, b) {
  let x = a * b;
}

let result5 = multiply5(4, 3);// this will call the function multiply5 with the arguments 4 and 3 and return undefined because the function does not have a return statement
console.log(result5); // this will print undefined to the console because the function does not return a value

// returning values early
// You can use return to stop a function early, based on a condition.
function checkAge(age) {
    if (age < 18) {
        return "too young"; // this will return "too young" if the age is less than 18 and stop executing the function
}
    return "access granted"; // this will return "access granted" if the age is 18 or greater
}

let age1 = checkAge(17); // this will call the function checkAge with the argument 17 and return "too young" because 17 is less than 18
let age2 = checkAge(18); // this will call the function checkAge with the argument 18 and return "access granted" because 18 is not less than 18
console.log(age1);
console.log(age2);
document.getElementById("demo12").innerHTML = age1 + " , " + age2; // this will change the innerHTML of the element with id "demo12" to "too young" because we are calling the function and using its return value to set the innerHTML of the element

// Returning Values to HTML
//Returned function values are often used to update HTML content.
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
let temp = toCelsius(77); // this will call the function toCelsius with the argument 77 and return the result which is 25
document.getElementById("demo13").innerHTML = temp; // this will change the innerHTML of the element with id "demo13" to 25 because we are calling the function and using its return value to set the innerHTML of the element
console.log(temp); // this will print 25 to the console because we are calling the function and printing its return value

// Function Arguments
// The Arguments Object
// The arguments object is an array-like object that contains the values of the arguments passed to a function. You can access the arguments using an index, starting from 0. The length property of the arguments object returns the number of arguments passed to the function.
x = findMax(1, 123, 500, 115, 44, 88);
function findMax() {
  let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
        max = arguments[i];
    }
}
    return max;
}
console.log(x); // this will print 500 to the console because 500 is the largest number among the arguments passed to the function findMax
document.getElementById("demo14").innerHTML = "the maximum number is: " + x; // this will change the innerHTML of the element with id "demo14" to "the maximum number is: 500" because we are calling the function and using its return value to set the innerHTML of the element

// Or create a function to sum all input valuse:
 y = sumAll(1, 123, 500, 115, 44, 88);
function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(y); // this will print 771 to the console because 771 is the sum of all the arguments passed to the function sumAll
document.getElementById("demo15").innerHTML = "the sum of all numbers is: " + y; // this will change the innerHTML of the element with id "demo15" to "the sum of all numbers is: 771" because we are calling the function and using its return value to set the innerHTML of the element

// The Order of Arguments Matters
// Arguments are assigned to parameters in the order they appear.
function subtract(a, b) {
    return a - b;
}
let result6 = subtract(10, 5); // this will call the function subtract with the arguments 10 and 5 and return the result which is 5 because 10 - 5 is 5
let result7 = subtract(5, 10);// this will call the function subtract with the arguments 5 and 10 and return the result which is -5 because 5 - 10 is -5
console.log(result6); // this will print 5 to the console because 5 is the result of subtracting 5 from 10
console.log(result7); // this will print -5 to the console because -5 is the result of subtracting 10 from 5
document.getElementById("demo16").innerHTML = "the result of subtracting 5 from 10 is: " + result6 + " and the result of subtracting 10 from 5 is: " + result7; // this will change the innerHTML of the element with id "demo16" to "the result of subtracting 5 from 10 is: 5 and the result of subtracting 10 from 5 is: -5" because we are calling the function and using its return value to set the innerHTML of the element

// Arguments Can Be Variables
// Arguments do not have to be values. They can also be variables.
let c = 10;
let d = 5;
function multiply6(a, b) {
    return a * b;
}
let result8 = multiply6(c, d); // this will call the function multiply6 with the arguments c and d which are 10 and 5 respectively and return the result which is 50 because 10 * 5 is 50
console.log(result8); // this will print 50 to the console because 50 is the result of multiplying 10 and 5

// Incorrect Arguments
// Incorrect arguments can return incorrect answers:
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value3 = toCelsius("John"); // this will call the function toCelsius with the argument "John" and return NaN because "John" is not a number and cannot be used in a mathematical operation
console.log(value3); // this will print NaN to the console because the function returned NaN due to the incorrect argument passed to it

// Missing Arguments
// If a function is called with fewer arguments than parameters, the missing values become undefined.

function multiply7(a, b) {
    return a * b;
}
let result9 = multiply7(5); // this will call the function multiply7 with the argument 5 and return NaN because the second parameter b is missing and becomes undefined, so the function tries to multiply 5 by undefined which results in NaN
console.log(result9); // this will print NaN to the console because the function returned NaN due to the missing argument

// Function Rest Parameter
// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

function sumAll2(...args) {
  let sum = 0;
    for (let arg of args){
    sum += arg;
}
    return sum;
    }
let result10 = sumAll2(4, 9, 16, 25, 29, 100, 66, 77); // this will call the function sumAll2 with the arguments 4, 9, 16, 25, 29, 100, 66, and 77 and return the result which is 771 because the rest parameter allows the function to treat all the arguments as an array and sum them up
console.log(result10);
document.getElementById("demo17").innerHTML = "the sum of all numbers is: " + result10; // this will change the innerHTML of the element with id "demo17" to "the sum of all numbers is: 771" because we are calling the function and using its return value to set the innerHTML of the element