function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;

  // Method that will simulate method overloading in JavaScript
  this.displayGrade = function (grade) {
    const input = grade;

    let response;
    // Return a letter grade if a number grade was passed
    // Ex. 95 => 'A'
    if (typeof input === 'number') {
      // TODO: Add logic here to return a single letter grade. e.g. If grade =
      // 86, then response should be "B";
      if (input < 60) {
        response = 'F';
      } else if (input < 70) {
        response = 'D';
      } else if (input < 80) {
        response = 'C';
      } else if (input < 90) {
        response = 'B';
      } else {
        response = 'A';
      }

      return response;
    }
    // Return a range if a letter grade was passed
    // Ex. 'A' => '90 - 100'
    if (typeof input === 'string') {
      // TODO: Add logic here to return range as a string
      

      return response;
    }

    // throw an error if the type of grade is not valid.
    throw new TypeError('Expected grade to be a string or number.');
  };
}

const John = new Student('John', 'Appleseed', '30');
console.log('John.displayGrade():', John.displayGrade(95));
console.log('John.displayGrade():', John.displayGrade('B'));
