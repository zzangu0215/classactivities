const Shape = require('./shape');

// Use the "extends" keyword to inherit properties and methods from Shape
// (parent) class.
class Rectangle extends Shape {
  constructor(sideA, sideB) {
    // use sideA and sideB to calculate required arguments for the Shape
    // constructor (area and perimeter)
    const area = sideA * sideB;
    const perimeter = sideA * 2 + sideB * 2;

    // The "super" keyword references the parent (Shape) class. "super()" must
    // be called before "this" can be used in a child constructor.
    super(area, perimeter);

    // After calling "super", its okay to add properties unique to the child
    // (Rectangle) class.
    this.sideA = sideA;
    this.sideB = sideB;
  }
}

const rectangle = new Rectangle(12, 9);

// The ability to call printInfo of rectangle is possible because Rectangle
// inherits from Shape.
rectangle.printInfo();
