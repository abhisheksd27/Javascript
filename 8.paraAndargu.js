// In JavaScript, parameters and arguments are terms used to describe the values passed to functions.

// Parameters
// Parameters are the names listed in the function definition. They act as placeholders for the values that will be passed to the function.

function greet(name) {
    console.log("Hello, " + name);
}
// In this example, name is a parameter.

// Arguments
// Arguments are the actual values passed to the function when it is invoked.

greet("Alice"); // Hello, Alice
// In this example, "Alice" is an argument.

// Default Parameters
// ES6 introduced default parameters, which allow you to specify default values for parameters. If an argument is not provided for a parameter with a default value, the parameter will take the default value.

function greet(name = "Guest") {
    console.log("Hello, " + name);
}

greet(); // Hello, Guest
greet("Bob"); // Hello, Bob



// Rest Parameters
// Rest parameters allow a function to accept an indefinite number of arguments as an array. They are indicated by three dots (...) before the parameter name.

function sum(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22



// The arguments Object
// The arguments object is an array-like object available within all non-arrow functions. It contains the values of the arguments passed to that function.

function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22


// Example: Combining Parameters and Arguments

function introduce(firstName, lastName = "Doe") {
    console.log("Hello, my name is " + firstName + " " + lastName);
}

introduce("John"); // Hello, my name is John Doe
introduce("John", "Smith"); // Hello, my name is John Smith