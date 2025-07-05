const linkbtn = document.getElementById("linkbtn");
const linkpopup = document.getElementById("linkopened");
const popupBackgroundBlur = document.getElementById("popupBackgroundBlur");
const closePopupBtn = document.getElementById("closePopup");
const navCheck = document.getElementById("check");
const aboutLink = document.getElementById("aboutbtn");
const aboutSection = document.getElementById("aboutopened");
const aboutBackground = document.getElementById("aboutBackground");
const closeAboutBtn = document.getElementById("closeAbout");

// Close navbar on link click (for mobile)
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navCheck.checked = false;
  });
});

// Show popup
linkbtn.addEventListener("click", (e) => {
  e.preventDefault();
  linkpopup.classList.add("show");
  popupBackgroundBlur.classList.add("show");
  document.body.style.overflow = "hidden";
});

// Hide popup
function hidePopup() {
  linkpopup.classList.remove("show");
  popupBackgroundBlur.classList.remove("show");
  setTimeout(() => {
    document.body.style.overflow = "";
  }, 500);
}

if (closePopupBtn) {
  closePopupBtn.addEventListener("click", hidePopup);
}

// Open About
aboutLink.addEventListener("click", (e) => {
  e.preventDefault();
  showAbout();
});

// Close About
closeAboutBtn.addEventListener("click", hideAbout);

// ESC key to close both popups
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hidePopup();
    hideAbout();
  }
});

function hideAbout() {
  aboutSection.classList.remove('show');
  aboutBackground.classList.remove('show');
  aboutBackground.setAttribute('aria-hidden', 'true');

  setTimeout(() => {
    document.body.style.overflow = '';
  }, 500); // let the 0.5s opacity transition finish
}

function showAbout() {
  aboutBackground.classList.add('show');
  aboutSection.classList.add('show');
  aboutBackground.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
