// Do not change the value's bound to any of the variables
var a = '50';
var b = 50;
var c = 100;
var d = c % b;
var e = c / 2;

var expression1 = b === e;
var expression2 = e < d;

// TODO: Use comparison operators so all expressions below log to the console as
// true
console.log(a !== b);
console.log(b === e);
console.log(c > b);
console.log(d === 0);

// TODO: Use logical operators so all expressions below log to the console as
// true
console.log(expression1 || expression2);
console.log(!(expression1 && expression2));
