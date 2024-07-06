// In JavaScript, variables are used to store data values. You can declare a variable using three keywords: var, let, and const. Each of these has different characteristics and scopes.

// var
// Declares a variable.
// It is function-scoped, meaning it is accessible throughout the function in which it is declared.
// It can be re-declared and updated within its scope.
// Variables declared with var are hoisted to the top of their scope and initialized with undefined.

function exampleVar() {
    console.log(x); // undefined (due to hoisting)
    var x = 10;
    console.log(x); // 10

    if (true) {
        var x = 20; // re-declares and updates x in the same scope
        console.log(x); // 20
    }

    console.log(x); // 20 (x is updated globally within the function)
}

exampleVar();


// let
// Declares a block-scoped local variable.
// It cannot be re-declared within the same block scope, but it can be updated.
// Variables declared with let are hoisted to the top of their block but not initialized.

function exampleLet() {
    // console.log(y); // ReferenceError: Cannot access 'y' before initialization
    let y = 10;
    console.log(y); // 10

    if (true) {
        let y = 20; // different 'y' scoped to this block
        console.log(y); // 20
    }

    console.log(y); // 10 (outer 'y' is unchanged)
}

exampleLet();


// const
// Declares a block-scoped constant variable.
// It must be initialized at the time of declaration.
// It cannot be updated or re-declared within the same block scope.


function exampleConst() {
    const z = 10;
    console.log(z); // 10

    // z = 20; // TypeError: Assignment to constant variable.

    if (true) {
        const z = 20; // different 'z' scoped to this block
        console.log(z); // 20
    }

    console.log(z); // 10 (outer 'z' is unchanged)
}

exampleConst();





// Hoisting in JavaScript is a behavior in which variable and function declarations are moved to the top of their containing scope (either the global scope or the function scope) during the compile phase, before the code is executed. This means that you can use variables and functions before you actually declare them in your code.

// Here's a simple example to illustrate hoisting:

// Example 1: Variable Hoisting

console.log(myVar); // Output: undefined
var myVar = 5;
console.log(myVar); // Output: 5
// In this example, even though the variable myVar is declared after the first console.log, the declaration is "hoisted" to the top of the scope. However, the assignment (myVar = 5) is not hoisted, so the variable is undefined when first logged.

// Example 2: Function Hoisting

myFunction(); // Output: "Hello, world!"

function myFunction() {
    console.log("Hello, world!");
}
// In this example, the function myFunction is hoisted to the top of the scope, so it can be called before it is defined in the code.

// Important Points to Note:
// Only Declarations are Hoisted: Only the declarations are hoisted, not the initializations. For variables declared with var, the variable declaration is hoisted, but the assignment stays in place.
// let and const: Variables declared with let and const are also hoisted but not initialized. This means accessing them before the declaration results in a ReferenceError.
// Function Expressions: Function expressions are not hoisted. If you use a function expression, you cannot call it before you define it.
// Example 3: let and const Hoisting

console.log(myLetVar); // ReferenceError: Cannot access 'myLetVar' before initialization
let myLetVar = 10;

console.log(myConstVar); // ReferenceError: Cannot access 'myConstVar' before initialization
const myConstVar = 20;



// Example 4: Function Expression

// myFuncExp(); // TypeError: myFuncExp is not a function

var myFuncExp = function() {
    console.log("This is a function expression.");
};

myFuncExp(); // Output: "This is a function expression."
// In this example, myFuncExp is declared as a variable, and only the declaration is hoisted. At the time of the first call, myFuncExp is still undefined, so trying to call it results in a TypeError.










// Basic Questions
// What are the different ways to declare a variable in JavaScript?

// Answer: var, let, and const.
// What is the difference between var, let, and const?
// Answer:
// var is function-scoped and can be redeclared and updated.
// let is block-scoped and can be updated but not redeclared within the same scope.
// const is block-scoped and cannot be updated or redeclared. It must be initialized at the time of declaration.

// What is hoisting in JavaScript?
// Answer: Hoisting is JavaScript's behavior of moving declarations to the top of the current scope. 
// var declarations are hoisted to the top of their function scope, while let and const are hoisted to the top of their block scope but are not initialized.

// What is the temporal dead zone?
// The Temporal Dead Zone (TDZ) in JavaScript refers to the period of time during which a variable is declared but not yet initialized. This period occurs from the start of the block until the variable's declaration is encountered in the code. During the TDZ, any attempt to access the variable results in a ReferenceError.

// Variables declared with let and const have a TDZ. This concept is designed to prevent issues that can arise from using variables before they are declared, which can lead to unexpected behavior and bugs.





// Intermediate Questions
// Can you explain the concept of block scope?
// Answer: Block scope means that a variable declared within a block (a pair of curly braces {}) cannot be accessed outside of that block. 
// Variables declared with let and const are block-scoped.

// What happens when you try to access a variable declared with let or const before its declaration?
// Answer: It will result in a ReferenceError due to the temporal dead zone.

// Can you reassign a value to a const variable?
// Answer: No, you cannot reassign a new value to a const variable. However, if the const variable holds an object, you can modify the properties of that object.

// What are global variables and how are they created in JavaScript?
// Answer: Global variables are accessible from any part of the code. They can be created by declaring a variable outside any function or block, 
// or by omitting the var, let, or const keyword when declaring a variable within a function or block (which is not recommended due to potential conflicts and maintenance issues).






// Advanced Questions
// How does variable shadowing work in JavaScript?
// Answer: Variable shadowing occurs when a variable declared within a certain scope (e.g., a block or function) 
// has the same name as a variable declared in an outer scope. The inner variable "shadows" the outer variable, meaning the inner variable takes precedence within its scope.


// Can you explain the difference between undeclared, undefined, and null variables?
// Answer:
// Undeclared: A variable that has not been declared in the accessible scope.
// Undefined: A variable that has been declared but not assigned a value.
// Null: A variable that has been explicitly assigned the value null, representing no value or no object.

// How can you check if a variable is declared or not?
// Answer: You can use the typeof operator, which returns "undefined" for undeclared variables.

if (typeof myVar === 'undefined') {
    console.log('myVar is not declared');
}

// Explain the concept of variable scope chain in JavaScript.
// Answer: The scope chain in JavaScript refers to the hierarchy of scopes that are used to resolve variable names.
//  When a variable is referenced, the JavaScript engine first looks in the current scope, then in the outer scope, and so on, until it reaches the global scope.





// Practical Questions
// Write a function that demonstrates the difference between var, let, and const in terms of scope.

function variableScopeDemo() {
    if (true) {
        var varVariable = "I am a var";
        let letVariable = "I am a let";
        const constVariable = "I am a const";
    }

    console.log(varVariable); // "I am a var"
    console.log(letVariable); // ReferenceError
    console.log(constVariable); // ReferenceError
}

variableScopeDemo();









// What is the output of the following code and why?

console.log(x); // undefined
var x = 5;
console.log(x); // 5
// Answer: The first console.log(x) outputs undefined because of hoisting. The declaration var x is hoisted to the top, but the assignment x = 5 happens later. The second console.log(x) outputs 5 because x has been assigned the value 5.



// Explain how const works with objects and arrays. Can you modify an object or array declared with const?

// Answer: Yes, you can modify the properties of an object or the elements of an array declared with const. 
// However, you cannot reassign the object or array itself to a new value.

const obj = { a: 1 };
obj.a = 2; // This is allowed
obj = { b: 2 }; // TypeError: Assignment to constant variable.

const arr = [1, 2, 3];
arr.push(4); // This is allowed
arr = [4, 5, 6]; // TypeError: Assignment to constant variable.


