// == CODE COMPLETED ==

// about.js
document.addEventListener('DOMContentLoaded', () => {
  const aboutBtn = document.getElementById('aboutbtn');
  const aboutPopup = document.getElementById('aboutBackground');
  const aboutContent = document.getElementById('aboutopened');
  const aboutLayer = document.getElementById('aboutLayer');

  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  function enableScroll() {
    document.body.style.overflow = '';
  }

  function showAbout() {
    aboutPopup.classList.add('show');
    aboutContent.classList.add('show');
    aboutLayer.classList.remove('hide');
    aboutLayer.classList.add('show');
    disableScroll();

    history.pushState({ page: 'about' }, '', '#about');
  }

  function hideAbout(fromPopState = false) {
    aboutPopup.classList.remove('show');
    aboutContent.classList.remove('show');
    aboutLayer.classList.remove('show');
    aboutLayer.classList.add('hide');
    enableScroll();

    if (!fromPopState) {
      history.back();
    }
  }

  window.addEventListener('popstate', (e) => {
    if (!e.state || e.state.page !== 'about') {
      if (aboutPopup.classList.contains('show')) {
        hideAbout(true);
      }
    }
  });

  if (aboutBtn && aboutPopup && aboutContent && aboutLayer) {
    aboutBtn.addEventListener('click', e => {
      e.preventDefault();
      showAbout();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && aboutPopup.classList.contains('show')) {
        hideAbout();
      }
    });
  } else {
    console.warn('About popup elements missing in DOM');
  }
});