// == CODE COMPLETED ==

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

  function isMobile() {
    return window.matchMedia("(max-width: 550px)").matches;
  }

  const buttons = document.querySelectorAll('.characterButton');

  buttons.forEach((btn, index) => {
    btn.addEventListener('mouseenter', () => {
      const mobile = isMobile();

      btn.style.zIndex = '4';
      btn.style.backdropFilter = 'blur(10px)';
      btn.style.outline = '6px solid rgba(255, 255, 255, 0.15)';
      btn.style.borderRadius = '2px';
      btn.style.opacity = '1';
      btn.style.transition = '0.2s';
      btn.style.transform = mobile ? 'scale(1.1)' : 'scale(1.1) skew(-10deg)';

      // Skew all character images on desktop
      document.querySelectorAll('.characterImage').forEach(img => {
        img.style.transform = mobile ? 'none' : 'skew(10deg)';
        img.style.transition = '0.2s';
      });

      const hoveredImg = btn.querySelector('.characterImage');
      if (hoveredImg) hoveredImg.style.opacity = '1';

      buttons.forEach((b) => {
        if (b !== btn) {
          const img = b.querySelector('.characterImage');
          if (img) img.style.opacity = '0.5';
        }
      });

      const charName = btn.querySelector('.characterName');
      if (charName) {
        charName.style.transform = mobile ? 'translate(-50%, -50%) skew(0deg)' : 'translate(-50%, -50%) skew(10deg)';
      }

      // Position & transform other buttons
      buttons.forEach((b, i) => {
        if (b !== btn) {
          const distance = i - index;
          let transformValue = '';
          let opacityValue = '';
          let zIndexValue = '';

          if (mobile) {
            if (distance === -1 || distance === 1) {
              transformValue = 'scale(1.05)';
              opacityValue = '0.7';
              zIndexValue = '3';
            } else if (Math.abs(distance) === 2) {
              transformValue = 'scale(1)';
              opacityValue = '0.55';
              zIndexValue = '2';
            } else if (Math.abs(distance) === 3) {
              transformValue = 'scale(0.97)';
              opacityValue = '0.35';
              zIndexValue = '1';
            } else {
              transformValue = 'scale(0.93)';
              opacityValue = '0.25';
              zIndexValue = '0';
            }
          } else {
            if (distance === -1) {
              transformValue = 'scale(1.05) skew(-10deg) translateX(60px)';
              opacityValue = '0.7';
              zIndexValue = '3';
            }
            else if (distance === -2) {
              transformValue = 'scale(1) skew(-10deg) translateX(120px)';
              opacityValue = '0.55';
              zIndexValue = '2';
            }
            else if (distance === -3) {
              transformValue = 'scale(0.97) skew(-10deg) translateX(180px)';
              opacityValue = '0.35';
              zIndexValue = '1';
            }
            else if (distance === 1) {
              transformValue = 'scale(1.05) skew(-10deg) translateX(-60px)';
              opacityValue = '0.7';
              zIndexValue = '3';
            }
            else if (distance === 2) {
              transformValue = 'scale(1) skew(-10deg) translateX(-120px)';
              opacityValue = '0.55';
              zIndexValue = '2';
            }
            else if (distance === 3) {
              transformValue = 'scale(0.97) skew(-10deg) translateX(-180px)';
              opacityValue = '0.35';
              zIndexValue = '1';
            }
            if (Math.abs(distance) >= 4) {
              const direction = distance > 0 ? -240 : 240;
              transformValue = `scale(0.93) skew(0deg) translateX(${direction}px)`;
              opacityValue = '0.25';
              zIndexValue = '0';
            }
          }

          b.style.transform = transformValue;
          b.style.opacity = opacityValue;
          b.style.zIndex = zIndexValue;
          b.style.gap = '0px';
        }
      });
    });

    btn.addEventListener('mouseleave', () => {
      const mobile = isMobile();
      buttons.forEach(b => {
        b.style.transform = mobile ? 'scale(1) translateX(0)' : 'scale(1) skew(0deg) translateX(0)';
        b.style.outline = '2px solid rgba(255, 255, 255, 0.15)';
        b.style.backdropFilter = 'blur(0px)';
        b.style.borderRadius = '10px';
        b.style.zIndex = '0';
        b.style.opacity = '1';
        b.style.transition = '0.5s';

        const charName = b.querySelector('.characterName');
        if (charName) {
          charName.style.transform = 'translate(-50%, -50%) skew(0deg)';
        }

        document.querySelectorAll('.characterImage').forEach(img => {
          img.style.transition = '0.5s';
          img.style.opacity = '0.5';
          img.style.transform = 'none';
        });
      });
    });
  });

  // Popup for Ezekiel
  const ezekielPopup = document.getElementById('ezekielPopup');
  const closeEzekielPopupBtn = document.getElementById('closeEzekielPopup');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.dataset.character === 'Ezekiel') {
        ezekielPopup.classList.add('show');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeEzekielPopupBtn.addEventListener('click', () => {
    ezekielPopup.classList.remove('show');
    document.body.style.overflow = 'auto';
  });

  // BPM Slider for Ezekiel
  const bpmSlider = document.getElementById("bpmSlider");
  const bpmValue = document.getElementById("bpmValue");
  const bpmResult = document.getElementById("bpmResult");

  if (bpmSlider && bpmValue && bpmResult) {
    bpmSlider.addEventListener("input", () => {
      const bpm = parseInt(bpmSlider.value);
      bpmValue.textContent = bpm;
      bpmValue.style.fontWeight = "bold";

      let result = "";

      if (bpm < 170) result = "Chill Combat";
      else if (bpm < 200) result = "Rhythm Combat Core (RCC)";
      else if (bpm < 240) result = "RCC+";
      else if (bpm < 260) result = "Moderate Core (RCMC)";
      else if (bpm < 300) result = "Hard Core (RCHC)";
      else if (bpm < 400) result = "Hard Core+ (RCHC+)";
      else if (bpm < 420) result = "Death Core (RCDC)";
      else if (bpm < 500) result = "Death Core+ (RCDC+)";
      else if (bpm < 600) result = "Rhythm Maxim (RM)";
      else result = "Rhythm Salvation (RS)";

      bpmResult.textContent = result;
    });
  }

  // Escape priority: popup first, then page
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (ezekielPopup.classList.contains('show')) {
        ezekielPopup.classList.remove('show');
        document.body.style.overflow = 'auto';
      } else if (charDesignBg.classList.contains('show')) {
        closeCharDesign();
      }
    }
  });
});