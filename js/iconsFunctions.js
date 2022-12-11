const iconFunctions = () => {
  // Icons
  const email = document.querySelector('.email');
  const chat = document.querySelector('.chat');

  // Create icon container
  const iconBox = document.createElement('article');
  const iconBoxClose = document.createElement('div');
  const iconBoxContentContainer = document.createElement('div');
  const iconBoxHeadline = document.createElement('p');
  iconBox.classList.add('iconBox');
  iconBox.classList.add('hidden');
  iconBoxClose.classList.add('iconBoxClose');
  iconBoxContentContainer.classList.add('iconBoxContentContainer');

  screen.appendChild(iconBox);
  iconBox.appendChild(iconBoxClose);
  iconBox.appendChild(iconBoxContentContainer);
  iconBoxContentContainer.appendChild(iconBoxHeadline);

  //   Email icon function
  email.addEventListener('click', () => {
    iconBox.classList.remove('hidden');
    iconBoxHeadline.textContent = 'EMAIL';
  });

  iconBoxClose.addEventListener('click', () => {
    iconBox.classList.add('hidden');
  });
};
