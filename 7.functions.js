// Functions in JavaScript are blocks of code designed to perform a particular task. 
// They are one of the fundamental building blocks of JavaScript programming. Here are various aspects of functions in JavaScript:


// 1. Function Declaration
// A function declaration defines a named function.
function greet(name) {
    return "Hello, " + name;
}

console.log(greet("Alice")); // Hello, Alice



// 2. Function Expression
// A function expression defines a function as part of a larger expression, typically an assignment.
const greet = function(name) {
    return "Hello, " + name;
};

console.log(greet("Bob")); // Hello, Bob


// 3. Arrow Functions
// Arrow functions provide a shorter syntax for writing function expressions. They also do not have their own this context.
const greet = (name) => {
    return "Hello, " + name;
};

console.log(greet("Charlie")); // Hello, Charlie

// When the function has only one statement, and the statement returns a value, you can omit the `return` keyword and the curly braces.
const greetShort = name => "Hello, " + name;

console.log(greetShort("Dave")); // Hello, Dave


// 4. Anonymous Functions
// Anonymous functions are functions without a name. They are often used in situations where functions are used as arguments to other functions.
setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);


// 5. Immediately Invoked Function Expression (IIFE)
// An IIFE is a function that is executed immediately after it is defined.
(function() {
    console.log("This runs immediately");
})();



// 6. Functions as First-Class Citizens
// In JavaScript, functions are first-class citizens. This means that functions can be treated like any other value: they can be assigned to variables, passed as arguments to other functions, and returned from functions.

function greet(name) {
    return "Hello, " + name;
}

function logGreeting(greetingFunction, name) {
    console.log(greetingFunction(name));
}

logGreeting(greet, "Eve"); // Hello, Eve


// 7. Default Parameters
// ES6 introduced default parameters, which allow you to initialize parameters with default values if no value is passed.
function greet(name = "Guest") {
    return "Hello, " + name;
}

console.log(greet()); // Hello, Guest
console.log(greet("Frank")); // Hello, Frank


// 8. Rest Parameters
// Rest parameters allow you to represent an indefinite number of arguments as an array.
function sum(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22


// 9. The arguments Object
// The arguments object is an array-like object accessible inside functions that contains the values of the arguments passed to that function.
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22




// 10. Function Scope
// Functions create their own scope. Variables defined inside a function are not accessible outside the function.
function greet() {
    let message = "Hello";
    console.log(message);
}

greet(); // Hello
// console.log(message); // Uncaught ReferenceError: message is not defined












// Questions and Explanations
// What are the different ways to declare a function in JavaScript?

// Answer:
// Function Declaration:

function myFunction() {
    // code
}
// Function Expression:
// javascript
// Copy code
const myFunction = function() {
    // code
};
// Arrow Function:
// javascript
// Copy code
const myFunction = () => {
    // code
};
// Method Definition (inside an object):
// javascript
// Copy code
const obj = {
    myMethod() {
        // code
    }
};
// Constructor Function:
// javascript
// Copy code
function MyConstructor() {
    // code
}
const instance = new MyConstructor();



// What is the difference between a function declaration and a function expression?

// Answer:
// Function Declaration:
// Hoisted to the top of its scope, meaning it can be called before it is defined.
// Example:
// javascript
// Copy code
myFunction(); // Works because of hoisting
function myFunction() {
    // code
}
// Function Expression:
// Not hoisted, meaning it cannot be called before it is defined.
// Example:
// javascript
// Copy code
myFunction(); // TypeError: myFunction is not a function
const myFunction = function() {
    // code
};




// Explain the concept of a closure in JavaScript.

// Answer: A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.
//  It allows inner functions to access variables from their outer scope.

function outerFunction() {
    let outerVariable = 'I am from the outer scope!';
    
    function innerFunction() {
        console.log(outerVariable);
    }
    
    return innerFunction;
}

const myInnerFunction = outerFunction();
myInnerFunction(); // Output: "I am from the outer scope!"






// What is the difference between call(), apply(), and bind()?

// Answer:
// call(): Invokes a function with a given this context and arguments provided individually.

function greet(name) {
    console.log(`Hello, ${name}`);
}
greet.call(null, 'John'); // Output: "Hello, John"


// apply(): Invokes a function with a given this context and arguments provided as an array.

function greet(name) {
    console.log(`Hello, ${name}`);
}
greet.apply(null, ['John']); // Output: "Hello, John"


// bind(): Creates a new function that, when called, has its this context set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

function greet(name) {
    console.log(`Hello, ${name}`);
}
const greetJohn = greet.bind(null, 'John');
greetJohn(); // Output: "Hello, John"



// What is the this keyword in JavaScript?

// Answer: The this keyword refers to the context in which a function is executed. Its value is determined by how the function is called.
// In the global scope, this refers to the global object (e.g., window in browsers).
// In a function, this refers to the global object in non-strict mode and undefined in strict mode.
// In an object method, this refers to the object.
// In an event handler, this refers to the element that received the event.
// Arrow functions do not have their own this context; they inherit this from the enclosing lexical context.





// What are higher-order functions?

// Answer: Higher-order functions are functions that can take other functions as arguments or return functions as their result. Examples include map, filter, and reduce.

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]

const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 15



// What is function hoisting in JavaScript?

// Answer: Function declarations are hoisted to the top of their containing scope, meaning they can be called before they are defined. Function expressions are not hoisted.

// Function declaration
myFunction(); // Works because of hoisting
function myFunction() {
    console.log('Hello');
}

// Function expression
myOtherFunction(); // TypeError: myOtherFunction is not a function
const myOtherFunction = function() {
    console.log('Hello');
};


// Explain the rest parameters in ES6.

// Answer: Rest parameters allow a function to accept an indefinite number of arguments as an array.

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5)); 