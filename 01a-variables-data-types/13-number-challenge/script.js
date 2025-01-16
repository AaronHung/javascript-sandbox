let x = Math.floor(Math.random() * 100 + 1);

let y = Math.floor(Math.random() * 50 + 1);

//console.log(x, y);

// sum
const sum = x + y;
SumOutput = `${x} + ${y} = ${sum}`;
console.log(SumOutput);

// difference
const difference = x - y;
differenceOutput = `${x} - ${y} = ${difference}`;
console.log(differenceOutput);

// product
const product = x * y;
productOutput = `${x} * ${y} = ${product}`;
console.log(productOutput);

// quotient
const quotient = x / y;
quotientOutput = `${x} / ${y} = ${quotient}`;
console.log(quotientOutput);

// remainder
const remainder = x % y;
remainderOutput = `${x} % ${y} = ${remainder}`;
console.log(remainderOutput);
