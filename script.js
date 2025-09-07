let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Initialize first slide
function initSlides() {
  slides.forEach((slide, index) => {
    slide.style.position = 'absolute';
    slide.style.top = '0';
    slide.style.left = '100%'; // hide all slides initially
    slide.style.transition = 'left 0.5s ease';
  });
  slides[currentSlide].style.left = '0'; // show first slide
}

function moveSlide(direction) {
  const total = slides.length;
  const nextSlide = (currentSlide + direction + total) % total;

  // Slide out current slide
  slides[currentSlide].style.left = direction > 0 ? '-100%' : '100%';

  // Slide in next slide
  slides[nextSlide].style.left = '0';

  // Reset position of the slide we just moved
  slides[currentSlide].style.left = direction > 0 ? '100%' : '-100%';

  currentSlide = nextSlide;
}

// Run initialization
window.addEventListener('DOMContentLoaded', initSlides);
