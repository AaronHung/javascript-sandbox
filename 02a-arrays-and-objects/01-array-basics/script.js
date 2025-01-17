let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39];
const mixed = [12, 'Hello', true, null];

console.log(numbers);

// Array Constructor

const fruits = new Array('apple', 'mango', 'banana');
console.log(fruits);

// Accessing Elements
x = numbers[0];
console.log(x);

x = numbers[0] + numbers[3];
console.log(x);

x = `My favorite fruit is ${fruits[2]}`;
console.log(x);

// Array Length
x = numbers.length;
console.log(x, mixed.length);

// Changing value - change mango to grape
fruits[1] = 'grape';
x = fruits;
console.log(x);

// the `length` property is NOT readonly
fruits.length = 2;
x = fruits;
console.log(x);

fruits.length = 3;
x = fruits;
console.log(x);

fruits[2] = 'pear';
x = fruits;
console.log(x);

// hardcode to a new element
fruits[3] = 'pineapple';
x = fruits;
console.log(x);

// so you'll never know exactly the array's length
// when you'd append to the end, because it's changing
// what you could do is set the length to index + 1

fruits[fruits.length] = 'blueberry';
x = fruits;
console.log(x);

// or you can use push to do the same thing
