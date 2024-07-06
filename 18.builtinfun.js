// Global Functions

// parseInt(string, radix) - Parses a string and returns an integer.
// The second argument (radix) is optional and specifies the base of the numeral system.
console.log(parseInt("10")); // 10
console.log(parseInt("10", 2)); // 2 (binary 10 is 2 in decimal)

// parseFloat(string) - Parses a string and returns a floating-point number.
console.log(parseFloat("3.14")); // 3.14

// isNaN(value) - Determines whether a value is NaN (Not-a-Number).
console.log(isNaN("hello")); // true (because "hello" is not a number)

// isFinite(value) - Determines whether a value is a finite number.
console.log(isFinite(10)); // true
console.log(isFinite(Infinity)); // false

// Number.isInteger(value) - Determines whether the provided value is an integer.
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false

// String Functions
const str = "Hello";

// charAt(index) - Returns the character at the specified index.
console.log(str.charAt(0)); // "H"

// charCodeAt(index) - Returns the Unicode of the character at the specified index.
console.log(str.charCodeAt(0)); // 72

// concat(...strings) - Joins two or more strings and returns a new string.
console.log(str.concat(" ", "World")); // "Hello World"

// includes(substring) - Determines whether a string contains the characters of a specified string.
console.log(str.includes("ell")); // true

// indexOf(substring) - Returns the position of the first occurrence of a specified value.
console.log(str.indexOf("e")); // 1

// slice(start, end) - Extracts a section of a string and returns it as a new string.
console.log(str.slice(1, 4)); // "ell"

// split(separator) - Splits a string into an array of substrings.
console.log(str.split("")); // ["H", "e", "l", "l", "o"]

// toLowerCase() - Converts a string to lowercase letters.
console.log(str.toLowerCase()); // "hello"

// toUpperCase() - Converts a string to uppercase letters.
console.log(str.toUpperCase()); // "HELLO"

// Array Functions
const arr = [1, 2, 3];

// push(...items) - Adds one or more elements to the end of an array.
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

// pop() - Removes the last element from an array.
arr.pop();
console.log(arr); // [1, 2, 3]

// shift() - Removes the first element from an array.
arr.shift();
console.log(arr); // [2, 3]

// unshift(...items) - Adds one or more elements to the beginning of an array.
arr.unshift(1);
console.log(arr); // [1, 2, 3]

const arr2 = [4, 5];

// concat(...arrays) - Merges two or more arrays into one.
const mergedArr = arr.concat(arr2);
console.log(mergedArr); // [1, 2, 3, 4, 5]

// slice(start, end) - Returns a shallow copy of a portion of an array.
const slicedArr = arr.slice(1, 3);
console.log(slicedArr); // [2, 3]

// splice(start, deleteCount, ...items) - Adds/removes items to/from an array.
arr.splice(1, 1, 10);
console.log(arr); // [1, 10, 3]

// forEach(callback) - Executes a provided function once for each array element.
arr.forEach(element => console.log(element)); // 1 10 3

// map(callback) - Creates a new array with the results of calling a provided function on every element.
const mappedArr = arr.map(x => x * 2);
console.log(mappedArr); // [2, 20, 6]

// filter(callback) - Creates a new array with all elements that pass the test implemented by the provided function.
const filteredArr = arr.filter(x => x > 2);
console.log(filteredArr); // [10, 3]

// reduce(callback, initialValue) - Executes a reducer function on each element and returns a single output value.
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 14

// Object Functions
const obj = { a: 1, b: 2, c: 3 };

// Object.keys(obj) - Returns an array of a given object's own enumerable property names.
console.log(Object.keys(obj)); // ["a", "b", "c"]

// Object.values(obj) - Returns an array of a given object's own enumerable property values.
console.log(Object.values(obj)); // [1, 2, 3]

// Object.entries(obj) - Returns an array of a given object's own enumerable property [key, value] pairs.
console.log(Object.entries(obj)); // [["a", 1], ["b", 2], ["c", 3]]

// Object.assign(target, ...sources) - Copies all enumerable own properties from one or more source objects to a target object.
const obj2 = { d: 4 };
const mergedObj = Object.assign(obj, obj2);
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }

// Object.freeze(obj) - Freezes an object, preventing new properties from being added and existing properties from being removed or modified.
Object.freeze(obj);
obj.a = 10; // This will not change the property
console.log(obj.a); // 1

// Function Functions

// call(thisArg, ...args) - Calls a function with a given this value and arguments.
function greet() {
  console.log(`Hello, ${this.name}`);
}
const person = { name: "Alice" };
greet.call(person); // Hello, Alice

// apply(thisArg, argsArray) - Calls a function with a given this value and arguments provided as an array.
greet.apply(person); // Hello, Alice

// bind(thisArg, ...args) - Creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments.
const boundGreet = greet.bind(person);
boundGreet(); // Hello, Alice

// JSON Functions

// JSON.parse(text) - Parses a JSON string and returns the corresponding JavaScript object.
const jsonString = '{"a": 1, "b": 2}';
const jsonObj = JSON.parse(jsonString);
console.log(jsonObj); // { a: 1, b: 2 }

// JSON.stringify(value) - Converts a JavaScript object or value to a JSON string.
const jsonStringified = JSON.stringify(jsonObj);
console.log(jsonStringified); // '{"a":1,"b":2}'
