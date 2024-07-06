// Conditional statements in JavaScript allow you to execute different blocks of code based on different conditions. Here are the main types of conditional statements:

// if Statement
// The if statement executes a block of code if a specified condition is true.

let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}


// if...else Statement
// The if...else statement executes one block of code if a condition is true, and another block if it is false.

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// else if Statement
// The else if statement specifies a new condition to test if the first condition is false.

let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// switch Statement
// The switch statement executes a block of code based on different cases.

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName); // Wednesday


// Ternary Operator
// The ternary operator is a shorthand for the if...else statement. It takes three operands and returns a value based on the condition.

let age1 = 18;
let canVote = (age1 >= 18) ? "Yes" : "No";
console.log(canVote); // Yes