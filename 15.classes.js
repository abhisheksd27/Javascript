// In JavaScript, classes are a way to create objects and implement object-oriented programming (OOP) concepts.
//  They were introduced in ECMAScript 2015 (ES6) and provide a more convenient and clearer syntax to create and 
// manage objects compared to the traditional prototype-based inheritance.

// Basic Syntax
// A class in JavaScript is defined using the class keyword followed by the class name. Inside the class, you define a constructor method and other methods.


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Alice", 25);
person1.greet(); // Hello, my name is Alice and I am 25 years old.


// Constructor Method
// The constructor method is a special method for creating and initializing an object created with a class. Only one constructor method is allowed in a class. If you do not specify a constructor, JavaScript will add an empty constructor by default.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


// Methods
// Methods in classes are defined similarly to object methods but without the function keyword.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}


// Static Methods
// Static methods are defined on the class itself rather than on instances of the class. They are called directly on the class.

class MathUtils {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtils.add(5, 3)); // 8




// Inheritance
// Classes can inherit from other classes using the extends keyword. The super keyword is used to call the constructor and methods of the parent class.

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




// Getters and Setters
// Getters and setters allow you to define methods that are executed when a property is accessed or modified.

class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

const person = new Person("Alice");
console.log(person.name); // Alice
person.name = "Bob";
console.log(person.name); // Bob



// Private Fields
// Private fields are declared with a # prefix and can only be accessed and modified within the class itself.

class Person {
    #ssn;

    constructor(name, ssn) {
        this.name = name;
        this.#ssn = ssn;
    }

    getSSN() {
        return this.#ssn;
    }
}

const person = new Person("Alice", "123-45-6789");
console.log(person.getSSN()); // 123-45-6789
console.log(person.#ssn); // SyntaxError: Private field '#ssn' must be declared in an enclosing class