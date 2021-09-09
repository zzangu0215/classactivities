/* 
  Each .lazy-image element must be an <img> tag with a data-src attribute
  containing the url of the image to be loaded.
*/
function initLazyImages() {
  // Gather all of our images into a variable
  const lazyImages = document.querySelectorAll('.lazy-image');

  function onIntersection(imageEntities) {
    imageEntities.forEach((image) => {
      // When the image begins to intersect viewport, execute the if code block
      if (image.isIntersecting) {
        // Now that it is in viewport, we do not need to observe it anymore.
        observer.unobserve(image.target);
        // Set the image src to the image that has entered viewport.
        image.target.src = image.target.dataset.src;
      }
    });
  }
  // Create a new instance of Intersection Observer
  const observer = new IntersectionObserver(onIntersection);
  // Observe all images on load.
  lazyImages.forEach((image) => observer.observe(image));
}
