// A callback function in JavaScript is a function that is passed as an argument to another function and is executed after some operation has been completed. This is a key concept in asynchronous programming, where tasks are performed out of the main program flow.

// Basic Example of a Callback Function
// Here's a simple example of a callback function:

function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

// Output:
// Hello, Alice
// Goodbye!
// In this example, sayGoodbye is a callback function passed to the greet function. It gets executed after the greeting message is printed.



// Callback Functions with Anonymous Functions
// You can also pass an anonymous function as a callback:
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

greet("Bob", function() {
    console.log("Goodbye!");
});

// Output:
// Hello, Bob
// Goodbye!


// Asynchronous Callback Functions
// Callbacks are commonly used in asynchronous programming, such as with timers and network requests.

// Using setTimeout

function printMessage() {
    console.log("This message is delayed by 2 seconds.");
}

setTimeout(printMessage, 2000);

// Output (after 2 seconds):
// This message is delayed by 2 seconds.


// Using Callbacks with Network Requests (e.g., fetch)

function fetchData(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error("Error:", error));
}

fetchData("https://api.example.com/data", function(data) {
    console.log(data);
});


// Handling Errors with Callbacks
// When dealing with asynchronous operations, it's important to handle errors. You can pass multiple callbacks to handle success and error cases.

function fetchData(url, successCallback, errorCallback) {
    fetch(url)
        .then(response => response.json())
        .then(data => successCallback(data))
        .catch(error => errorCallback(error));
}

fetchData(
    "https://api.example.com/data",
    function(data) {
        console.log("Data received:", data);
    },
    function(error) {
        console.error("Error:", error);
    }
);

// Callback Hell
// Using multiple nested callbacks can lead to a situation known as "callback hell," which makes the code difficult to read and maintain.

doFirstThing(function(result1) {
    doSecondThing(result1, function(result2) {
        doThirdThing(result2, function(result3) {
            console.log(result3);
        });
    });
});


// Avoiding Callback Hell with Promises
// To avoid callback hell, you can use Promises, which provide a more readable and maintainable way to handle asynchronous operations.

doFirstThing()
    .then(result1 => doSecondThing(result1))
    .then(result2 => doThirdThing(result2))
    .then(result3 => console.log(result3))
    .catch(error => console.error(error));


















    // Why are callback functions important in JavaScript?
    // Answer: Callback functions are important because they enable asynchronous programming. 
    // They allow you to execute code after an asynchronous operation has completed, such as making API calls, reading files, or handling user input events.

    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(function(num) {
        return num * 2;
    });
    console.log(doubled); // Output: [2, 4, 6, 8, 10]




// What is the difference between synchronous and asynchronous callbacks?

// Answer:
// Synchronous Callbacks: These are executed immediately within the function they are passed to. They do not involve any asynchronous operations.

function synchronousFunction(callback) {
    console.log('Before callback');
    callback();
    console.log('After callback');
}

synchronousFunction(() => {
    console.log('Callback is called');
});
// Output:
// Before callback
// Callback is called
// After callback



// Asynchronous Callbacks: These are executed after the completion of an asynchronous operation, such as an API request, setTimeout, or file read.

function asynchronousFunction(callback) {
    console.log('Before asynchronous operation');
    setTimeout(() => {
        console.log('Asynchronous operation complete');
        callback();
    }, 1000);
}

asynchronousFunction(() => {
    console.log('Callback is called');
});
// Output:
// Before asynchronous operation
// Asynchronous operation complete (after 1 second)
// Callback is called


