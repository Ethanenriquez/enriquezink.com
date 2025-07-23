// == CODE COMPLETED ==

// commissionart.js
document.addEventListener('DOMContentLoaded', () => {
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