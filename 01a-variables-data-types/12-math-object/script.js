let x;

console.log(Math);

// Square root
x = Math.sqrt(9);
console.log(x);

// Absolute value
x = Math.abs(-10);
console.log(x);

// Round
x = Math.round(3.65);
console.log(x);

x = Math.round(4.222);
console.log(x);
console.log(x.toFixed(3));

// Round up - Ceil
x = Math.ceil(3.65);
console.log('ceiling:', x);

// Round down - Floor
x = Math.floor(3.65);
console.log('floor:', x);

// Exponent
x = Math.pow(2, 3);
console.log(x);

// Minimum number
x = Math.min(4, 5, 10);
console.log(x);

// Maximum number
x = Math.max(4, 5, 10);
console.log(x);

// Get a random number/decimal between 0 and 1
x = Math.random();
console.log(x); // 0 - 1

// Get a random number between 1 and 100
x = Math.random() * 100;
console.log(x);

x = Math.random() * 10 + 1; // from 1.xxxx to 10.xxxx
console.log(x);

x = Math.floor(Math.random() * 10) + 1; // from 1 to 10
console.log(x);
