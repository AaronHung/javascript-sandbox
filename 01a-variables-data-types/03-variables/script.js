// Ways to declare a variable
// `var`, `let`, & `const`

let first_name = 'Aaron';
const last_name = 'Hung';

console.log(first_name, last_name);

let age = 30;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// first_name = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Re-assigning Variables
age = 31;

console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

// Type Error: Assignment to constant variable
//x = 200;

// Syntax Error: Missing initializer in const declaration
//const score1;

let score1;

// consts that are not primitive value - string, arrays, objects

const arr = [1, 2, 3];

// Type Error: Assignment to constant variable
// arr = [1, 2, 3, 4];

arr.push(4);
console.log(arr);

// object
const person = {
  name: 'John',
  age: 30,
};

// 不可以 change 變數本身 person，但是可以 change key的值，或增加key/value pair

person.name = 'Aaron';

console.log(person);

person.email = 'aaron@gmail.com';

console.log(person);

// 用 const 還是 let？ - You're gonna find this is preference
// 大部分的情況都是用const
// 很少會定義 const = 一個值 這樣的
// 大部分都是使用 const with object，以及array等
// 如果你知道你一定會改變裡面的值 如 score 之類（用 let）

// Declare multiple values at once
let a, b, camelCase;

const d = 10,
  e = 20,
  f = 30;

console.log(d);
console.log(a);
