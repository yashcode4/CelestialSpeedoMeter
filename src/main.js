document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector('.gallery1');
    const images = gallery.querySelectorAll('.image-container img');
    const prevBtn = gallery.querySelector('.prev-btn');
    const nextBtn = gallery.querySelector('.next-btn');
    let currentIndex = 0;
  
    // show the first image, hide others
    images.forEach((image, index) => {
      if (index !== currentIndex) {
        image.style.opacity = '0'; // Hide other images
      }
    });
  
    // To show next image
    function showNextImage() {
      images[currentIndex].style.opacity = '0'; // Hide current image
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].style.opacity = '1'; // Show next image 
    }
  
    // To show previous image 
    function showPreviousImage() {
      images[currentIndex].style.opacity = '0'; // Hide current image
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      images[currentIndex].style.opacity = '1'; // Show previous image 
    }
  
    // Event listeners for next and previous buttons
    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPreviousImage);
  });
  
  