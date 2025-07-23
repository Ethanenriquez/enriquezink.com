

// characterdesign.js
document.addEventListener('DOMContentLoaded', () => {
  const charDesignBtn = document.getElementById('characterdesignBtn');
  const charDesignBg = document.getElementById('characterdesignBackground');
  const closeCharDesignBtn = document.getElementById('closeCharacterDesignBtn');

  function openCharDesign() {
    charDesignBg.classList.add('show');
    closeCharDesignBtn.classList.add('show');
  }

  function closeCharDesign() {
    charDesignBg.classList.remove('show');
    closeCharDesignBtn.classList.remove('show');
  }

  if (charDesignBtn) {
    charDesignBtn.addEventListener('click', e => {
      e.preventDefault();
      openCharDesign();
    });
  }

  closeCharDesignBtn.addEventListener('click', closeCharDesign);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && charDesignBg.classList.contains('show')) {
      closeCharDesign();
    }
  });
});