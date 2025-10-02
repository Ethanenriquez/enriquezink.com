// == CODE COMPLETED ==

// contact.js
document.addEventListener('DOMContentLoaded', () => {
  const contactBtn = document.getElementById('contactbtn');
  const contactSection = document.getElementById('contactBackground');
  const contactCloseBtn = document.getElementById('closeContact');
  const contactBorder = document.querySelector('.contactBorder');

  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  function enableScroll() {
    document.body.style.overflow = '';
  }

  function showContact() {
    contactSection.classList.add('open');
    contactCloseBtn.classList.add('show');

    contactBorder.style.left = '40%';
    contactBorder.offsetWidth;
    contactBorder.style.left = '50%';
    disableScroll();
  }

  function hideContact() {
    contactBorder.style.left = '60%';

    contactSection.classList.remove('open');
    contactCloseBtn.classList.remove('show');

    contactBorder.addEventListener('transitionend', () => {
      contactBorder.style.transition = 'none';
      contactBorder.style.left = '40%';
      contactBorder.offsetWidth;
      contactBorder.style.transition = '0.5s ease-out';
    }, { once: true });

    enableScroll();
  }

  if (contactBtn && contactSection && contactCloseBtn && contactBorder) {
    contactBtn.addEventListener('click', e => {
      e.preventDefault();
      showContact();
    });

    contactCloseBtn.addEventListener('click', hideContact);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && contactSection.classList.contains('open')) {
        hideContact();
      }
    });
  } else {
    console.warn('Some Contact popup elements missing in DOM');
  }
});