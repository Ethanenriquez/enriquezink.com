// == CODE COMPLETED ==

// myart.js
document.addEventListener('DOMContentLoaded', () => {
  const myartBtn = document.getElementById('myartBtn');
  const myartBackground = document.getElementById('myartBackground');
  const closeMyArtBtn = document.getElementById('closeMyArtBtn');

  const popup = document.getElementById('myartpopup');
  const closePopupBtn = document.getElementById('closeArtPopup');
  const popupImg = document.getElementById('artPopupImg');
  const popupTitle = document.getElementById('artPopupTitle');
  const popupDate = document.getElementById('artPopupDate');

  function openMyArt() {
    myartBackground.classList.add('show');
    closeMyArtBtn.classList.add('show');
  }

  function closeMyArt() {
  myartBackground.classList.remove('show');
  closeMyArtBtn.classList.remove('show');
}

  function openPopup(src, title, date) {
    popupImg.classList.remove('loaded');
    popupTitle.textContent = title;
    popupDate.textContent = date;
    popup.classList.add('show');
    popupImg.onload = () => {
        popupImg.classList.add('loaded');
    };
    popupImg.src = src;
  }

  function closePopup() {
    popup.classList.remove('show');
    setTimeout(() => {
      popupImg.src = '';
      popupImg.classList.remove('loaded');
    }, 500);
  }

  myartBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    openMyArt();
  });

  closeMyArtBtn?.addEventListener('click', closeMyArt);
  closePopupBtn?.addEventListener('click', closePopup);

  document.getElementById('galleryLayout').addEventListener('click', (e) => {
    if (e.target.classList.contains('galleryImg')) {
      const galleryItem = e.target.closest('.galleryItem');
      const title = galleryItem.querySelector('.galleryTitle').textContent;
      const date = galleryItem.querySelector('.galleryDate').textContent;
      openPopup(e.target.src, title, date);
    }
  });

  const popupBackground = document.querySelector('.myartImgPopup');

  popupBackground.addEventListener('click', (e) => {
    if (e.target === popupBackground) {
      closePopup();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (popup.classList.contains('show')) {
        closePopup();
      } else if (myartBackground.classList.contains('show')) {
        closeMyArt();
      }
    }
  });
});