let x;

const arr = [28, 38, 44, 29, 109];

console.log(arr);

// push & pop
arr.push(100);
console.log(arr);

arr.pop();
console.log(arr);

// unshift & shift (beginning) versus push & pop (endding)
arr.unshift(99);
console.log(arr);

arr.shift();
console.log(arr);

// reverse
arr.reverse();
console.log(arr);

// include (to check whether an element is there)
x = arr.includes(445);
console.log(x);

x = arr.includes(109);
console.log(x);

// indexOf - give you the index of specific value
x = arr.indexOf(44);
console.log(x);

x = arr.indexOf(1000);
console.log(x);

// slice and splice
console.log('slicing ---');
let sliceArr = arr.slice(1, 4);

console.log(sliceArr); //[1, 2, 3]
console.log(arr, 'array unchanged'); //[0, 1, 2, 3, 4] (original array)

sliceArr = arr.slice(1); // 1 till the end
console.log(sliceArr, 'till the end');
console.log(arr, 'array unchanged');

// splice(start, deleteCount, item1, item2, ...)
// splice to remove

let arr0 = [0, 1, 2, 3, 4];
console.log('original', arr0);
x = arr0.splice(1, 4);
console.log('original', arr0, 'spliced x', x);

// delete one element with splice

console.log('orig: ', x);
arr0 = x;
x = arr0.splice(2, 1);
console.log(arr0, 'spliced x ---', x);

let arr2 = [0, 1, 2, 3, 4];
let removed = arr2.splice(1, 2);

console.log(removed); //[1, 2]
console.log(arr2); //[0, 3, 4]

// splice to insert

let arr3 = [0, 1, 4];
arr3.splice(2, 0, 2, 3);
console.log(arr3);

// splice to replace element

let arr4 = [0, 1, 2, 3, 4];
arr4.splice(1, 2, 'a', 'b', 'c');
console.log(arr4); // [0, "a", "b", "c", 4]

// to chain methods
let arr5 = [0, 1, 2, 3, 4, 5];
console.log('orig:: ', arr5);

x = arr5.splice(1, 4).reverse();
console.log(x);

let arr6 = [0, 1, 2, 3, 4, 5];

// charAt chained after reverse() does not work, need a string

x = arr6.splice(1, 4).reverse().toString().charAt(0);
console.log(x);
