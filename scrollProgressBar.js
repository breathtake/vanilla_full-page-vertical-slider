const controlScrollProgressBar = (slides) => {
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
};
