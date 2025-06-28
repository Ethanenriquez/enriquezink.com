const linkbtn = document.getElementById("linkbtn");
const linkpopup = document.getElementById("linkopened");
const popupBackgroundBlur = document.getElementById("popupBackgroundBlur");
const closePopupBtn = document.getElementById("closePopup");
const navCheck = document.getElementById("check");

// When the Navigation is pressed. The Navbar is Closed
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navCheck.checked = false;
  });
});

// Click “Links” button
linkbtn.addEventListener("click", (e) => {
  e.preventDefault();
  showPopup();
});

// Show the popup
function showPopup() {
  linkpopup.classList.add("show");
  popupBackgroundBlur.classList.add("show");
  document.body.style.overflow = "hidden";
}

// Hide the popup
function hidePopup() {
  linkpopup.classList.remove("show");
  popupBackgroundBlur.classList.remove("show");
  document.body.style.overflow = "";
}

// Press ESC to close popup
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hidePopup();
  }
});

// Close button (X)
if (closePopupBtn) {
  closePopupBtn.addEventListener("click", hidePopup);
}

const aboutLink = document.getElementById("aboutbtn");
const aboutSection = document.getElementById("aboutopened");
const aboutBackground = document.getElementById("aboutBackground");

// When you click "About"
aboutLink.addEventListener("click", (e) => {
  e.preventDefault();
  aboutBackground.classList.add("show");
  aboutSection.classList.add("show");
  document.body.style.overflow = "hidden";
});

// Key Eascape to Close on all Navigations and Buttons
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hidePopup(); // closes links popup
    aboutBackground.classList.remove("show");
    aboutSection.classList.remove("show");
    document.body.style.overflow = "";
  }
});

document.getElementById('closeAbout').addEventListener('click', () => {
  aboutBackground.classList.remove('show');
  aboutSection.classList.remove('show');
  document.body.style.overflow = "";
});
