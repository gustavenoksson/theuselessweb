const desktopWidth = window.matchMedia('(min-width: 1024px)');

const windowResize = (width) => {
  if (width.matches) {
    startBtn.addEventListener('click', () => {
      startDevice('url(/images/windowsBackground.jpeg)');
    });
  } else {
    startBtn.addEventListener('click', () => {
      startDevice('url(/images/mobileBackground.jpeg)');
    });
  }
};
windowResize(desktopWidth);
