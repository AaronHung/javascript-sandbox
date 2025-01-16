let d;

d = new Date();

console.log(typeof d, '=> ', d);

d = d.toString();
console.log(typeof d, '=> ', d);

// specify date / time
// caveat - date is 0-base, starting from 0
d = new Date(2025, 1, 16); // this is February 16, 2025
console.log(d);

d = new Date(2025, 1, 16, 10, 33, 30, 500);
console.log(d);

// pass in strings
d = new Date('2025-01-16');
console.log(d);

d = new Date('2025-01-16T14:44');

d = new Date('2025-01-16T15:55:55.500');
console.log(d);

// another format
d = new Date('08/10/2025 12:30:59');
console.log(d);

// If put year first, then due to time zone - off by one day
d = new Date('2022-07-10');
console.log(d);

d = new Date('07/10/2022');
console.log(d);

// stackoverflow explains why this happens:
// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

// Timestamps

d = Date.now();
console.log(d);

// to get a timestamp of a certain date and time

d = new Date('07-10-2022');
d = d.getTime();
console.log(d);

d = new Date('07-10-2022 12:30:59');
d = d.getTime();
console.log(d);

// using valueOf

d = new Date('07-10-2022 12:30:59');
d = d.valueOf();
console.log(d);

// with getTime
console.log('==> getTime');
d = new Date('07-10-2022 12:30:59');
d = d.getTime();
d = d.valueOf();
console.log(d);

// create Date object from timestamp
// d = new Date(1656984800000);

d = new Date(1666962049745);

console.log(d);

// convert from milliseconds to seconds
d = Math.floor(Date.now() / 1000);

d = Date.now();
console.log(d);

d = Date.now() / 1000;
console.log(d);

d = Math.floor(Date.now() / 1000);
console.log(d);

d = new Date(d);
console.log(d);

// another timestamp in seconds
d = Math.floor(Date.now() / 1000);
console.log(d);
