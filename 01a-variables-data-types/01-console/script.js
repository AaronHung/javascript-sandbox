console.log('Hello, World!');

console.log(100);

console.log(20, 'Hello', true);

const x = 100;
console.log(x);

// VSCode Extention - ES6 Code Snippet
// clg for console.log(object);

// error message
console.error('Error message by Aaron');
console.error('Alert');

console.warn('Warning by aaron');

// table (object), key, value
console.table({ name: 'Aaron', age: 25 });

console.table({ name: 'Aaron', age: 25 }, ['name', 'age']);

console.table({ name: 'Aaron', email: 'hung.aaron@gmail.com' });

// group
console.group('Group 1');
console.log('Hello');
console.log('World');
console.error('An error');
console.warn('a Warning');
console.groupEnd('Group 1');

// add CSS style to your console log
const styles = 'padding: 10px; background-color: lightsalmon; color: green';

console.log('%cHello World', styles);
