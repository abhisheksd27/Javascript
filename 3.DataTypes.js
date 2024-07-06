// JavaScript has several data types, which can be categorized into two main groups: primitive types and non-primitive types (also known as reference types).

// Primitive Data Types
// Primitive data types are the most basic data types in JavaScript and include the following:



// Number
// Represents both integer and floating-point numbers.
// Special values: Infinity, -Infinity, and NaN (Not-a-Number)

let age = 25; // integer
let price = 19.99; // floating-point
let infinityValue = Infinity;
let notANumber = NaN;


// String
// Represents a sequence of characters.
// Can be enclosed in single quotes ('), double quotes ("), or backticks (```)


let name = "John";
let greeting = 'Hello, world!';
let templateLiteral = `Hello, ${name}!`;


// Boolean
// Represents a logical entity and can have two values: true and false.

let isActive = true;
let isFinished = false;


// Undefined
// Represents a variable that has been declared but not assigned a value.

let unassigned;
console.log(unassigned); // undefined


// Null
// Represents a variable that has been assigned a value of null.

let empty = null;
console.log(empty); // null


// Symbol
// Represents a unique identifier that can be used as an object property key.

let symbol1 = Symbol("description");
let symbol2 = Symbol("description");

console.log(symbol1 === symbol2); // false

// BigInt (ES11)
// Represents integers with arbitrary precision.
// Created by appending n to the end of an integer or using the BigInt constructor.

let bigInt = 1234567890123456789012345678901234567890n;
let anotherBigInt = BigInt("1234567890123456789012345678901234567890");



// Non-Primitive Data Types (Reference Types)
// Non-primitive data types are objects, which are collections of properties and methods.

// Object
// Represents a collection of key-value pairs.
// Keys are strings (or Symbols) and values can be any data type.

let person = {
    name: "Alice",
    age: 30,
    isStudent: false
};


// Array
// A special type of object used to store ordered collections of values.
// Indexed by numbers starting from 0.

let numbers = [1, 2, 3, 4, 5];
let mixedArray = [1, "two", true, null];


// Function
// A special type of object that is callable.
// Can be defined using function declarations, expressions, or arrow functions.

function greet(name) {
    return `Hello, ${name}!`;
}

let greetExpression = function(name) {
    return `Hello, ${name}!`;
};

let greetArrow = (name) => `Hello, ${name}!`;


// Date
// Represents a single moment in time.
// Provides methods for parsing, formatting, and manipulating dates.

let now = new Date();

// RegExp
// Represents regular expressions used for pattern matching within strings.

let pattern = /hello/i;
let result = pattern.test("Hello, world!");









// Questions and Explanations


// What are the different data types in JavaScript?
// Answer: JavaScript has seven primitive data types:
// Undefined
// Null
// Boolean
// Number
// BigInt
// String
// Symbol
// Additionally, JavaScript has one non-primitive data type:
// Object (which includes Arrays, Functions, Dates, etc.)

// What is the difference between null and undefined?
// Answer:
// null is an assignment value that represents no value or an empty value. It is explicitly set by the programmer.
// undefined means a variable has been declared but has not yet been assigned a value.

// What are the differences between == and ===?
// Answer:
// == is the equality operator that performs type coercion before comparing. It checks for value equality.
// === is the strict equality operator that does not perform type coercion and checks for both value and type equality.

// What is the difference between let, const, and var in terms of scope and usage?
// Answer:
// var is function-scoped and can be re-declared and updated within its scope. Variables declared with var are hoisted and initialized with undefined.
// let is block-scoped and can be updated but not re-declared within the same scope. It is also hoisted but not initialized, 
// so accessing it before declaration results in a ReferenceError.
// const is block-scoped, cannot be updated or re-declared, and must be initialized at the time of declaration. It is also hoisted but not initialized.


// How does JavaScript handle floating-point numbers?
// Answer: JavaScript uses the double-precision 64-bit binary format (IEEE 754) for all its numeric values, including floating-point numbers. This can lead to precision issues with floating-point arithmetic, such as 0.1 + 0.2 resulting in 0.30000000000000004.

// What is the purpose of Symbol in JavaScript?
// Answer: Symbol is a primitive data type introduced in ES6. It is used to create unique identifiers for object properties. Symbols are unique and immutable, ensuring that no two symbols are the same, even if they have the same description.

// Explain the concept of NaN and how to check for it.
// Answer: NaN stands for "Not-a-Number" and is a special value representing the result of an invalid or undefined mathematical operation, such as 0 / 0. To check if a value is NaN, use the Number.isNaN() method, as NaN is the only value in JavaScript that is not equal to itself (NaN !== NaN).

// How can you convert a string to a number in JavaScript?
// Answer: You can convert a string to a number using several methods:
// Number('123') converts the string to a number.
// parseInt('123') converts the string to an integer.
// parseFloat('123.45') converts the string to a floating-point number.
// The unary plus operator (+'123') also converts a string to a number.

// What is the difference between an array and an object in JavaScript?
// Answer:
// An array is an ordered collection of elements, typically used to store lists of items. Arrays use numeric indices to access elements.
// An object is a collection of key-value pairs where the keys are strings (or Symbols) and the values can be any data type. Objects are used to store structured data.


// What are template literals and how are they different from regular strings?

// Answer: Template literals, introduced in ES6, are enclosed by backticks (`) instead of single or double quotes. They allow for multi-line strings, string interpolation using ${expression}, and embedded expressions. For example:

// let name = "John";
// let greeting = `Hello, ${name}!`;
// console.log(greeting); // Output: "Hello, John!"


// How do you check the type of a variable in JavaScript?
// Answer: You can check the type of a variable using the typeof operator. For example:

// console.log(typeof 42); // Output: "number"
// console.log(typeof 'Hello'); // Output: "string"
// console.log(typeof true); // Output: "boolean"
// console.log(typeof undefined); // Output: "undefined"
// console.log(typeof null); // Output: "object" (this is a known quirk in JavaScript)
// console.log(typeof {}); // Output: "object"
// console.log(typeof []); // Output: "object"
// console.log(typeof function(){}); // Output: "function"


// What are the implications of JavaScript being dynamically typed?
// Answer: JavaScript being dynamically typed means that variable types are determined at runtime and variables can hold values of any type without any type enforcement. This allows for flexibility but can also lead to type-related errors if not managed carefully.