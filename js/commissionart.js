// == CODE COMPLETED ==

// commissionart.js
document.addEventListener('DOMContentLoaded', () => {
<<<<<<< HEAD
  const commissionartBtn = document.getElementById('commissionartBtn');
  const commissionartBackground = document.getElementById('commissionartBackground');
  const closeCommissionArtBtn = document.getElementById('closeCommissionArtBtn');

  const popup = document.getElementById('commissionartpopup');
  const closePopupBtn = document.getElementById('closeCommissionArtPopup');
  const popupImg = document.getElementById('CommissionArtPopupImg');
  const popupTitle = document.getElementById('CommissionArtPopupTitle');
  const popupDate = document.getElementById('CommissionArtPopupDate');

  // --- Open/Close Commission Art Section ---
  function openCommissionArt() {
    commissionartBackground.classList.add('show');
    closeCommissionArtBtn.classList.add('show');
  }

  function closeCommissionArt() {
    // Hide the section
    commissionartBackground.classList.remove('show');
    closeCommissionArtBtn.classList.remove('show');

    // Also close the popup immediately if open
    if (popup.classList.contains('show')) {
      popup.classList.remove('show');
      popupImg.src = '';
      popupImg.classList.remove('loaded');
    }
  }

  // --- Open/Close Popup ---
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
  }

  // --- Event Listeners ---
  commissionartBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    openCommissionArt();
  });

  closeCommissionArtBtn?.addEventListener('click', closeCommissionArt);
  closePopupBtn?.addEventListener('click', closePopup);

  // Open popup when clicking gallery images
  document.getElementById('galleryLayout2').addEventListener('click', (e) => {
    if (e.target.classList.contains('galleryImg2')) {
      const galleryItem = e.target.closest('.galleryItem2');
      const title = galleryItem.querySelector('.galleryTitle2').textContent;
      const date = galleryItem.querySelector('.galleryDate2').textContent;
      openPopup(e.target.src, title, date);
    }
  });

  // Close popup or section on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (popup.classList.contains('show')) {
        closePopup();
      } else if (commissionartBackground.classList.contains('show')) {
        closeCommissionArt();
      }
    }
  });

  // Close popup when clicking outside the image
  popup.addEventListener('click', (e) => {
    if (e.target === popup) closePopup();
  });
});
=======
    const commissionartBtn = document.getElementById('commissionartBtn');
    const commissionartBackground = document.getElementById('commissionartBackground');
    const closeCommissionArtBtn = document.getElementById('closeCommissionArtBtn');

    function openCommissionArt() {
        commissionartBackground.classList.add('show');
        closeCommissionArtBtn.classList.add('show');
    }

    function closeCommissionArt() {
        commissionartBackground.classList.remove('show');
        closeCommissionArtBtn.classList.remove('show');
    }

    if (commissionartBtn) {
        commissionartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openCommissionArt();
        });
    }

    closeCommissionArtBtn.addEventListener('click', closeCommissionArt);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && commissionartBackground.classList.contains('show')) {
            closeCommissionArt();
        }
    });

    // Popup image logic
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

    document.getElementById('galleryLayout2')?.addEventListener('click', (e) => {
        if (e.target.classList.contains('galleryImg2')) {
            const galleryItem = e.target.closest('.galleryItem2');
            const title = galleryItem.querySelector('.galleryTitle2').textContent;
            const date = galleryItem.querySelector('.galleryDate2').textContent;
            openPopup(e.target.src, title, date);
        }
    });

    closePopupBtn.addEventListener('click', closePopup);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && popup.classList.contains('show')) {
            closePopup();
        }
    });
});
>>>>>>> e4bb22d29c56d0a0fae9e4ca3ff62de093a732b3
