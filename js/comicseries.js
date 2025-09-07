// CODE COMPLETED

// comicseries.js
document.addEventListener('DOMContentLoaded', () => {
  const comicSeriesBtn = document.getElementById('comicseriesBtn');
  const comicSeriesBg = document.getElementById('comicseriesBackground');
  const closeComicSeriesBtn = document.getElementById('closeComicSeriesBtn');
  const comicTab = document.querySelector('.comicseriesTab');
  const comicPopup = document.getElementById('comicseriesPopup');
  const closePopupBtn = document.getElementById('closeComicSeriesTabPopup');

  // Open / Close Comic Series Background
  function openComicSeries() {
    comicSeriesBg.classList.add('show');
    closeComicSeriesBtn.classList.add('show');
  }

  function closeComicSeries() {
    comicSeriesBg.classList.remove('show');
    closeComicSeriesBtn.classList.remove('show');
  }

  if (comicSeriesBtn) {
    comicSeriesBtn.addEventListener('click', e => {
      e.preventDefault();
      openComicSeries();
    });
  }

  if (closeComicSeriesBtn) {
    closeComicSeriesBtn.addEventListener('click', closeComicSeries);
  }

  // Open / Close Comic Tab Popup
  if (comicTab && comicPopup) {
    comicTab.addEventListener('click', (e) => {
      if (!e.target.closest('.comicseriesLinks a')) {
        comicPopup.classList.add('show');
      }
    });
  }

  if (closePopupBtn && comicPopup) {
    closePopupBtn.addEventListener('click', () => {
      comicPopup.classList.remove('show');
    });
  }

  // Comic Series Links Transition Hover fixing the issues
  const links = document.querySelectorAll('.comicseriesLinks a');

  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transition = '0.25s';
    });

    link.addEventListener('mouseleave', () => {
      link.style.transition = '0.75s';

      setTimeout(() => {
        link.style.transition = '0.25s';
      }, 0);
    });
  });

  comicPopup.addEventListener('click', (e) => {
    if (e.target === comicPopup) {
      closePopup();
    }
  });

  function closePopup() {
    comicPopup.classList.remove('show');
  }

  // ESC key close Comic Series Popup
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (comicPopup.classList.contains('show')) {
        comicPopup.classList.remove('show');
        return;
      }

      if (comicSeriesBg.classList.contains('show')) {
        comicSeriesBg.classList.remove('show');
        closeComicSeriesBtn.classList.remove('show');
        return;
      }
    }
  });
});