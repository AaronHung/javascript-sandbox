// Values are stored on the stack
const name = 'John';
const age = 30;

// Reference values are stored on the heap
const person = {
  name: 'Aaron',
  age: 50,
};

let newName = name;

console.log(name, newName);

newName = 'Johnathan';

console.log(name, newName);

// Both variables point to the same object
let newPerson = person;

console.log(person, newPerson);

//
newPerson.name = 'Brad';
newPerson.age = 101;

console.log(person, newPerson);
