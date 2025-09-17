// == CODE COMPLETED ==

// links.js
document.addEventListener('DOMContentLoaded', () => {
  const linkBtn = document.getElementById('linkbtn');
  const linkPopup = document.getElementById('linkopened');
  const linkCloseBtn = document.getElementById('closePopup');
  const popupBackgroundBlur = document.getElementById('popupBackgroundBlur');
  const noiseTexture2 = document.getElementById('noiseTexture2');

  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  function enableScroll() {
    document.body.style.overflow = '';
  }

  function showLinks() {
    linkPopup.classList.remove('hide');
    linkPopup.classList.add('show');
    popupBackgroundBlur.classList.add('show');
    noiseTexture2.classList.add('show');
    disableScroll();
  }

  function hideLinks() {
    linkPopup.classList.add('hide');
    popupBackgroundBlur.classList.remove('show');
    noiseTexture2.classList.remove('show');
    enableScroll();
  }

  if (linkBtn && linkPopup && linkCloseBtn && popupBackgroundBlur && noiseTexture2) {
    linkBtn.addEventListener('click', e => {
      e.preventDefault();
      showLinks();
    });

    linkCloseBtn.addEventListener('click', hideLinks);

    popupBackgroundBlur.addEventListener('click', hideLinks);

    noiseTexture2.addEventListener('click', hideLinks);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && linkPopup.classList.contains('show')) {
        hideLinks();
      }
    });
  } else {
    console.warn('Some Links popup elements missing in DOM');
  }
});