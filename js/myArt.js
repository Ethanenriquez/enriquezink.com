// == CODE COMPLETED ==

// myart.js
document.addEventListener('DOMContentLoaded', () => {
  const myartBtn = document.getElementById('myartBtn');
  const myartBackground = document.getElementById('myartBackground');
  const closeMyArtBtn = document.getElementById('closeMyArtBtn');

  function openMyArt() {
    myartBackground.classList.add('show');
    closeMyArtBtn.classList.add('show');
  }

  function closeMyArt() {
    myartBackground.classList.remove('show');
    closeMyArtBtn.classList.remove('show');
  }

  document.querySelectorAll('.galleryImg').forEach((img) => {
    img.onload = () => img.classList.add('loaded');
    if (img.complete && img.naturalHeight !== 0) {
      img.classList.add('loaded');
    }
  });

  myartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openMyArt();
  });

  closeMyArtBtn.addEventListener('click', closeMyArt);

  const popup = document.getElementById('popup');
  const closePopupBtn = document.getElementById('closeImagePopup');
  const popupImg = document.getElementById('popupImg');
  const popupTitle = document.getElementById('popupTitle');
  const popupDate = document.getElementById('popupDate');

  function openPopup(src, title, date) {
    popupImg.classList.remove('loaded');
    popupImg.src = src;
    popupTitle.textContent = title;
    popupDate.textContent = date;
    popup.classList.add('show');
  }

  function closePopup() {
    popup.classList.remove('show');
    setTimeout(() => {
      popupImg.src = '';
      popupImg.classList.remove('loaded');
    }, 500);
  }

  document.getElementById('galleryLayout').addEventListener('click', (e) => {
    if (e.target.classList.contains('galleryImg')) {
      const galleryItem = e.target.closest('.galleryItem');
      const title = galleryItem.querySelector('.galleryTitle').textContent;
      const date = galleryItem.querySelector('.galleryDate').textContent;
      openPopup(e.target.src, title, date);
    }
  });

  closePopupBtn.addEventListener('click', closePopup);

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