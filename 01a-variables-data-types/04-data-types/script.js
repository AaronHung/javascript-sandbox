// String
const firstName = 'Nina';

console.log(firstName);

const output = firstName;

console.log(output, typeof output);

// Number
const age = 30;

// SyntaxError: Identifier 'age' has already been declared
// const output = age;
// console.log(output, typeof output);

const output2 = age;
console.log(output2, typeof output2);

const temp = 98.9;
const output3 = temp;
console.log(output3, typeof output3);

// Boolean
const hasKids = true;

const output4 = hasKids;
console.log(output4, typeof output4);

// Null
const aptNumber = null;

const output5 = aptNumber;
console.log(output5, typeof output5);

// the above show null but also 'object' - which is reference datatype
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

// Undefined
let score;

const output6 = score;
console.log(output6, typeof output6);

// const's undefined
const score2 = undefined;

const output7 = score2;
console.log(output7, typeof output7);

// Symbol
const id = Symbol('id');

const output8 = id;
console.log(output8, typeof output8);

// BigInt
const big = 9007199254740991n;

const output9 = big;
console.log(output9, typeof output9);

// Reference Types

// array
const numbers = [1, 2, 3, 4];

const output10 = numbers;
console.log(output10, typeof output10);

// literal
const person = {
  name: 'Nina',
  age: 30,
};

const output11 = person;
console.log(output11, typeof output11);

// function
function sayHello() {
  console.log('hello');
}

const output12 = sayHello;
console.log(output12, typeof output12);

// reference - The typeof Operator
//  https://262.ecma-international.org/5.1/#sec-11.4.3
