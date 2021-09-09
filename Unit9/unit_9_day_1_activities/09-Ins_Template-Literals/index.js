const arya = {
  first: "Arya",
  last: "Stark",
  origin: "Winterfell",
  allegiance: "House Stark",
};

const greeting = `My name is ${arya.first}!
I am loyal to ${arya.allegiance}.`;

// Without using template literal syntax
// const greeting =
//   "My name is " + arya.first + "!\nI am loyal to " + arya.allegiance + ".";

console.log(greeting); // prints
// My name is Arya!
// I am loyal to House Stark.
