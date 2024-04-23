document.addEventListener("DOMContentLoaded", function () {
  // Initial Values of objects
  let object1 = 'sun';
  let object2 = 'earth';

  // Gallery 1
  const gallery1 = document.querySelector('.gallery1');
  const images = gallery1.querySelectorAll('.image-container img');
  const prevBtn = gallery1.querySelector('.prev-btn');
  const nextBtn = gallery1.querySelector('.next-btn');
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

    object1 = images[currentIndex].dataset.value;
    calculate();
  }

  // To show previous image 
  function showPreviousImage() {
    images[currentIndex].style.opacity = '0'; // Hide current image
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].style.opacity = '1'; // Show previous image 

    object1 = images[currentIndex].dataset.value;
    calculate();
  }

  // Gallery 2
  const gallery2 = document.querySelector('.gallery2');
  const images2 = gallery2.querySelectorAll('.image-container img');
  const prevBtn2 = gallery2.querySelector('.prev-btn');
  const nextBtn2 = gallery2.querySelector('.next-btn');
  let currentIndex2 = 0;

  // show the first image, hide others
  images2.forEach((image, index) => {
    if (index !== currentIndex2) {
      image.style.opacity = '0'; // Hide other images
    }
  });

  // To show next image in gallery 2
  function showNextImageGallery2() {
    images2[currentIndex2].style.opacity = '0'; // Hide current image
    currentIndex2 = (currentIndex2 + 1) % images2.length;
    images2[currentIndex2].style.opacity = '1'; // Show next image 

    object2 = images2[currentIndex2].dataset.value;
    calculate();
  }

  // To show previous image in gallery 2
  function showPreviousImageGallery2() {
    images2[currentIndex2].style.opacity = '0'; // Hide current image
    currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length;
    images2[currentIndex2].style.opacity = '1'; // Show previous image 

    object2 = images2[currentIndex2].dataset.value;
    calculate();
  }


  // Time Calculate
  function calculate() {
    const distance = getDistance(object1, object2);
    const lightSpeed = 299792 // km/s
    const time = distance / lightSpeed; // seconds

    // Displaying Time
    if (time > 60) {
      // Calculate minutes and seconds
      const minutes = Math.floor(time / 60);
      const seconds = Math.round(time % 60); // Round seconds

      heading.innerHTML = `<h2>The time taken by the light from the ${object1} to reach the ${object2} is ${minutes} minutes and ${seconds} seconds.</h2>`
    }
    else if (object1 == object2) {
      heading.innerHTML = `<h2>The time taken by the light from the ${object1} to reach the ${object2} is 0 seconds.</h2>`
    }
    else {
      // time in seconds
      heading.innerHTML = `<h2>The time taken by the light from the ${object1} to reach the ${object2} is ${time.toFixed(2)} seconds.</h2>`
    }

  }

  // Data
  function getDistance(object1, object2) {
    const distances = {
      sun: {
        earth: 149600000,
        moon: 149600000 + 384400
      },
      earth: {
        sun: 149600000,
        moon: 384400
      },
      moon: {
        sun: 149600000 + 384400,
        earth: 384400
      }
    };

    return distances[object1][object2];
  };

  // Event listeners for next and previous buttons in gallery 1
  nextBtn.addEventListener('click', showNextImage);
  prevBtn.addEventListener('click', showPreviousImage);

  // Event listeners for next and previous buttons in gallery 2
  nextBtn2.addEventListener('click', showNextImageGallery2);
  prevBtn2.addEventListener('click', showPreviousImageGallery2);

  calculate(); // run when page loading
});

