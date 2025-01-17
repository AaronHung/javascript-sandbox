const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName: firstName,
  lastName: lastName,
  age: age,
};

console.log(person.age);

// if the key/pair value are the same, you don't have to have value
// most javascript developer will do this

const person2 = {
  firstName,
  lastName,
  age,
};

console.log(person2.age);

// Destructuring Object
const todo = {
  id: 1,
  title: 'Take out trash',
};

// const id = todo.id;

// console.log(id);

// but you can also do: destructure properties from project

const { id, title } = todo;
console.log(id, title);

// Destructuring Arrays
const names = ['John', 'Doe'];
const [firstName1, lastName1] = names;
console.log(firstName1, lastName1);

const numbers = [1, 2, 3];
const [one, two, three] = numbers;
console.log(one, two, three);

// aaron -

const data = [
  [1, 'a'],
  [2, 'b'],
  [3, 'c'],
];

// destructuring (pulling variables out of objects)
const [number, letter] = data.reduce(
  ([nums, lets], [num, letChar]) => {
    nums.push(num);
    lets.push(letChar);
    return [nums, lets];
  },
  [[], []]
);

console.log(number); // [1,2,3]
console.log(letter); // ['a', 'b', 'c']

// another example

const todo2 = {
  id2: 1,
  title2: 'Take out trash',
  user2: {
    name3: 'Aaron',
    age3: 50,
  },
};

const {
  user2: { name3, age3 },
} = todo2;
console.log(name3, age3);

// rename

const todo4 = {
  id4: 1,
  title4: 'Take out trash',
  user4: {
    name4: 'Nina',
  },
};

const {
  id4: todoID, // renamed to todoID
  title4,
  user4: { name4 }, // with braces - destructuring
} = todo4;

console.log(todoID);

// destructure array
const numbers2 = [1, 2, 3];

const [first, second] = numbers2;

console.log(first, second);

// the rest operator

const number3 = [7, 6, 5, 4, 3, 2, 1];

const [a, b, ...rest] = number3;

console.log(a, b, rest);
