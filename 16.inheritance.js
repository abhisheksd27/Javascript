// Inheritance in JavaScript is a mechanism that allows one class (subclass or child class) to inherit properties and methods from another class (superclass or parent class). This enables the creation of hierarchical relationships and promotes code reuse. Inheritance can be implemented using the extends and super keywords in ES6 classes, or through prototype-based inheritance in ES5 and earlier.

// ES6 Class Inheritance
// Basic Example
// To create a subclass that inherits from a superclass, use the extends keyword. The super keyword is used to call the constructor and methods of the superclass.

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
        super(name); // Call the constructor of the superclass (Animal)
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog1 = new Dog("Buddy", "Labrador");
dog1.speak(); // Buddy barks.



// Calling Superclass Methods
// You can also call other methods of the superclass using the super keyword.

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
        super.speak(); // Call the speak method of the superclass
        console.log(`${this.name} barks.`);
    }
}

const dog2 = new Dog("Buddy", "Labrador");
dog2.speak();
// Buddy makes a noise.
// Buddy barks.






// Prototype-based Inheritance (ES5 and Earlier)
// Before ES6, inheritance in JavaScript was achieved using prototypes.

// Basic Example

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
};

function Dog(name, breed) {
    Animal.call(this, name); // Call the Animal constructor
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
    console.log(`${this.name} barks.`);
};

const dog3 = new Dog("Buddy", "Labrador");
dog3.speak(); // Buddy barks.


// Calling Superclass Methods
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
};

function Dog(name, breed) {
    Animal.call(this, name); // Call the Animal constructor
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
    Animal.prototype.speak.call(this); // Call the speak method of the superclass
    console.log(`${this.name} barks.`);
};

const dog = new Dog("Buddy", "Labrador");
dog.speak();
// Buddy makes a noise.
// Buddy barks.



// Inheritance with ES6 Classes: Advanced Examples
// Multiple Levels of Inheritance
// You can create multiple levels of inheritance by extending subclasses further.

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Mammal extends Animal {
    constructor(name, hasFur) {
        super(name);
        this.hasFur = hasFur;
    }

    showFur() {
        console.log(this.hasFur ? `${this.name} has fur.` : `${this.name} does not have fur.`);
    }
}

class Dog extends Mammal {
    constructor(name, breed) {
        super(name, true);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog4 = new Dog("Buddy", "Labrador");
dog4.speak(); // Buddy barks.
dog4.showFur(); // Buddy has fur.