let amount = '100';

console.log(amount, typeof amount);

// parseInt
amount = '100.2';
console.log(amount);
amount = parseInt(amount);
console.log(amount, typeof amount);

// parseFloat
amount = '100.2';
console.log(amount);
amount = parseFloat(amount);
console.log(amount, typeof amount);

// uniry + for type conversion
amount = '103';
console.log(amount);
amount = +amount; // convert string to a number
console.log(amount, typeof amount);

// number constructor
amount = '104';
console.log(amount);
amount = Number(amount);
console.log(amount, typeof amount);

//
// change number to string
//

// although it's a primitive type, in this case JS creates temporary wrapper
// of the associated type. so a primitive amount can have method to call
amount = amount.toString();
console.log(amount, typeof amount);

amount = String(amount);
console.log(amount, typeof amount);

// Change string to decimal
amount = 99.5;
amount = parseFloat(amount);
console.log(amount, typeof amount);

// Boolean
amount = 1;
amount = Boolean(amount);
console.log(amount, typeof amount);

// a string not a number, what happen to parse it to number
amount = 'hello';
console.log(amount);
amount = Number(amount);
console.log(amount, typeof amount);

//
amount = Math.sqrt(-1);
console.log('aaa', amount, typeof amount);

console.log(1 + NaN);
console.log(Math.sqrt(-1));
console.log(undefined + undefined);
console.log('foo' / 3);
