// Objects can store more than primitive data types like strings, booleans and
// numbers
var planet = {
  name: 'Earth',
  age: '4.543 billion years',
  moons: 1,
  isPopulated: true,
  population: '7.594 billion',
  // Objects can store arrays in a key-value pair
  neighboringPlanets: ['Mars', 'Venus'],
  // Objects can also store methods
  tellFunFact: function () {
    console.log(
      'The earth is the only planet in our solar system not named after a Roman god or goddess.'
    );
  },
  showWarning: function () {
    console.log(
      "Space junk falls into Earth's atmosphere at a rate of about one a day."
    );
  },
};

// Use the name of the object, the key and the index to access a value in an
// array.

// Logs "Mars" using dot notation
console.log(planet.neighboringPlanets[0]);

// Logs "Mars" using bracket notation
console.log(planet['neighboringPlanets'][0]);

// Use the name of the object and the key to call a method.
// Don't forget the ()!
planet.tellFunFact();
planet.showWarning();
