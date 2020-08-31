const slides = document.querySelectorAll('.page');

let checkpoints = [];

[...slides].forEach((slide) => {
  checkpoints.push(slide);

  if ([...slides].indexOf(slide) !== slides.length - 1) {
    checkpoints.push(...Array(numberOfSeparators).fill('separator'));
  }
});

slider(checkpoints);
drawBubbles(slides);
controlScrollProgressBar(slides);
