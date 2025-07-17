// == CODE COMPLETED ==

// contact.js
document.addEventListener('DOMContentLoaded', () => {
  const contactBtn = document.getElementById('contactbtn');
  const contactSection = document.getElementById('contactBackground');
  const contactCloseBtn = document.getElementById('closeContact');

  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  function enableScroll() {
    document.body.style.overflow = '';
  }

  function showContact() {
    contactSection.classList.add('open');
    contactCloseBtn.classList.add('show');
    disableScroll();
  }

  function hideContact() {
    contactSection.classList.remove('open');
    contactCloseBtn.classList.remove('show');
    enableScroll();
  }

  if (contactBtn && contactSection && contactCloseBtn) {
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