document.addEventListener("DOMContentLoaded", function () {
  let light = document.getElementById("light-duration"); // light element
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

    // Restart the light animation --> triggers the animation of the light
    light.classList.remove("light-animation");
    void light.offsetWidth; // Trigger reflow to restart the animation
    light.classList.add("light-animation");

    // Update the light duration --> Only triggers the duration of the light but not animation itself
    if (object1 == object2) {
      light.style.opacity = "0%";
      light.style.animationDuration = "0s";
    }
    else {
      light.style.opacity = "100%";
      stringTime = time.toString() + 's'; // time data type is number, converted to string.
      light.style.animationDuration = stringTime; // updating the animation duration dynamically.
    }

    // Displaying Time
    if (time > 60) {
      // Calculate minutes and seconds
      const minutes = Math.floor(time / 60);
      const seconds = Math.round(time % 60); // Round seconds

      heading.innerHTML = `<h4>The time taken by the light from the ${object1} to reach the ${object2} is ${minutes} minutes and ${seconds} seconds.</h4>`
    }
    else if (object1 == object2) {
      heading.innerHTML = `<h4>The time taken by the light from the ${object1} to reach the ${object2} is 0 seconds.</h4>`
    }
    else {
      // time in seconds
      heading.innerHTML = `<h4>The time taken by the light from the ${object1} to reach the ${object2} is ${time.toFixed(2)} seconds.</h4>`
    }

    clearInterval(timer);
    startTimer(time); // Start the timer when the page loads
  }

  // Data
  function getDistance(object1, object2) {
    const distances = {
      sun: {
        earth: 149600000,
        moon: 149984400,
        mercury: 57910000,
        venus: 108200000,
        earth: 149600000,
        mars: 227900000,
        jupiter: 778600000,
        saturn: 1433500000,
        uranus: 2872500000,
        neptune: 4495100000,
        pluto: 5906400000
      },
      earth: {
        sun: 149600000,
        moon: 384400,
        mercury: 91610000,
        venus: 41400000,
        mars: 78210000,
        jupiter: 629570000,
        saturn: 1275000000,
        uranus: 2719500000,
        neptune: 4275500000,
        pluto: 4523300000
      },
      moon: {
        sun: 149984400,
        earth: 384400,
        mercury: 91610000,
        venus: 41400000,
        mars: 78210000,
        jupiter: 629570000,
        saturn: 1275000000,
        uranus: 2719500000,
        neptune: 4275500000,
        pluto: 4523300000
      },
      mercury: {
        sun: 57910000,
        earth: 91610000,
        moon: 91994400,
        mercury: 0,
        venus: 49900000,
        mars: 205000000,
        jupiter: 741000000,
        saturn: 1352000000,
        uranus: 2786800000,
        neptune: 4340800000,
        pluto: 4588600000
      },
      venus: {
        sun: 41400000,
        earth: 49900000,
        moon: 49900000 + 384400,
        mercury: 91610000,
        venus: 0,
        mars: 165000000,
        jupiter: 681000000,
        saturn: 1312000000,
        uranus: 2746800000,
        neptune: 4300800000,
        pluto: 4548600000
      },
      mars: {
        sun: 78210000,
        earth: 205000000,
        moon: 205000000 + 384400,
        mercury: 227900000,
        venus: 165000000,
        mars: 0,
        jupiter: 562000000,
        saturn: 1195000000,
        uranus: 2630300000,
        neptune: 4184300000,
        pluto: 4432100000
      },
      jupiter: {
        sun: 778600000,
        earth: 741000000,
        moon: 741000000 + 384400,
        mercury: 629570000,
        venus: 681000000,
        mars: 562000000,
        jupiter: 0,
        saturn: 455000000,
        uranus: 1987900000,
        neptune: 3541900000,
        pluto: 3789700000
      },
      saturn: {
        sun: 1433500000,
        earth: 1352000000,
        moon: 1352000000 + 384400,
        mercury: 1275000000,
        venus: 1312000000,
        mars: 1195000000,
        jupiter: 455000000,
        saturn: 0,
        uranus: 1525900000,
        neptune: 3089900000,
        pluto: 3337700000
      },
      uranus: {
        sun: 2872500000,
        earth: 2786800000,
        moon: 2786800000 + 384400,
        mercury: 2719500000,
        venus: 2746800000,
        mars: 2630300000,
        jupiter: 1987900000,
        saturn: 1525900000,
        uranus: 0,
        neptune: 1564000000,
        pluto: 1811800000
      },
      neptune: {
        sun: 4495100000,
        earth: 4340800000,
        moon: 4340800000 + 384400,
        mercury: 4275500000,
        venus: 4300800000,
        mars: 4184300000,
        jupiter: 3541900000,
        saturn: 3089900000,
        uranus: 1564000000,
        neptune: 0,
        pluto: 248200000
      },
      pluto: {
        sun: 5906400000,
        earth: 4523300000,
        moon: 4523300000 + 384400,
        mercury: 4588600000,
        venus: 4548600000,
        mars: 4432100000,
        jupiter: 3789700000,
        saturn: 3337700000,
        uranus: 1811800000,
        neptune: 248200000,
        pluto: 0
      }
    };

    return distances[object1][object2];
  };

  // Timer Calculations
  let timer; // Variable to hold the interval
  function startTimer(time) {
    let counterTime = 0; // initial Counter;
    let counterTarget = Math.round(time); // target Counter
    console.log(counterTarget)

    let hours = Math.floor(counterTime / 3600);
    let minutes = Math.floor((counterTime % 3600) / 60);
    let seconds = counterTime % 60;

    timer = setInterval(() => {
      if (counterTime === counterTarget || isNaN(counterTarget)) {
        clearInterval(timer);
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
      }

      seconds++;

      if (seconds == 60) {
        seconds = 0;
        minutes++;

        if (minutes == 0) {
          minutes = 0;
          hours++;

          if (hours = 60) {
            clearInterval(timer);
            // Timer reached zero
            return;
          }
        }
      }

      document.getElementById("hours").textContent = formatTime(hours);
      document.getElementById("minutes").textContent = formatTime(minutes);
      document.getElementById("seconds").textContent = formatTime(seconds);

      counterTime++;
    }, 1000);

    return timer;
  }

  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }

  // Event listeners for next and previous buttons in gallery 1
  nextBtn.addEventListener('click', showNextImage);
  prevBtn.addEventListener('click', showPreviousImage);

  // Event listeners for next and previous buttons in gallery 2
  nextBtn2.addEventListener('click', showNextImageGallery2);
  prevBtn2.addEventListener('click', showPreviousImageGallery2);

  calculate(); // run when page loading
});

