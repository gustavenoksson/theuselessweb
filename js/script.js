const body = document.querySelector('body');
const main = document.querySelector('main');
const device = document.querySelector('.device');
const screen = document.querySelector('.screen');
const startBtn = document.querySelector('.startBtn');
const btnSquare = document.querySelector('.btnSquare');

const insperationalWords = [
  'Think of the money you are making!',
  'The payraise is coming I swear!',
];

const startDevice = (url) => {
  screen.style.backgroundImage = url;
  device.classList.add('deviceFullSize');
};
