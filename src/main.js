document.addEventListener("DOMContentLoaded", function () {
  let light = document.getElementById("light-duration"); // light element
  // Initial Values of objects
  let object1 = 'Sun';
  let object2 = 'Earth';

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
    const hours = Math.floor(time / 3600); // Calculate hours
    const minutes = Math.floor((time % 3600) / 60); // Calculate remaining minutes
    const seconds = Math.round(time % 60); // Calculate remaining seconds and round
    if (object1 == object2) {
      heading.innerHTML = `<h4>The time taken by the light from the ${object1} to reach the ${object2} is 0 secs.</h4>`
    }
    else if (time > 3600) {
      heading.innerHTML = `<h4>The time taken by the light from the ${object1} to reach the ${object2} is ${hours} hour, ${minutes} min and ${seconds} secs.</h4>`
    }
    else if (time > 60) {
      heading.innerHTML = `<h4>The time taken by the light from the ${object1} to reach the ${object2} is ${minutes} min and ${seconds} secs.</h4>`
    }
    else {
      heading.innerHTML = `<h4>The time taken by the light from the ${object1} to reach the ${object2} is ${time.toFixed(2)} secs.</h4>`
    }

    clearInterval(timer);
    startTimer(time); // Start the timer when the page loads
  }

  // Data
  function getDistance(object1, object2) {
    const distances = {
      Sun: {
        Earth: 149600000,
        Moon: 149984400,
        Mercury: 57910000,
        Venus: 108200000,
        Earth: 149600000,
        Mars: 227900000,
        Jupiter: 778600000,
        Saturn: 1433500000,
        Uranus: 2872500000,
        Neptune: 4495100000,
        Pluto: 5906400000
      },
      Earth: {
        Sun: 149600000,
        Moon: 384400,
        Mercury: 91610000,
        Venus: 41400000,
        Mars: 78210000,
        Jupiter: 629570000,
        Saturn: 1275000000,
        Uranus: 2719500000,
        Neptune: 4275500000,
        Pluto: 4523300000
      },
      Moon: {
        Sun: 149984400,
        Earth: 384400,
        Mercury: 91610000,
        Venus: 41400000,
        Mars: 78210000,
        Jupiter: 629570000,
        Saturn: 1275000000,
        Uranus: 2719500000,
        Neptune: 4275500000,
        Pluto: 4523300000
      },
      Mercury: {
        Sun: 57910000,
        Earth: 91610000,
        Moon: 91994400,
        Mercury: 0,
        Venus: 49900000,
        Mars: 205000000,
        Jupiter: 741000000,
        Saturn: 1352000000,
        Uranus: 2786800000,
        Neptune: 4340800000,
        Pluto: 4588600000
      },
      Venus: {
        Sun: 41400000,
        Earth: 49900000,
        Moon: 49900000 + 384400,
        Mercury: 91610000,
        Venus: 0,
        Mars: 165000000,
        Jupiter: 681000000,
        Saturn: 1312000000,
        Uranus: 2746800000,
        Neptune: 4300800000,
        Pluto: 4548600000
      },
      Mars: {
        Sun: 78210000,
        Earth: 205000000,
        Moon: 205000000 + 384400,
        Mercury: 227900000,
        Venus: 165000000,
        Mars: 0,
        Jupiter: 562000000,
        Saturn: 1195000000,
        Uranus: 2630300000,
        Neptune: 4184300000,
        Pluto: 4432100000
      },
      Jupiter: {
        Sun: 778600000,
        Earth: 741000000,
        Moon: 741000000 + 384400,
        Mercury: 629570000,
        Venus: 681000000,
        Mars: 562000000,
        Jupiter: 0,
        Saturn: 455000000,
        Uranus: 1987900000,
        Neptune: 3541900000,
        Pluto: 3789700000
      },
      Saturn: {
        Sun: 1433500000,
        Earth: 1352000000,
        Moon: 1352000000 + 384400,
        Mercury: 1275000000,
        Venus: 1312000000,
        Mars: 1195000000,
        Jupiter: 455000000,
        Saturn: 0,
        Uranus: 1525900000,
        Neptune: 3089900000,
        Pluto: 3337700000
      },
      Uranus: {
        Sun: 2872500000,
        Earth: 2786800000,
        Moon: 2786800000 + 384400,
        Mercury: 2719500000,
        Venus: 2746800000,
        Mars: 2630300000,
        Jupiter: 1987900000,
        Saturn: 1525900000,
        Uranus: 0,
        Neptune: 1564000000,
        Pluto: 1811800000
      },
      Neptune: {
        Sun: 4495100000,
        Earth: 4340800000,
        Moon: 4340800000 + 384400,
        Mercury: 4275500000,
        Venus: 4300800000,
        Mars: 4184300000,
        Jupiter: 3541900000,
        Saturn: 3089900000,
        Uranus: 1564000000,
        Neptune: 0,
        Pluto: 248200000
      },
      Pluto: {
        Sun: 5906400000,
        Earth: 4523300000,
        Moon: 4523300000 + 384400,
        Mercury: 4588600000,
        Venus: 4548600000,
        Mars: 4432100000,
        Jupiter: 3789700000,
        Saturn: 3337700000,
        Uranus: 1811800000,
        Neptune: 248200000,
        Pluto: 0
      }
    };

    return distances[object1][object2];
  };

  // Timer Calculations
  let timer; // Variable to hold the interval
  function startTimer(time) {
    let counterTime = 0; // initial Counter;
    let counterTarget = Math.round(time); // target Counter

    let hours = Math.floor(counterTime / 3600);
    let minutes = Math.floor((counterTime % 3600) / 60);
    let seconds = counterTime % 60;

    timer = setInterval(() => {
      if (counterTime === counterTarget) {
        clearInterval(timer);
        return;
      }
      if (isNaN(counterTarget)) {
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

