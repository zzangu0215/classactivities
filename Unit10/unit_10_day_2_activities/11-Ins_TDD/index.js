const Arithmetic = require('./arithmetic');

// Because each method of Arithmetic returns a new Arithmetic object, it is
// possible to chain each method call.
const value = new Arithmetic(4)
  .plus(8)
  .plus(15)
  .minus(16)
  .minus(23)
  .plus(42)
  .plus(108)
  .value();

console.log(value);
