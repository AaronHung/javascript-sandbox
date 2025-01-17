let x;

const todo2 = {};

todo2.id = 1;

x = todo2;

console.log(x);

// using object constructor

const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;

console.log(x);

// create our own object constructor
// const todo = new Todo();

// spread operator

const person = {
  address: {
    coords: {
      lat: 42.9385,
      lng: -71.9332,
    },
  },
};

x = person.address.coords.lat;
console.log(x);

// using spread operator is similar to using arrays

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { obj1, obj2 };

x = obj3;
console.log(x);

const obj4 = { ...obj1, obj2 }; // {a:1, b: 2, {c: 3, d:4}}

x = obj4;
console.log(x);

const obj5 = { ...obj1, ...obj2 };

x = obj5;
console.log(x);

// Assign (before spread operator defined in ES2015, you can use Object.assign())

const obj6 = Object.assign({});

x = obj6;
console.log(x);

const obj7 = Object.assign({}, obj1, obj2);

x = obj7;
console.log(x);

/*
a lot of time, we're going to be dealing with arrays of objects.
anything, any resources in the database like or from the API like 
ToDos or users or blog posts, you're usually going to deal with
arrays of objects for those resources. 
*/

// let's say we have an array of objects called todos

const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pick up kids from school' },
  { id: 3, name: 'Take out trash' },
];

x = todos;
console.log(x);

x = todos[0].name;
console.log(x);

// Object Keys

x = Object.keys(todo);
console.log(x); // ['id', 'name', 'completed']

// the length of object - how many properties it have in it.
//
// we can't use length on that...if we do that, it's going to
// say `undefined`

x = todo.length;
console.log(x); // undefined

/*
So the way that we can get it is by first getting the keys and then
getting the length of that.
*/
x = Object.keys(todo);

x = Object.keys(todo).length;
console.log(x);

x = Object.keys(todos).length;
console.log(x);

/*
next thing is, if you want to get an array with all the values,
just the values, we can use Object.values()
*/

x = Object.values(todo);
console.log(x);

x = Object.entries(todo);
console.log(x);

/*
next is, it has own properties, which will give you a Boolean indicating
the object has specific properties
*/

x = todo.hasOwnProperty();
console.log(x);

x = todo.hasOwnProperty('id');
console.log(x);

x = todo.hasOwnProperty('completed');
console.log(x);

x = todo.hasOwnProperty('name');
console.log(x);

x = todo.hasOwnProperty('whatever');
console.log(x);
