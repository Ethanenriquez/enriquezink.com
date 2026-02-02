// CODE COMPLETED

// comicseries.js
document.addEventListener('DOMContentLoaded', () => {
  const comicSeriesBtn = document.getElementById('comicseriesBtn');
  const comicSeriesBg = document.getElementById('comicseriesBackground');
  const closeComicSeriesBtn = document.getElementById('closeComicSeriesBtn');
  const comicTab = document.querySelector('.comicseriesTab');
  const comicPopup = document.getElementById('comicseriesPopup');
  const closePopupBtn = document.getElementById('closeComicSeriesTabPopup');

  if (!comicSeriesBtn || !comicSeriesBg) return;

  // --- Functions ---
  function openComicSeries(pushHistory = true) {
    comicSeriesBg.classList.add('show');
    closeComicSeriesBtn?.classList.add('show');

    if (pushHistory) history.pushState({ page: 'comicseries' }, '', '#comicseries');
  }

  function closeComicSeries() {
    comicSeriesBg.classList.remove('show');
    closeComicSeriesBtn?.classList.remove('show');

    if (location.hash === '#comicseries') history.back();
  }

  function openPopup() {
    if (!comicPopup) return;
    comicPopup.classList.add('show');
  }

  function closePopup() {
    if (!comicPopup) return;
    comicPopup.classList.remove('show');
  }

  // --- Event Listeners ---

  // Open Comic Series background
  comicSeriesBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openComicSeries();
  });

  // Close Comic Series background
  closeComicSeriesBtn?.addEventListener('click', closeComicSeries);

  // Open Comic Tab popup
  comicTab?.addEventListener('click', (e) => {
    if (!e.target.closest('.comicseriesLinks a')) {
      openPopup();
    }
  });

  // Close Comic Tab popup
  closePopupBtn?.addEventListener('click', closePopup);

  // Close popup when clicking outside
  comicPopup?.addEventListener('click', (e) => {
    if (e.target === comicPopup) closePopup();
  });

  // Hover transition fix for links
  document.querySelectorAll('.comicseriesLinks a').forEach(link => {
    link.addEventListener('mouseenter', () => link.style.transition = '0.25s');
    link.addEventListener('mouseleave', () => {
      link.style.transition = '0.75s';
      setTimeout(() => link.style.transition = '0.25s', 0);
    });
  });

  // ESC key closes popup or background
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (comicPopup?.classList.contains('show')) closePopup();
      else if (comicSeriesBg.classList.contains('show')) closeComicSeries();
    }
  });

  // Browser back/forward handling
  window.addEventListener('popstate', () => {
    if (location.hash === '#comicseries') {
      openComicSeries(false);
    } else {
      closeComicSeries();
      closePopup();
    }
  });
});