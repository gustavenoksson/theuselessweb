const body = document.querySelector('body');
const main = document.querySelector('main');
const device = document.querySelector('.device');
const screen = document.querySelector('.screen');
const startBtn = document.querySelector('.startBtn');
const keyboard = document.querySelector('.keyboard');
const btnSquare = document.querySelector('.btnSquare');

// icons

const insperationalWords = [
  'Think of the money you are making!',
  'The payraise is coming I swear!',
];

const activateBackgroundImg = () => {
  screen.classList.add('backgroundImg');
  device.classList.add('deviceFullSize');
  keyboard.style.display = 'none';
};

// Array of icons on the device.
const deviceIcons = [
  {
    name: 'E-mail',
    img: 'images/deviceIcons/emailIcon.svg',
    class: 'email',
    alt: 'Icon that represents email.',
  },
  {
    name: 'Chat',
    img: 'images/deviceIcons/chatIcon.svg',
    class: 'chat',
    alt: 'Icon that represents chat.',
  },
];

// Function to create icons on device startup.
const createIcons = () => {
  const iconsContainer = document.createElement('div');
  iconsContainer.classList.add('iconsContainer');
  screen.appendChild(iconsContainer);

  deviceIcons.forEach((deviceIcon) => {
    const iconContainer = document.createElement('div');
    const iconImg = document.createElement('img');
    const iconName = document.createElement('p');
    iconsContainer.appendChild(iconContainer);
    iconContainer.appendChild(iconImg);
    iconContainer.appendChild(iconName);

    iconContainer.classList.add('iconContainer');

    iconImg.src = deviceIcon.img;
    iconImg.classList.add(deviceIcon.class);
    iconImg.setAttribute('alt', deviceIcon.alt);
    iconName.textContent = deviceIcon.name;
  });
};

startBtn.addEventListener(
  'click',
  () => {
    activateBackgroundImg();
    createIcons();
  },
  { once: true }
);
