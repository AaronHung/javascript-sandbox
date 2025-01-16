let myString = 'javascript';
console.log(myString);

// console.log(myString.__proto__);

// console.log(myString[0]);

// console.log(myString.toUpperCase());

// use slice
let myNewString = myString[0].toUpperCase() + myString.slice(1);

console.log(myNewString);

// use replace
let myNewString2 = myNewString.replace('j', 'J');
console.log(myNewString2);

// use substring
let myNewString3 = myString[0].toUpperCase() + myString.substring(1);
console.log(myNewString3);

// use charAt()
let myNewString4 = myString.charAt(0).toUpperCase() + myString.slice(1);
console.log(myNewString4);

// use `${}`
const myNewString5 = `${myString[0].toUpperCase()}${myString.slice(1)}`;
console.log(myNewString5);
