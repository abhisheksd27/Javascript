// Object destructuring in JavaScript is a convenient way to extract values from objects and assign them to variables. 
// It allows you to "unpack" properties from objects into distinct variables, which can make your code more readable and concise.

// Basic Syntax
// The basic syntax for object destructuring involves enclosing the variable names you want to extract in curly braces {}.


const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

const { name, age, city } = person;

console.log(name); // Alice
console.log(age);  // 25
console.log(city); // New York


// Destructuring with Renaming
// You can rename the variables while destructuring by using a colon : to specify the new variable name.


const person1 = {
    name: "Alice",
    age: 25,
    city: "New York"
};

const { name: personName, age: personAge, city: personCity } = person;

console.log(personName); // Alice
console.log(personAge);  // 25
console.log(personCity); // New York


// Default Values
// You can provide default values for variables if the property does not exist in the object.

const person3 = {
    name: "Alice",
    age: 25
};

const { name1, age1, city1 = "Unknown" } = person;

console.log(city); // Unknown



