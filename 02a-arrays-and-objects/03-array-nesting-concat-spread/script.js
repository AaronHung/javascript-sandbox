const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];
const fruits2 = ['apple', 'pear', 'orange'];
const berries2 = ['strawberry', 'blueberry', 'rasberry'];

fruits2.push(berries2);

console.log(fruits2);

// Nesting Arrays

x = fruits2[3];

console.log(x);

x = fruits2[3][1];

console.log(x);

//
const allFruits = [fruits, berries];

x = allFruits;
console.log('All fruits:', x);

//

x = allFruits[1][0];

console.log(x);

// Contact Arrays - taking elements from one array and adding to another
// you can use + instead of concat

x = fruits.concat(berries);
console.log(x);

// Spread Operator (...)

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined);

console.log('arr1:', arr1);
console.log('...arr1:', ...arr1);

// we just want the items in an array to be in x, not the whole array
x = [fruits, berries];
console.log('concat operator ---', x, 'length:', x.length);

x = [...fruits, ...berries];
console.log('spread operator ---', x, 'length:', x.length);

// flat() - Flatten an array

const arr = [1, 2, [3, 4], 5, [6, 7], 8]; // a nested array
x = arr.flat();
console.log(x);
console.log(arr);

console.log('flatten array:', x);

// Static Methods on Array Object

x = Array.isArray(fruits);
console.log(x);

x = Array.isArray('12345');
console.log(x);

// `from` - Create an array from an array like value

x = Array.from('12345');
console.log('from: ', x);

// Array `of()`

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log('of --- ', x);
