const slides = document.querySelectorAll('.sliderImg0, .sliderImg1, .sliderImg2');
const sliderLeft = document.querySelector('.sliderLeft');
const sliderRight = document.querySelector('.sliderRight');
let currentSlideIndex = 0;

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function showNextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

function showPreviousSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide(currentSlideIndex);
}

sliderLeft.addEventListener('click', showPreviousSlide);
sliderRight.addEventListener('click', showNextSlide);

// Display the first slide initially
showSlide(currentSlideIndex);
