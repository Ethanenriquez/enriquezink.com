// == CODE COMPLETED ==

// myart.js
document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const myartBtn = document.getElementById('myartBtn');
  const myartBackground = document.getElementById('myartBackground');
  const closeMyArtBtn = document.getElementById('closeMyArtBtn');

  const popup = document.getElementById('myartpopup');
  const popupImg = document.getElementById('artPopupImg');
  const popupTitle = document.getElementById('artPopupTitle');
  const popupDate = document.getElementById('artPopupDate');

  // Open My Art Section
  function openMyArt() {
    myartBackground.classList.add('show');
    history.pushState({ page: 'myart' }, '', '#myart');
  }

  // Close My Art Section
  function closeMyArt() {
    myartBackground.classList.remove('show');
    if (location.hash === '#myart') {
      history.back();
    }
  }

  // Open Popup for Image
  function openPopup(src, title, date) {
    popupImg.classList.remove('loaded');
    popupTitle.textContent = title;
    popupDate.textContent = date;
    popup.classList.add('show');
    popupImg.onload = () => popupImg.classList.add('loaded');
    popupImg.src = src;
  }

  // Close Popup
  function closePopup() {
    popup.classList.remove('show');
    setTimeout(() => {
      popupImg.src = '';
      popupImg.classList.remove('loaded');
    }, 500); // Matches transition time
  }

  // Handle browser back/forward
  window.addEventListener('popstate', () => {
    if (location.hash === '#myart') {
      myartBackground.classList.add('show');
    } else {
      myartBackground.classList.remove('show');
    }
  });

  // Button Events
  myartBtn?.addEventListener('click', e => {
    e.preventDefault();
    openMyArt();
  });

  closeMyArtBtn?.addEventListener('click', closeMyArt);

  // Gallery Image Click
  document.getElementById('galleryLayout').addEventListener('click', e => {
    if (e.target.classList.contains('galleryImg')) {
      const galleryItem = e.target.closest('.galleryItem');
      const title = galleryItem.querySelector('.galleryTitle').textContent;
      const date = galleryItem.querySelector('.galleryDate').textContent;
      openPopup(e.target.src, title, date);
    }
  });

  // Close popup by clicking outside image
  popup.addEventListener('click', e => {
    if (e.target === popup) {
      closePopup();
    }
  });

  // Close popup or section on ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (popup.classList.contains('show')) {
        closePopup();
      } else if (myartBackground.classList.contains('show')) {
        closeMyArt();
      }
    }
  });

  // Close button inside popup
  const closeArtPopupBtn = document.getElementById('closeArtPopup');
  closeArtPopupBtn?.addEventListener('click', closePopup);
});