var firstNameInput = document.querySelector('#first-name');
var lastNameInput = document.querySelector('#last-name');
var emailInput = document.querySelector('#email');
var passwordInput = document.querySelector('#password');
var signUpButton = document.querySelector('#sign-up');

signUpButton.addEventListener('click', function (event) {
  event.preventDefault();

  // TODO: Create user object from the user input in the form elements
  var userInformation = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim(),
  }

  // TODO: save the user object in local storage
  localStorage.setItem('userInformation', JSON.stringify(userInformation));
});
