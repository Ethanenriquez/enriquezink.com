// == CODE COMPLETED ==

// about.js
document.addEventListener('DOMContentLoaded', () => {
  const aboutBtn = document.getElementById('aboutbtn');
  const aboutPopup = document.getElementById('aboutBackground');
  const aboutCloseBtn = document.getElementById('closeAbout');
  const aboutContent = document.getElementById('aboutopened');
  const aboutLayer = document.getElementById('aboutLayer');

  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  function enableScroll() {
    document.body.style.overflow = '';
  }

  // Function to show about section
  function showAbout() {
    aboutPopup.classList.add('show');
    aboutContent.classList.add('show');
    aboutCloseBtn.classList.add('show');
    aboutLayer.classList.remove('hide');
    aboutLayer.classList.add('show');
    disableScroll();
  }

  // Function to hide about section
  function hideAbout() {
    aboutPopup.classList.remove('show');
    aboutContent.classList.remove('show');
    aboutLayer.classList.remove('show');
    aboutLayer.classList.add('hide');
    aboutCloseBtn.classList.remove('show');
    enableScroll();
  }

  if (aboutBtn && aboutPopup && aboutCloseBtn && aboutContent && aboutLayer) {
    aboutBtn.addEventListener('click', e => {
      e.preventDefault();
      showAbout();
    });

    aboutCloseBtn.addEventListener('click', hideAbout);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && aboutPopup.classList.contains('show')) {
        hideAbout();
      }
    });
  } else {
    console.warn('About popup elements missing in DOM');
  }
});