const body = document.querySelector('body');

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
  screen.classList.add('screenStart');
};

powerBtn.addEventListener('click', computerStart);
