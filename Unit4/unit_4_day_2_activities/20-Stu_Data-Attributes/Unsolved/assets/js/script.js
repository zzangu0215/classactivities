var container = document.querySelector('.container');

container.addEventListener('click', function (event) {
  var element = event.target;

  if (element.matches(".box")) {
    // TODO: Complete function
    // get the state from element
    // IF state = "hidden"
      // set the data-state to "visible"
      // let number = data-number
      // display number in element (set its text)
    // ELSE
      // set the data-state to "hidden"
      // clear html from the element
    var state = element.getAttribute('data-state');

    if (state == 'hidden') {
      element.dataset.state = 'visible';
      element.setAttribute('data-state', 'visible');

      var number = element.getAttribute('data-number');
      element.textContent = number;
    } else {
      element.dataset.state = 'hidden';
      element.setAttribute('data-state', 'hidden');

      element.textContent = '';
    }
  }
});
