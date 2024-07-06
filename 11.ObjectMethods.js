// Object Methods in JavaScript

// 1. Object.assign(target, ...sources)
// Copies all enumerable own properties from one or more source objects to a target object.
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };
const returnedTarget = Object.assign(target, source1, source2);
console.log(returnedTarget); // { a: 1, b: 2, c: 3 }

// 2. Object.create(proto, [propertiesObject])
// Creates a new object, using an existing object as the prototype of the newly created object.
const personProto = {
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
const me = Object.create(personProto);
me.name = "Alice";
me.greet(); // Hello, my name is Alice

// 3. Object.defineProperty(obj, prop, descriptor)
// Adds a named property described by a given descriptor to an object.
const obj = {};
Object.defineProperty(obj, 'newProp', {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: true
});
console.log(obj.newProp); // 42

// 4. Object.defineProperties(obj, props)
// Adds the named properties described by the given descriptors to an object.
Object.defineProperties(obj, {
  prop1: {
    value: 1,
    writable: true
  },
  prop2: {
    value: 2,
    writable: true
  }
});
console.log(obj.prop1); // 1
console.log(obj.prop2); // 2

// 5. Object.entries(obj)
// Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
const objEntries = { a: 1, b: 2, c: 3 };
console.log(Object.entries(objEntries)); // [["a", 1], ["b", 2], ["c", 3]]

// 6. Object.keys(obj)
// Returns an array of a given object's own enumerable property names.
console.log(Object.keys(objEntries)); // ["a", "b", "c"]

// 7. Object.values(obj)
// Returns an array of a given object's own enumerable property values.
console.log(Object.values(objEntries)); // [1, 2, 3]

// 8. Object.freeze(obj)
// Freezes an object: other code can't delete or change its properties.
const frozenObj = { a: 1 };
Object.freeze(frozenObj);
frozenObj.a = 2; // This will not change the value of 'a'
console.log(frozenObj.a); // 1

// 9. Object.isFrozen(obj)
// Determines if an object is frozen.
console.log(Object.isFrozen(frozenObj)); // true

// 10. Object.seal(obj)
// Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable.
const sealedObj = { b: 2 };
Object.seal(sealedObj);
sealedObj.b = 3; // This will change the value of 'b'
sealedObj.c = 4; // This will not add new property 'c'
console.log(sealedObj); // { b: 3 }

// 11. Object.isSealed(obj)
// Determines if an object is sealed.
console.log(Object.isSealed(sealedObj)); // true

// 12. Object.getPrototypeOf(obj)
// Returns the prototype (i.e., the value of the internal [[Prototype]] property) of the specified object.
const proto = Object.getPrototypeOf(me);
console.log(proto); // { greet: [Function: greet] }

// 13. Object.setPrototypeOf(obj, prototype)
// Sets the prototype (i.e., the internal [[Prototype]] property) of a specified object.
const newProto = {
  sayHi: function() {
    console.log(`Hi, I'm ${this.name}`);
  }
};
Object.setPrototypeOf(me, newProto);
me.sayHi(); // Hi, I'm Alice

// 14. Object.hasOwn(obj, prop)
// Determines whether the object has the specified property as its own property (as opposed to inheriting it).
console.log(Object.hasOwn(objEntries, 'a')); // true

// 15. Object.getOwnPropertyDescriptor(obj, prop)
// Returns a property descriptor for a named property on an object.
const descriptor = Object.getOwnPropertyDescriptor(objEntries, 'a');
console.log(descriptor); // { value: 1, writable: true, enumerable: true, configurable: true }

// 16. Object.getOwnPropertyDescriptors(obj)
// Returns an object containing all own property descriptors for an object.
const descriptors = Object.getOwnPropertyDescriptors(objEntries);
console.log(descriptors); 
// {
//   a: { value: 1, writable: true, enumerable: true, configurable: true },
//   b: { value: 2, writable: true, enumerable: true, configurable: true },
//   c: { value: 3, writable: true, enumerable: true, configurable: true }
// }

// 17. Object.getOwnPropertyNames(obj)
// Returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly upon a given object.
const objWithNonEnum = Object.create({}, {
  getFoo: {
    value: function() { return this.foo; },
    enumerable: false
  }
});
objWithNonEnum.foo = 1;
console.log(Object.getOwnPropertyNames(objWithNonEnum)); // ["getFoo", "foo"]

// 18. Object.preventExtensions(obj)
// Prevents any extensions of an object, meaning that no new properties can be added to it.
const extensibleObj = { a: 1 };
Object.preventExtensions(extensibleObj);
extensibleObj.b = 2; // This will not add a new property 'b'
console.log(extensibleObj.b); // undefined

// 19. Object.isExtensible(obj)
// Determines if an object is extensible (i.e., whether new properties can be added to it).
console.log(Object.isExtensible(extensibleObj)); // false

// 20. Object.fromEntries(iterable)
// Transforms a list of key-value pairs into an object.
const keyValuePairs = [['a', 1], ['b', 2]];
const objFromEntries = Object.fromEntries(keyValuePairs);
console.log(objFromEntries); // { a: 1, b: 2 }
