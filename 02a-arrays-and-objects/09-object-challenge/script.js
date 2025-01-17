// Object Challenge

// step 1
const library = [
  {
    title: 'The Book One',
    author: 'John Doe',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'The Second Book',
    author: 'Somebody 2',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'The third book',
    author: 'Somebody 3',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// step 2

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library[0].status.read);

// destructuring title of 1st book and rename the variable to firstBook

const { title } = library[0];
console.log(title);

const { title: firstBook } = library[0];
console.log(firstBook);

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);
