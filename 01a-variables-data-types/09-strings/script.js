let x;

const name = 'John';
const age = 30;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';
console.log(x);

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;

console.log(x);

// String properties and methods
const s = 'Hello World';

x = typeof x;

console.log(x);

x = s.length;

console.log(x);

// creating string object
const s1 = new String('Hello World');

console.log(s1);

x = typeof s1;
console.log(x);

// Access value by key

x = s1[0];
console.log(x);

// access the prototype

x = s.__proto__;
console.log(x);

//
const s2 = new String('Hello World2');
console.log(s2);

// look at properties
x = s2.__proto__;

x = s2.toUpperCase();
console.log(x);

x = s2.toLowerCase();
console.log(x);

x = s2.charAt(0);
console.log(x);

x = s.indexOf('l');
console.log(x);

// substring
x = s.substring(0, 4);
console.log(x);

x = s.substring(7);
console.log(x);

// slice
x = s.slice(0, 4);
console.log(x);

x = s.slice(-3);
console.log(x);

x = s.slice(-11, -6);
console.log(x);

// split
x = s.split(' ');
console.log(x);

// trim
x = '     Hello World     ';
console.log(x);

x = x.trim();
console.log(x);

// replace
x = s.replace('World', 'Universe');
console.log(x);

// include
x = s.includes('World');
console.log(x);

x = s.includes('Hell');
console.log(x);

// return primitive of that variable
x = s.valueOf();
console.log(x);

// return primitive of that variable
x = s.toString();
console.log(x);

// split

x = s.split();
console.log(x);

x = s.split(' ');
console.log(x);

x = s.split('');
console.log(x);
