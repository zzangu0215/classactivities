// 1. Using arrays
const songsArr = ['Bad Guy', 'Old Town Road', '7 Rings'];

for (const value of songsArr) {
  console.log(value);
}
/* Output:
  Bad Guy
  The Wheels on the Bus
  Friday
*/

console.log('\n================================================\n');

// 2. Using multidimensional arrays
const moreSongs = [
  ['Bad Guy', 1],
  ['The Wheels on the Bus', 2],
  ['Friday', 3],
];

for (const item of moreSongs) {
  console.log(`${item[0]}'s chart position is ${item[1]}`);
}

/* Output:
  Bad Guy's chart position is 1
  The Wheels on the Bus's chart position is 2
  Friday's chart position is 3
*/
