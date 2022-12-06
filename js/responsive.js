const windowWidth = window.matchMedia('(min-width: 1024px)');

if (windowWidth.matches) {
  startBtn.addEventListener('click', () => {
    startDevice('url(/images/windowsBackground.jpeg)');
  });

  btnSquare.classList.add('hidden');
} else {
  startBtn.addEventListener('click', () => {
    startDevice('url(/images/mobileBackground.jpeg)');
  });
}
