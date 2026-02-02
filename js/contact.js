// == CODE COMPLETED ==

// contact.js
document.addEventListener('DOMContentLoaded', () => {
  const contactBtn = document.getElementById('contactbtn');
  const contactSection = document.getElementById('contactBackground');
  const contactBorder = document.querySelector('.contactBorder');

  if (!contactBtn || !contactSection || !contactBorder) return;

  function showContact() {
    contactSection.classList.add('open');

    contactBorder.style.left = '40%';
    contactBorder.offsetWidth;
    contactBorder.style.left = '50%';

    history.pushState({ page: 'contact' }, '', '#contact');
  }

  function hideContact() {
    contactBorder.style.left = '60%';
    contactSection.classList.remove('open');

    contactBorder.addEventListener('transitionend', () => {
      contactBorder.style.transition = 'none';
      contactBorder.style.left = '40%';
      contactBorder.offsetWidth;
      contactBorder.style.transition = '0.5s ease-out';

      if (location.hash === '#contact') history.back();
    }, { once: true });
  }

  // Click button to open
  contactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showContact();
  });

  // Escape key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && contactSection.classList.contains('open')) {
      hideContact();
    }
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', () => {
    if (location.hash === '#contact' && !contactSection.classList.contains('open')) {
      showContact(false);
    } else if (contactSection.classList.contains('open')) {
      hideContact();
    }
  });
});