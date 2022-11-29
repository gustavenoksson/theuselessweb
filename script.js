const body = document.querySelector('body');

const powerBtn = document.querySelector('.powerBtn');
const screen = document.querySelector('.screen');

const welcomeText = 'Welcome to work!';

const insperationalWords = [
  'Think of the money you are making!',
  'The payraise is coming I swear!',
];

const keyboardKey = [];

powerBtn.addEventListener('click', () => {
  screen.style.backgroundColor = 'green';
});
