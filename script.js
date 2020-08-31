let throttleTimer = Date.now();
const throttleDelay = 500;

const slides = document.querySelectorAll('.page');

let checkpoints = [];

[...slides].forEach((slide) => {
  checkpoints.push(slide);

  if ([...slides].indexOf(slide) !== slides.length - 1) {
    checkpoints.push(...Array(numberOfSeparators).fill('separator'));
  }
});

let currentSlideIndex = 0;

const slide = (event) => {
  event.preventDefault();

  const newSlide =
    event.deltaY > 0
      ? checkpoints[currentSlideIndex + 1] //  slide down
      : checkpoints[currentSlideIndex - 1]; // slide up

  if (![...checkpoints].includes(newSlide)) {
    return; // if the slide is not exist
  }

  // throttled scroll
  if (throttleTimer + throttleDelay - Date.now() < 0) {
    if (newSlide === 'separator') {
      currentSlideIndex =
        event.deltaY > 0 ? currentSlideIndex + 1 : currentSlideIndex - 1;

      return;
    }

    newSlide.scrollIntoView({
      behavior: 'smooth',
    });

    throttleTimer = Date.now();
  } else {
    return;
  }

  currentSlideIndex = [...checkpoints].indexOf(newSlide);
};

window.addEventListener('wheel', () => slide(event), { passive: false });

const fullDocumentHeight = window.innerHeight * slides.length;

const scrollProgressBar = document.querySelector('progress#scroll-progress');

window.addEventListener(
  'scroll',
  () => {
    const scrollPosition = window.scrollY;

    const scrollPercent = (
      (scrollPosition / (fullDocumentHeight - window.innerHeight)) *
      100
    ).toFixed(2);

    scrollProgressBar.value = scrollPercent;
    scrollProgressBar.textContent = scrollPercent;
  }
  // ,{ passive: false }
);

drawBubbles(slides);
