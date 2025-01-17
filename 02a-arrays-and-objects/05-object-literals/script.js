const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main St',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

x = person.name;
console.log(x);

// x = person[age]; // ReferenceError: age is not defined
x = person['age'];
console.log(x);

x = person.address.state;
console.log(x);

x = person.hobbies;
console.log(x);

person.name = 'Aaron Doe';
console.log(person.name);

person['isAdmin'] = false;
console.log(person['isAdmin']);

// delete

delete person.age;
console.log(x);

console.log(x.age);

// add property

person.hasChildren = true;

x = person;
console.log(x);

// function

person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

// below is not recomended
const person2 = {
  'first name': 'Aaron',
};

x = person2['first name'];

console.log(x);
