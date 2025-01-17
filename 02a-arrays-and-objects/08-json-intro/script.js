const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
};

// Convert to JSON string
const str = JSON.stringify(post);

console.log(str);

// Parse JSON
// Convert back to object

const obj = JSON.parse(str);
console.log(obj);

// array of objects
const posts = {
  'post-1': {
    title: 'Post One',
    body: 'This is post one',
  },
  'post-2': {
    title: 'Post Two',
    body: 'This is post two',
  },
};

const str2 = JSON.stringify(posts);
console.log(str2);

const obj2 = JSON.parse(str2);
console.log(obj2);
