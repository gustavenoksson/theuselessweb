const body = document.querySelector('body');
const main = document.querySelector('main');

const keyboard = document.querySelector('.keyboard');
const chassis = document.querySelector('.chassis');
const screen = document.querySelector('.screen');
const powerBtn = document.querySelector('.powerBtn');
const screenSaver = document.querySelector('.powerSaver');

const insperationalWords = [
  'Think of the money you are making!',
  'The payraise is coming I swear!',
];

const keyboardKey = [];

const computerStart = () => {
  powerBtn.style.backgroundColor = 'green';

  const computerBackground = document.createElement('img');
  computerBackground.src = 'images/windowsBackground.jpeg';
  chassis.appendChild(computerBackground);
  computerBackground.classList.add('screenBackground');
  computerBackground.classList.add('loadIn');

  chassis.classList.add('chassisFullSize');

  screen.classList.add('hidden');
  keyboard.classList.add('hidden');
};

powerBtn.addEventListener('click', computerStart);
