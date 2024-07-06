
// In JavaScript, there are five primary types of scope: global, function, block, module, and lexical.
//  Each defines the visibility and lifespan of variables and functions within different parts of your code.

// 1. Global Scope
// Variables declared outside any function or block have global scope. They can be accessed from anywhere in the code.

var globalVar = "I am global";

function accessGlobal() {
    console.log(globalVar); // I am global
}

accessGlobal();
console.log(globalVar); // I am global


// 2. Function Scope
// Variables declared within a function are scoped to that function. They cannot be accessed outside the function

function myFunction() {
    var functionVar = "I am local to the function";
    console.log(functionVar); // I am local to the function
}

myFunction();
// console.log(functionVar); // ReferenceError: functionVar is not defined


// 3. Block Scope
// Variables declared with let or const within a block (enclosed by {}) are scoped to that block.


{
    let blockVar = "I am block scoped";
    console.log(blockVar); // I am block scoped
}

// console.log(blockVar); // ReferenceError: blockVar is not defined







// What is lexical (or static) scoping?

// Answer: Lexical scoping means that the scope of a variable is determined by its position in the source code.
//  Nested functions have access to variables declared in their outer scope. This scope chain is established at the time the code is written, not at runtime.
function outerFunction() {
    let outerVariable = 'I am from the outer scope!';

    function innerFunction() {
        console.log(outerVariable); // Accesses outerVariable from the outerFunction's scope
    }

    return innerFunction;
}

const myInnerFunction = outerFunction();
myInnerFunction(); // Output: "I am from the outer scope!"




// What is a closure in JavaScript?
// Answer: A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. 
// Closures allow inner functions to access variables from their outer function after the outer function has returned.

// Can you give an example of a closure?
// Answer:
function outerFunction() {
    let outerVar = 'I am outside!';
    
    function innerFunction() {
        console.log(outerVar); // Accesses outerVar from outerFunction's scope
    }
    
    return innerFunction;
}

const inner = outerFunction();
inner(); // Output: "I am outside!


// How does the this keyword behave in different scopes?
// Answer:
// Global Scope: In the global scope, this refers to the global object (window in browsers, global in Node.js).
// Function Scope: In a regular function, this refers to the global object in non-strict mode and undefined in strict mode.
// Object Method: When a function is called as a method of an object, this refers to the object.
// Arrow Functions: Arrow functions do not have their own this context; they inherit this from the enclosing scope.


// What are some common pitfalls related to scope in JavaScript?
// Answer: Common pitfalls include:
// Accidentally creating global variables by omitting var, let, or const.
// Using var in loops, leading to unexpected behavior due to function scoping.
// Incorrect usage of this in callbacks, leading to loss of context.
// Misunderstanding hoisting and accessing variables before declaration, especially with let and const.


// How can you avoid common scope-related issues in JavaScript?
// Answer:
// Always use let or const instead of var to avoid unintentional global variables and take advantage of block scope.
// Understand the behavior of this in different contexts and use arrow functions where appropriate to preserve this context.
// Be mindful of the TDZ when using let and const.
// Use IIFEs (Immediately Invoked Function Expressions) or block scoping to create local scopes and avoid polluting the global namespace.
