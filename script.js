// function throttle(fn, wait) {
//   var time = Date.now();
//   return function () {
//     if (time + wait - Date.now() < 0) {
//       fn();
//       time = Date.now();
//     }
//   };
// }

var timer = Date.now();

const slides = document.querySelectorAll('.page');

let currentSlideIndex = 0;

// let prevScrollPosition = window.scrollY;

const slide = async (event) => {
  event.preventDefault();

  // console.log(window.scrollY > prevScrollPosition ? 'down' : 'up');
  // prevScrollPosition = window.scrollY;

  const newSlide =
    event.deltaY > 0
      ? slides[currentSlideIndex + 1]
      : slides[currentSlideIndex - 1];

  if (![...slides].includes(newSlide)) {
    return;
  }

  const move = () =>
    newSlide.scrollIntoView({
      behavior: 'smooth',
    });

  if (timer + 500 - Date.now() < 0) {
		console.log('if');
    move();

    timer = Date.now();
  } else {
		return
	}

  currentSlideIndex = [...slides].indexOf(newSlide);
};

window.addEventListener(
  'wheel',
  () => {
		console.log('wheel');
    // event.preventDefault();
    // throttle((event) => slide(event), 1000)
    slide(event);
  },
  { passive: false }
);

// window.addEventListener(
//   'wheel',
//   (event) => event.preventDefault(),
//   { passive: false }
// );

// document.onwheel = wheelScrollHandler;
