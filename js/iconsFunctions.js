const bossEmails = [
  'Remember that you have to work overtime this saturday ;)',
  'Remember that christmas bonus that was coming? I spent it so maybe next year!',
  'No one saw you at the office working overtime so no extra money for you sorry!',
  'I promise more money wont make you happier! Trust me!',
];

const iconFunctions = () => {
  const email = document.querySelector('.email');
  const settings = document.querySelector('.settings');

  // Create icon container.
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

  //   Email icon function.
  const emailFunction = () => {
    iconBox.classList.remove('hidden');
    iconBoxHeadline.textContent = 'EMAIL';
    const emailContent = document.createElement('div');
    const unopenedEmailImg = document.createElement('img');
    const mailBtn = document.createElement('button');
    const mailBtnText = document.createElement('p');
    mailBtnText.textContent = 'You have one unopened mail from your boss!';
    unopenedEmailImg.src = 'images/deviceIcons/unopenedEmail.svg';

    emailContent.appendChild(unopenedEmailImg);
    emailContent.appendChild(mailBtn);
    mailBtn.appendChild(mailBtnText);
    iconBoxContentContainer.appendChild(emailContent);

    emailContent.classList.add('emailContent');

    // Get random email on mail button click.
    mailBtn.addEventListener('click', () => {
      unopenedEmailImg.remove();
      mailBtn.remove();

      const mailText = document.createElement('p');
      mailText.textContent = `From Boss: ${
        bossEmails[[Math.floor(Math.random() * bossEmails.length)]]
      }`;

      emailContent.appendChild(mailText);

      const replyButton = document.createElement('button');
      const replyButtonText = document.createElement('p');
      const replyInputField = document.createElement('div');
      const sendBtn = document.createElement('button');
      const sendBtnText = document.createElement('p');
      sendBtnText.textContent = 'Send';
      replyInputField.classList.add('replyInputField');
      replyButtonText.textContent = 'Reply';
      emailContent.appendChild(replyButton);
      replyButton.appendChild(replyButtonText);
      sendBtn.appendChild(sendBtnText);
      emailContent.appendChild(replyInputField);
      emailContent.appendChild(sendBtn);

      // Writes a reply on the the emails input field when reply button is clicked.
      replyButton.addEventListener('click', () => {
        const replyText = document.createElement('p');
        replyText.textContent = 'I quit';
        replyInputField.appendChild(replyText);
      });

      // Closes application on device when send button is clicked.
      sendBtn.addEventListener('click', () => {
        closeIconFunction(emailContent);
      });
    });

    // Closes application on device when exit button is clicked.
    iconBoxClose.addEventListener('click', () => {
      closeIconFunction(emailContent);
    });
  };

  email.addEventListener('click', emailFunction);

  // Settings icon function
  const settingsFunction = () => {
    iconBox.classList.remove('hidden');
    iconBoxHeadline.textContent = 'SETTINGS';

    const settingsContent = document.createElement('div');
    settingsContent.classList.add('settingsContent');
    iconBoxContentContainer.appendChild(settingsContent);

    iconBoxClose.addEventListener('click', () => {
      closeIconFunction(settingsContent);
    });
  };

  const closeIconFunction = (target) => {
    iconBox.classList.add('hidden');
    target.remove();
  };

  settings.addEventListener('click', settingsFunction);
};
