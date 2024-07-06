// Constructor functions in JavaScript are used to create objects with a set of initial properties and methods. They are typically used when you need to create multiple instances of similar objects. Here's how you define and use constructor functions:

// Defining a Constructor Function
// You define a constructor function using the function keyword, with the name typically capitalized to distinguish it from regular functions. Inside the constructor function, you use the this keyword to refer to the current instance of the object being created. Properties and methods are assigned to this.

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

// Creating Instances with new
// To create instances (objects) of the constructor function, use the new keyword followed by the constructor function's name. Arguments passed to new are forwarded to the constructor function parameters.


const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

person1.greet(); // Hello, my name is Alice and I am 25 years old.
person2.greet(); // Hello, my name is Bob and I am 30 years old.


// Understanding this in Constructor Functions
// In JavaScript, this in a constructor function refers to the newly created object instance. Each instance created with new Person(...) will have its own set of name, age, and greet properties/methods.

// Prototype in Constructor Functions
// To optimize memory usage and performance, methods should typically be added to the prototype of the constructor function instead of directly in the constructor. This way, all instances share the same instance of the method, rather than creating a new function object for each instance.
 

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const person3 = new Person("Alice", 25);
const person4 = new Person("Bob", 30);

person1.greet(); // Hello, my name is Alice and I am 25 years old.
person2.greet(); // Hello, my name is Bob and I am 30 years old.



// Benefits of Constructor Functions
// Encapsulation: Data (properties) and behavior (methods) are encapsulated within the object instance.
// Reusability: Constructor functions allow you to create multiple instances of similar objects easily.
// Prototype Inheritance: By using prototypes, you can create hierarchical relationships between objects.
// Example with Inheritance (ES6 Classes)
// With ES6, classes provide a more straightforward syntax for constructor functions and inheritance:

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Buddy", "Labrador");
dog.speak(); // Buddy barks.