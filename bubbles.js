const bubblesContainer = document.querySelector('#bubbles');

const numberOfSeparators = 2;

const drawPill = (page) => {
  const pill = document.createElement('div');
  pill.innerText = page.innerText;
  pill.className = 'pill' + '-' + page.innerText;

  bubblesContainer.appendChild(pill);
};

const drawSeparattors = (page) => {
  // dont draw after last pill
  if ([...slides].indexOf(page) !== slides.length - 1) {
    let separator = 1;

    while (separator <= numberOfSeparators) {
      const dot = document.createElement('div');
      dot.className = 'dot' + '-' + separator;

      bubblesContainer.appendChild(dot);

      separator++;
    }
  }
};

const drawBubbles = (slides) => {
  slides.forEach((page) => {
    drawPill(page);
    drawSeparattors(page);
  });
};
