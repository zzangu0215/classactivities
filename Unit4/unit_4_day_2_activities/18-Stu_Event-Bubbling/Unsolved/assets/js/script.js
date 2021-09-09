// TODO: Which element is the following line of code selecting?
// Select a "carouselbox" class
var carousel = document.querySelector('.carouselbox');
// TODO: Which element is the following line of code selecting?
// Select button classes named "next" and "prev"
var next = carousel.querySelector('.next');
var prev = carousel.querySelector('.prev');
var index = 0;
var currentImage;

var images = [
  'https://picsum.photos/id/10/300/200',
  'https://picsum.photos/id/100/300/200',
  'https://picsum.photos/id/1006/300/200',
  'https://picsum.photos/id/1025/300/200',
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
// Once we click the button, it directly goes to a specific index of an image array
carousel.addEventListener('click', function () {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
// Once we click the "next" button, it goes to the next image by 1.
next.addEventListener('click', function (event) {
  // TODO: What is the purpose of the following line of code?
  // Prevent bubbling once we click a button inside the image
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
// Once we click the "prev" button, it goes to the previous image by 1.
prev.addEventListener('click', function (event) {
  // TODO: What would happen if we didn't add the following line of code?
  // Since the button is inside the image, if we click the button, it causes the domino effect to all the outer elements
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
