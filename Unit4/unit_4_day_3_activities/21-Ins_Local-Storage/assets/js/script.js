var counter = document.querySelector('#counter');
var addButton = document.querySelector('#add');
var subtractButton = document.querySelector('#subtract');

// Local Storage saves data using key/value pairs. The key is a string and it is
// used to lookup the stored value. All values are saved as strings in local
// storage.

// Use localStorage.getItem(key) to read data in local storage.
var count = localStorage.getItem('count');

// If this is the first time user has visited, then count will be null.
if (count === null) {
  count = 0;
}

// render the retrieved count in HTML using the textContent property
counter.textContent = count;

addButton.addEventListener('click', function () {
  if (count < 24) {
    count++;
    counter.textContent = count;
    // Use localStorage.setItem(key, value) to add/change the data in local
    // storage
    localStorage.setItem('count', count);
  }
});

subtractButton.addEventListener('click', function () {
  if (count > 0) {
    count--;
    counter.textContent = count;
    localStorage.setItem('count', count);
  }
});
