var student = document.getElementById('student-names');
var grade = document.getElementById('grades');
var comment = document.getElementById('msg');
var saveButton = document.getElementById('save');
var savedName = document.getElementById('saved-name');

saveButton.addEventListener('click', function (event) {
  event.preventDefault();

  // store the user input together as an object
  var studentGrade = {
    student: student.value,
    grade: grade.value,
    comment: comment.value.trim(),
  };

  // Cannot store an object directly using localStorage. (The value is saved as
  // "[object Object]") Use the JSON.stringify(object) method to convert the object
  // into a string.
  localStorage.setItem('studentGrade', JSON.stringify(studentGrade));
  renderMessage();
});

function renderMessage() {
  // Convert a JSON string back into an object with JSON.parse(string)
  var lastGrade = JSON.parse(localStorage.getItem('studentGrade'));
  if (lastGrade !== null) {
    document.querySelector('.message').textContent =
      lastGrade.student + ' received a/an ' + lastGrade.grade;
  }
}

renderMessage();
