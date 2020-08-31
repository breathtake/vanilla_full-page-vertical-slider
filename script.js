let throttleTimer = Date.now();
const throttleDelay = 500;

const slides = document.querySelectorAll('.page');

let currentSlideIndex = 0;

const slide = async (event) => {
  event.preventDefault();

  const newSlide =
    event.deltaY > 0
      ? slides[currentSlideIndex + 1] //  slide down
      : slides[currentSlideIndex - 1]; // slide up

  if (![...slides].includes(newSlide)) {
    return; // if the slide is not exist
  }

  // throttled scroll
  if (throttleTimer + throttleDelay - Date.now() < 0) {
    newSlide.scrollIntoView({
      behavior: 'smooth',
    });

    throttleTimer = Date.now();
  } else {
    return;
  }

  currentSlideIndex = [...slides].indexOf(newSlide);
};

window.addEventListener('wheel', () => slide(event), { passive: false });
