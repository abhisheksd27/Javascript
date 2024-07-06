// Object prototyping is a core feature in JavaScript that allows you to extend and inherit properties and methods from other objects.
//  This is primarily done through the prototype property, which every JavaScript object has. 
// Understanding prototypes is essential for leveraging inheritance and creating more efficient, reusable code.

// Prototype Basics
// Every JavaScript object has a prototype, which is another object from which it inherits properties and methods. When you create a function in JavaScript, 
// it has a prototype property that points to an object. This prototype object is shared among all instances created using that constructor function.

// Creating and Using Prototypes
// Constructor Function with Prototype


function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

person1.greet(); // Hello, my name is Alice and I am 25 years old.
person2.greet(); // Hello, my name is Bob and I am 30 years old.



// In this example, greet is defined on the Person prototype, so it's shared across all instances of Person. 
// This saves memory since the method is not recreated for each instance.

// Prototype Chain
// When you try to access a property or method on an object, JavaScript first looks for it on the object itself. 
// If it doesn't find it, it looks up the prototype chain. This chain continues until it reaches the end (typically Object.prototype).


console.log(person1.hasOwnProperty('name')); // true
console.log(person1.hasOwnProperty('greet')); // false
console.log(person1.greet === person2.greet); // true


// Object.create()
// You can create a new object with a specific prototype using Object.create(). 
// This allows you to set up prototypes explicitly without using constructor functions.


const personPrototype = {
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

const person3 = Object.create(personPrototype);
person3.name = "Charlie";
person3.age = 35;

person3.greet(); // Hello, my name is Charlie and I am 35 years old.



// Inheritance with Prototypes
// You can create inheritance hierarchies using prototypes. One common pattern is to have one constructor function inherit from another.

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
};

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
    console.log(`${this.name} barks.`);
};

const dog = new Dog("Buddy", "Labrador");
dog.speak(); // Buddy barks.
// In this example, Dog inherits from Animal. We use Object.create to set Dog.prototype to an object created from Animal.prototype, 
// allowing Dog to inherit properties and methods from Animal.




