let x;

// get Date object into d - instanciating
let d = new Date();
// let d = new Date('2022/10/16');

//
x = d.toString();
console.log('toString: ' + x);

x = d.getTime();
console.log('getTime: ' + x);

x = d.valueOf();
console.log('valueOf: ' + x);

x = d.getFullYear();
console.log('getFullYear: ' + x);

// caveat - month is zero-based
x = d.getMonth();
console.log('getMonth: ' + x);

x = d.getMonth() + 1;
console.log('getMonth + 1: ' + x);

x = d.getDate();
console.log('getDate: ' + x);

x = d.getHours();
console.log('getHours: ' + x);

x = d.getMinutes();
console.log('getMinutes: ' + x);

x = d.getSeconds();
console.log('getSeconds: ' + x);

x = d.getMilliseconds();
console.log('getMilliseconds: ' + x);

// compose a date/time string

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
console.log('date string: ' + x);

// an API for date - Intl.DateTimeFormat
// -- more powerful and locale sensitive way

// USA
x = Intl.DateTimeFormat('en-US').format(d);
console.log('Intl US date format: ' + x);

// UK
x = Intl.DateTimeFormat('en-GB').format(d);
console.log('Intl UK date format: ' + x);

// Taiwan - zh-TW
x = Intl.DateTimeFormat('zh-TW').format(d);
console.log('Intl TW date format: ' + x);

// Japan - ja-JP
x = Intl.DateTimeFormat('ja-JP').format(d);
console.log('Intl JP date format: ' + x);

// default
x = Intl.DateTimeFormat('default').format(d);
console.log('Intl default date format: ' + x);

// get Month, and in 'long' format
x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);
console.log('Intl default month format: ' + x);

// a shorter version to do it (instead of calling API)

x = d.toLocaleDateString('default', { month: 'short' });
console.log('toLocaleDateString date string: ' + x);

// customized all formats

x = d.toLocaleDateString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  //timeZone: 'America/Los_Angeles',
  //timeZone: 'America/New_York',
  timeZone: 'Asia/Taipei',
});
console.log('toLocaleDateString date string: ' + x);
