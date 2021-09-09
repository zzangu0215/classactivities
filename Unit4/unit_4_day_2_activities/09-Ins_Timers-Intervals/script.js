// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 9;

function setTime() {
  // Sets interval in variable
  //setInterval(function() {}, interval)

  var timerInterval = setInterval(function () {
    if (secondsLeft < 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    } else {
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
      secondsLeft--;
    }
  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);
}

setTime();
