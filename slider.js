let throttleTimer = Date.now();
const throttleDelay = 500;

const slider = (checkpoints) => {
  const bubbles = [...document.querySelector('#bubbles').children];
  let currentSlideIndex = 0;

  const slide = (event) => {
    event.preventDefault();

    const newSlideIndex =
      event.deltaY > 0
        ? currentSlideIndex + 1 //  slide down
        : currentSlideIndex - 1; // slide up

    const newSlide = checkpoints[newSlideIndex];

    if (![...checkpoints].includes(newSlide)) {
      return; // if the slide is not exist
    }

    bubbles[currentSlideIndex].classList.remove('active');
    bubbles[newSlideIndex].classList.add('active');

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
};
