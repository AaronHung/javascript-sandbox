const num = 5;
console.log(num);

console.log(typeof num);

// Number object
const num2 = new Number(5);
console.log(typeof num2);

x = num.toString();
console.log(typeof x);

x = num.toString().length;
console.log(num, x, typeof x);

// toFixed
console.log('object with toFixed');
x = num.toFixed(2);
console.log(x, typeof x);

const digit = 123.456;

console.log(digit.toFixed(0), typeof digit.toFixed(0));
console.log(digit.toFixed(2));
console.log(digit.toFixed(5));

// toFixed's output is a string
// conver string back to float
console.log('converting string back to float ---');

const fixedNum = parseFloat(digit.toFixed(2));
console.log(fixedNum, typeof fixedNum);

// rounding for toFixed
const nObj = new Number(123.456789);
x = nObj.toFixed(2);
console.log(
  '## Aaron Testing on Rounding -- ',
  nObj.valueOf(),
  typeof nObj.valueOf(),
  x,
  typeof x
);

// Precision compared with toFixed
const num3 = 123.456789;

console.log('* Testing on Precision:');
console.log(num3.toFixed(2)); // "123.46" -- 2 decimal digits
console.log(num3.toPrecision(4)); // "123.5" -- 4 total digits

console.log(num3.toFixed(0)); // 123
console.log(num3.toPrecision(2)); // 1.23+2

// toPrecision for decimal digits
console.log('toPrecision for decimal digits ---');
const num4 = 0.004567;
console.log(num4.toFixed(2)); // 0.00
console.log(num4.toPrecision(2)); // 0.0046

// aaron - 3 ways to convert string back to number
console.log('## convert string back to number:');
const sciStr = (123456).toPrecision(3); // "1.23e+5"
console.log(Number(sciStr)); // 123000
console.log(parseFloat(sciStr)); // 123000
console.log(+sciStr); // 123000

// toExponential
console.log('toExponential ===');

let numX = 123.456;
console.log(numX);
console.log(numX.toFixed(2)); // 123.46
console.log(numX.toPrecision(4)); // 123.5
console.log(numX.toExponential(2)); // 1.23e+2

numX = 427;
console.log(numX);
console.log(numX.toFixed(2)); // 427.00
console.log(numX.toPrecision(2)); // 4.3e+2
console.log(numX.toExponential(2)); //4.27e+2

/// very small number
numX = 0.004567;
console.log(numX);
console.log(numX.toFixed(2)); // 0.00
console.log(numX.toPrecision(2)); // 0.0046
console.log(numX.toExponential(2)); // 4.573-3

/// very big number
numX = 123456789;
console.log(numX);
console.log(numX.toFixed(2)); // 123456789.00
console.log(numX.toPrecision(4)); // 1.235e+8
console.log(numX.toExponential(2)); // 1.23e+8

// Aaron teting on Object with valueof
console.log('Aaron testing on Object with valueof');
const numObj = new Number(123);
console.log(numObj);
console.log(numObj.valueOf());

// locale string

x = num.toLocaleString('en-US');
console.log(x, typeof x);
console.log(num.__proto__);

x = num.valueOf();
console.log(x, typeof x);

// Biggest and Smallest Number

x = Number.MAX_VALUE;
console.log(x);
x = Number.MIN_VALUE;
console.log(x);
