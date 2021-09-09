// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here, rest or spread?
// 
const newSongs = [...songs];
const newSongs2 = songs;

// TODO: What do you expect to be logged in the console?
console.log(newSongs[4]);
console.log(newSongs2[4]);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  // reduce() method executes a reducer function on each element of the array
  return array.reduce((a, b) => a + b, 5);
};
// TODO: What do you expect to be logged in the console?
// const array1 = [1, 2, 3];
// console.log(array1.reduce((a,b) => a+b));

console.log(addition(1, 2, 3));

// TODO: What is the term for the syntax that is being used as the parameter?
const additionAll = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// TODO: What do you expect to be logged in the console?
console.log(additionAll(1, 2, 3));

// TODO: What do you expect to be logged in the console?
console.log(additionAll(1, 2, 3, 4, 100));
