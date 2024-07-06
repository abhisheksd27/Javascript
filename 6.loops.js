// JavaScript provides several types of loops that allow you to execute a block of code repeatedly, depending on a condition. Here are the main types of loops in JavaScript:

// for Loop
// The for loop is used when you know how many times you want to execute a statement or a block of statements.

for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Output: 0 1 2 3 4


// while Loop
// The while loop executes a block of code as long as the specified condition is true.

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// Output: 0 1 2 3 4


// do...while Loop
// The do...while loop is similar to the while loop, but it will execute the block of code once before checking the condition.

let i1 = 0;
do {
    console.log(i1);
    i1++;
} while (i1 < 5);
// Output: 0 1 2 3 4



// for...in Loop
// The for...in loop iterates over the properties of an object (including inherited properties).

let person = { name: "John", age: 30, city: "New York" };

for (let key in person) {
    console.log(key + ": " + person[key]);
}
// Output: 
// name: John
// age: 30
// city: New York



// for...of Loop
// The for...of loop iterates over the values of an iterable object (such as an array or a string).

let numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
    console.log(number);
}
// Output: 1 2 3 4 5


// break Statement
// The break statement is used to terminate the current loop.

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log(i);
}
// Output: 0 1 2 3 4


// continue Statement
// The continue statement is used to skip the current iteration of the loop and continue with the next iteration.

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Skip the rest of the loop when i is 5
    }
    console.log(i);
}
// Output: 0 1 2 3 4 6 7 8 9