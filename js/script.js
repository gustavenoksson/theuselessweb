const body = document.querySelector('body');
const main = document.querySelector('main');
const device = document.querySelector('.device');
const screen = document.querySelector('.screen');
const startBtn = document.querySelector('.startBtn');
const keyboard = document.querySelector('.keyboard');
const btnSquare = document.querySelector('.btnSquare');

const insperationalWords = [
  'Think of the money you are making!',
  'The payraise is coming I swear!',
];

const startDevice = () => {
  screen.classList.toggle('backgroundImg');
  device.classList.toggle('deviceFullSize');
  keyboard.style.display = 'none';
};

startBtn.addEventListener('click', startDevice);
