// let x;

// const arr = [28, 38, 44, 29, 109];

// console.log(arr);

// // push & pop
// x = arr.push(100);
// console.log(arr);

// x = arr.reverse();
// console.log(x);

let arr = [1, 2, 3, 4, 5];
console.log('original:   ', arr);

arr.push(6);
arr.unshift(0);

arr = arr.reverse();

console.log('transformed:', arr);

// Challenge 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

console.log('arr1: ', arr1);
console.log('arr2: ', arr2);

arr1.pop();
console.log('after pop: ', arr1);

let x;

// solution 1
x = arr1.concat(arr2).flat();
console.log('concat().flat()   ', x);

// solution 2
x = [...arr1, ...arr2];
console.log('spread operator ...', x);

// solution 3 - slice
const arr3 = arr1.slice(0, arr1.length).concat(arr2);

console.log('slicing: ', arr3);

// solution 4 - splice
const arr1a = [1, 2, 3, 4, 5];
const arr2a = [5, 6, 7, 8, 9, 10];
console.log(arr1a);
console.log(arr2a);
arr4 = [...arr1a, ...arr2a];
console.log('spread op: ', arr4);
arr4.splice(4, 1);
console.log('spliced:   ', arr4);
