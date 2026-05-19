// Arrow Functions
// Arrow Functions allow a shorter syntax for function expressions.
// You can skip the function keyword, the return keyword, and the curly brackets:

// const multiply = (a, b) => a * b;

// Arrow Function Syntax
// An arrow function uses the => symbol.

// An arrow function is always written as a function expression.
const add = (a, b) => {
    return a + b;
}
// This arrow function does the same thing as a regular function expression.

// Shorter Syntax
// If the function body contains only one statement:

// You can remove the word function, the curly brackets and the return keyword.

// Before Arrow
// Function to compute the product of a and b:

const multiply = function(a, b) {return a * b}

// With Arrow
// const multiply = (a, b) => a * b;

// With Arrow
const hello = () => "Hello World!";

// Before Arrow
// const hello = function() {return "Hello World!";}

// Arrow Functions with One Parameter
// If a function has only one parameter, you can omit the parentheses:
// With Paranthesis
const square = (x) => x * x;
// Without Paranthesis
const square = x => x * x;
// With Paranthesis
const hello = (val) => "Hello " + val;
// Without Paranthesis
const hello = val => "Hello " + val;

// Arrow Functions Return Value by Default
// If the function has only one statement that returns a value:
// You can remove the brackets and the return keyword:

const hello = () => "Hello World!"; //This works only if the function has only one statement.

// Arrow Function Parameters
// If you have parameters, you pass them inside the parentheses:
const hello = (val) => "Hello " + val;

// If you have only one parameter, you can skip the parentheses as well:
const hello = val => "Hello " + val;

// Arrow Functions with No Parameters
// If there are no parameters, parentheses are required.
// With Arrow Function:
const hello = () => "Hello World!";

// You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:

// Example
// This will return undefined
const myFunction = (x, y) => { x * y };

// This will return undefined
// const myFunction = (x, y) => return x * y;

// This will return the expected result
const myFunction = (x, y) => { return x * y };

// Arrow Functions Are Not Declarations
// Arrow functions are always expressions and must be assigned to a variable.

// They cannot be used before they are defined.

// Example
hello(); // Error

const hello = () => "Hello";

// Arrow functions must be defined before they are used.

// Arrow Functions and the this Keyword
// Arrow functions do not have their own this value.

// They inherit this from the surrounding code.

// Example
const person = {
  name: "John",
  greet: function() {
    return this.name;
  }
};
console.log(person.greet()); // Output: John
// Using an arrow function as a method often gives unexpected results.
// Example
const person = {
  name: "John",
  greet: () => {
    return this.name;
  }
};
// In this case, this does not refer to the person object.