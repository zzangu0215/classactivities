// TODO: Fix the `greet` function so that it returns the correct values.
function Student(name, gradeYear) {
  const student = {
    name,
    gradeYear,
  };

  return {
    greet() {
      console.log(this);
      console.log(
        `My name is ${student.name} and I am in ${student.gradeYear} grade`
      );
    },
  };
}

const newStudent = Student("Dominique", "11th");
newStudent.greet();

module.exports = Student;
