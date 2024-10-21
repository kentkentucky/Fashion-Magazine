//carousel
const track = document.querySelector(".carousel-slider > ul");
const slide = Array.from(track.children);
const nextBtn = document.querySelector(".carousel-button-right");
const prevBtn = document.querySelector(".carousel-button-left");
const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);
const slideWidth = slide[0].getBoundingClientRect().width;

//arrange the slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slide.forEach(setSlidePosition);

//function to move slide according
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

//function to move sync slide and dots
const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

//function to show arrow
const arrows = (slide, prevBtn, nextBtn, targetIndex) => {
  if (targetIndex == 0) {
    prevBtn.classList.add("is-hidden");
    nextBtn.classList.remove("is-hidden");
  } else if (targetIndex == slide.length - 1) {
    prevBtn.classList.remove("is-hidden");
    nextBtn.classList.add("is-hidden");
  } else {
    prevBtn.classList.remove("is-hidden");
    nextBtn.classList.remove("is-hidden");
  }
};

//move slide to the right when right button is clicked
nextBtn.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slide.findIndex((slide) => slide == nextSlide);
  //move to the next slide
  moveToSlide(track, currentSlide, nextSlide);
  //update dot according to slide
  updateDots(currentDot, nextDot);
  //update dots according to arrow
  arrows(slide, prevBtn, nextBtn, nextIndex);
});

//move slide to the left when left button is clicked
prevBtn.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slide.findIndex((slide) => slide == prevSlide);
  //move to the prev slide
  moveToSlide(track, currentSlide, prevSlide);
  //update dot according to slide
  updateDots(currentDot, prevDot);
  //update dots according to arrow
  arrows(slide, prevBtn, nextBtn, prevIndex);
});

//move slide according to navigation dots
dotsNav.addEventListener("click", (e) => {
  //which dot was clicked
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot == targetDot);
  const targetSlide = slide[targetIndex];
  moveToSlide(track, currentSlide, targetSlide);
  //update dot according to slide
  updateDots(currentDot, targetDot);
  arrows(slide, prevBtn, nextBtn, targetIndex);
});