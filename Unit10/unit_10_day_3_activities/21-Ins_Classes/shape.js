class Shape {
  // Just like constructor functions, classes can accept arguments
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  // Add printInfo to Shape.prototype
  printInfo() {
    console.log(`Area: ${this.area}`);
    console.log(`Perimeter: ${this.perimeter}`);
  }
}

// Create instances of Shape with "new" keyword passing arguments if necessary.
// (Not all classes/constructors will need arguments. This will  depend on your
// app.)
const shape = new Shape(25, 25);

shape.printInfo();

// The following is the same as the code above, but without implementing the
// Shape using ES6 class syntax.
// function Shape(area, perimeter) {
//   this.area = area;
//   this.perimeter = perimeter;
// }

// Shape.prototype.printInfo = function() {
//   console.log(`Area: ${this.area}`);
//     console.log(`Perimeter: ${this.perimeter}`);
// }

// const shape = new Shape(25, 25);

// shape.printInfo();
