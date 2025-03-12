const lazyImages = document.querySelectorAll('img[loading="lazy"]'); // Get all images with the loading="lazy" attribute
function addLoadedClass(image) { // Function to add class to image parent after it is loaded
   const parentElement = image.parentElement;
   if (image.complete) { // Check if the image is loaded
      parentElement.classList.add('loaded');
   } else {
      image.addEventListener('load', function() { // Add a load event to add the class after the image has loaded
         parentElement.classList.add('loaded');
      });
   }
}
lazyImages.forEach(addLoadedClass); // Loop through all the images and call the addLoadedClass function for each one

/* === */

let reviewsSlider = document.querySelector('.reviews-slider')
if (reviewsSlider) {
   new Swiper(reviewsSlider, {
      loop: true,
      spaceBetween: 24,
      slidesPerView: 3.19,
      navigation: {
         prevEl: '#reviews-slider-btn-prev',
         nextEl: '#reviews-slider-btn-next',
      },
      breakpoints: {
         0: {
            spaceBetween: 8,
            slidesPerView: 1.03,
         },
         576: {
            spaceBetween: 16,
            slidesPerView: 2.18,
         },
         900: {
            spaceBetween: 24,
            slidesPerView: 3.19,
         }
      },
   });
}