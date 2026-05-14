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

let value = toCelsius(); // this will call the function toCelsius with no arguments and return NaN because we are trying to perform a mathematical operation on undefined
console.log(value); // this will print NaN to the console because we are calling the function with no arguments and trying to perform a mathematical operation on undefined

// document.getElementById("demo").innerHTML = value; // this will change the innerHTML of the element with id "demo" to NaN because we are calling the function with no arguments and trying to perform a mathematical operation on undefined

// default parameters
function addition(x,y=10){
    return x + y;
}     

let result1 = addition(5); // this will call the function addition with the argument 5 and use the default value of y which is 10 to return the result which is 15
let result2 = addition(5,20); // this will call the function addition with the arguments 5 and 20 and return the result which is 25
console.log(result1);
console.log(result2);