// == CODE COMPLETED ==

// links.js
document.addEventListener('DOMContentLoaded', () => {
  const linkBtn = document.getElementById('linkbtn');
  const linkPopup = document.getElementById('linkopened');
  const linkCloseBtn = document.getElementById('closePopup');
  const popupBackgroundBlur = document.getElementById('popupBackgroundBlur');

  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  function enableScroll() {
    document.body.style.overflow = '';
  }

  function showLinks() {
    linkPopup.classList.add('show');
    popupBackgroundBlur.classList.add('show');
    disableScroll();
  }

  function hideLinks() {
    linkPopup.classList.remove('show');
    popupBackgroundBlur.classList.remove('show');
    enableScroll();
  }

  if (linkBtn && linkPopup && linkCloseBtn && popupBackgroundBlur) {
    linkBtn.addEventListener('click', e => {
      e.preventDefault();
      showLinks();
    });

    linkCloseBtn.addEventListener('click', hideLinks);

    popupBackgroundBlur.addEventListener('click', hideLinks);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && linkPopup.classList.contains('show')) {
        hideLinks();
      }
    });
  } else {
    console.warn('Some Links popup elements missing in DOM');
  }
});