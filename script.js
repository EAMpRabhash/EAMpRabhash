function validateForm(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = 'Invalid email address';
      emailInput.classList.add('form-error');
    } else {
      emailError.textContent = '';
      emailInput.classList.remove('form-error');
      document.getElementById('contactForm').submit();
    }
  }

  const imageSlider = document.getElementById('imageSlider');
const images = imageSlider.getElementsByTagName('img');
let currentIndex = 0;

function showImage(index) {
  for (let i = 0; i < images.length; i++) {
    images[i].style.transform = 'translateX(-100%)';
  }
  images[index].style.transform = 'translateX(0)';
}

function slideToNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function slideToPreviousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}
setInterval(slideToNextImage, 3000);

document.getElementById('prevButton').addEventListener('click', slideToPreviousImage);
document.getElementById('nextButton').addEventListener('click', slideToNextImage);


//tansition
$(document).ready(function() {
  $(".sec").each(function(index) {
      $(this).delay(index * 200).animate({ opacity: 1 }, 500);
  });
});

// Function to handle the intersection of elements
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
}

// Create an Intersection Observer instance
const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.2,
});

// Select the elements to animate
const animateElements = document.querySelectorAll(".animate");

// Observe each element
animateElements.forEach((element) => {
  observer.observe(element);
});


