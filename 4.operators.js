// JavaScript provides a wide range of operators for performing operations on variables and values. These operators can be categorized into several types:

// 1. Arithmetic Operators
// These operators perform basic arithmetic operations.

// Addition (+)
let sum = 5 + 3; // 8


// Subtraction (-)
let difference = 5 - 3; // 2


// Multiplication (*)
let product = 5 * 3; // 15


// Division (/)
let quotient = 5 / 3; // 1.6666666666666667


// Modulus (%): Returns the remainder of a division.
let remainder = 5 % 3; // 2


// Exponentiation (**): Raises the first operand to the power of the second operand.
let power = 5 ** 3; // 125


// Increment (++): Increases a variable by one.
let a = 5;
a++; // 6


// Decrement (--): Decreases a variable by one.
let b = 5;
b--; // 4


// Assignment Operators
// These operators assign values to variables.

// Assignment (=)
let x = 10;

// Addition assignment (+=)
x += 5; // x = x + 5; x is now 15\

// Subtraction assignment (-=)
x -= 3; // x = x - 3; x is now 12


// Multiplication assignment (*=)
x *= 2; // x = x * 2; x is now 24


// Division assignment (/=)
x /= 4; // x = x / 4; x is now 6


// Modulus assignment (%=)
x %= 5; // x = x % 5; x is now 1

// Exponentiation assignment (**=)
x **= 3; // x = x ** 3; x is now 1


// 3. Comparison Operators
// These operators compare two values and return a boolean result.

// Equal (==)
5 == '5'; // true

// Not equal (!=)
5 != '5'; // false

// Strict equal (===)
5 === '5'; // false

// Strict not equal (!==)
5 !== '5'; // true

// Greater than (>)
5 > 3; // true

// Greater than or equal (>=)
5 >= 5; // true

// Less than (<)
5 < 3; // false

// Less than or equal (<=)
5 <= 5; // true



// 4. Logical Operators
// These operators are used to combine multiple boolean expressions.

// Logical AND (&&)
true && false; // false

// Logical OR (||)
true || false; // true

// Logical NOT (!)
!true; // false



// 5. Bitwise Operators
// These operators perform bitwise operations on integers.

// AND (&)
5 & 1; // 1 (0101 & 0001)


// OR (|)
5 | 1; // 5 (0101 | 0001)

// XOR (^)
5 ^ 1; // 4 (0101 ^ 0001)

// NOT (~)
~5; // -6 (NOT 0101 is 1010 which is -6 in two's complement)


// Left shift (<<)
5 << 1; // 10 (0101 << 1 is 1010)


// Right shift (>>)
5 >> 1; // 2 (0101 >> 1 is 0010)


// Zero-fill right shift (>>>)
5 >>> 1; // 2 (0101 >>> 1 is 0010)


// 6. String Operators
// The addition operator (+) can also be used to concatenate strings.
let greeting = "Hello, " + "world!"; // "Hello, world!"

// 7. Conditional (Ternary) Operator
// This operator is a shorthand for an if-else statement and takes three operands.
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No"; // "Yes"


// 8. Type Operators
// These operators are used to check the type of a variable or to convert a value to a different type.

typeof
typeof 5; // "number"
typeof 'hello'; // "string"


// instanceof
let date = new Date();
date instanceof Date; // true


// 9. Comma Operator
// This operator evaluates each of its operands (from left to right) and returns the value of the last operand.
let a1 = 1, b1 = 2, c = 3;
(a1++, b1++, c++); // 4 (c is incremented last, so its value is returned)
