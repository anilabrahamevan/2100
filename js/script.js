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


// Nav Close/ Open

let open = document.querySelector(".open");
let close = document.querySelector(".close");
let mobileNav = document.querySelector(".navMobile");
let articleClose = document.querySelector(".art")


open.addEventListener('click', () =>{
  mobileNav.style.display = "flex";
 
   console.log("hello")
})

close.addEventListener('click', () =>{
    mobileNav.style.display = "none";
    console.log("hello")
})
articleClose.addEventListener('click', () =>{
    mobileNav.style.display = "none";
    console.log("hello")
})



// JavaScript code for smooth scrolling
document.addEventListener('DOMContentLoaded', function () {
  const articlesLink = document.querySelector('nav ul li a[href="#sec4"]');
  
  if (articlesLink) {
    articlesLink.addEventListener('click', function (event) {
      mobileNav.style.display = "none";
      event.preventDefault();
      
      const section = document.getElementById('sec4');
      
      
      // Scroll to the section with smooth behavior
      section.scrollIntoView({ behavior: 'smooth' });

    });
  }
});

