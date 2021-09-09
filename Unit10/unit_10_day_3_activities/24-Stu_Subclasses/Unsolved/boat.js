const Vehicle = require('./vehicle');

class Boat extends Vehicle {
  constructor(id, type, crew) {
    // TODO: Add a comment describing the purpose of the following line.
    super(id, 0, 'bwom');

    // TODO: Add a comment describing the purpose of the following lines.
    this.type = type;
    this.crew = crew;
  }

  useHorn() {
    // TODO: Add a comment explaining what will be printed in the console and
    // where the value of "this.sound" is coming from.
    console.log(this.sound);
  }

  crewSoundOff() {
    this.crew.forEach((member) => {
      console.log(`${member} reporting for duty!`);
    });
  }
}

const boatPassengers = [
  'Blackbeard',
  'Mary Read',
  'Henry Morgan',
  'Madame Cheng',
];

const boat = new Boat(16, 'sailboat', boatPassengers);

console.log('---BOAT---');

// TODO: Add a comment to explain where boat.printInfo() comes from.
boat.printInfo();
boat.useHorn();
boat.crewSoundOff();
