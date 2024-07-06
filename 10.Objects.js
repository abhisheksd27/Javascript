// Objects in JavaScript are collections of key-value pairs, where keys (also known as properties) are strings, and values can be any data type, including other objects. Objects are a fundamental aspect of JavaScript and are used to store and manipulate data in a structured way.

// Creating an Object
// Using Object Literals
// An object literal is a simple way to create an object using curly braces.

let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};
console.log(person.name); // Alice


// Using the Object Constructor
// You can also create an object using the Object constructor.

let person1 = new Object();
person.name = "Bob";
person.age = 30;
person.city = "San Francisco";
console.log(person.age); // 30


// Accessing Object Properties
// Dot Notation
// You can access object properties using dot notation.

console.log(person.name); // Bob


// Bracket Notation
// You can also access properties using bracket notation, which is useful when property names are dynamic or not valid identifiers.

console.log(person["age"]); // 30


// Adding and Modifying Properties

person.country = "USA"; // Adding a new property
person.age = 35; // Modifying an existing property
console.log(person); // { name: 'Bob', age: 35, city: 'San Francisco', country: 'USA' }


// Removing Properties
// You can remove a property from an object using the delete operator.

delete person.city;
console.log(person); // { name: 'Bob', age: 35, country: 'USA' }

// Methods
// Objects can have methods, which are functions stored as properties.

let person = {
    name: "Charlie",
    age: 28,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
person.greet(); // Hello, Charlie


// this Keyword
// Within a method, this refers to the object on which the method was called.

let person = {
    name: "David",
    age: 22,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
person.greet(); // Hello, David


// Iterating Over Object Properties
// You can iterate over an object's properties using a for...in loop.

let person = {
    name: "Eve",
    age: 26,
    city: "Los Angeles"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
// Output:
// name: Eve
// age: 26
// city: Los Angeles


// Object Methods
// JavaScript provides several built-in methods for objects.

Object.keys()
// Returns an array of the object's own property names.


console.log(Object.keys(person)); // [ 'name', 'age', 'city' ]
Object.values()


// Returns an array of the object's own property values.

console.log(Object.values(person)); // [ 'Eve', 26, 'Los Angeles' ]
Object.entries()


// Returns an array of the object's own key-value pairs.


console.log(Object.entries(person)); // [ [ 'name', 'Eve' ], [ 'age', 26 ], [ 'city', 'Los Angeles' ] ]


// Nested Objects
// Objects can contain other objects, allowing you to create complex data structures.

let company = {
    name: "TechCorp",
    location: {
        city: "San Francisco",
        state: "California"
    },
    employees: 500
};

console.log(company.location.city); // San Francisco