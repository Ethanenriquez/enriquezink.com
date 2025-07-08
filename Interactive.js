// === Element references ===
const navCheck = document.getElementById("check");

// Link popup
const linkbtn = document.getElementById("linkbtn");
const linkpopup = document.getElementById("linkopened");
const popupBackgroundBlur = document.getElementById("popupBackgroundBlur");
const closePopupBtn = document.getElementById("closePopup");

// About popup
const aboutLink = document.getElementById("aboutbtn");
const aboutSection = document.getElementById("aboutopened");
const aboutBackground = document.getElementById("aboutBackground");
const closeAboutBtn = document.getElementById("closeAbout");

// Contact popup
const contactBtn = document.getElementById("contactbtn");
const contactPopup = document.getElementById("contactBackground");
const closeContact = document.getElementById("closeContact");

// === Utility functions ===

function disableScroll() {
  document.body.style.overflow = "hidden";
}

function enableScroll() {
  setTimeout(() => {
    document.body.style.overflow = "";
  }, 500);
}

// === Navbar mobile close on link click ===
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navCheck.checked = false;
  });
});

// === Back button toggle function ===
function toggleBackButton(buttonId, show) {
  const btn = document.getElementById(buttonId);
  if (!btn) return;
  if (show) {
    btn.classList.add("show");
    btn.style.pointerEvents = "auto";
    btn.setAttribute("tabindex", "0");
  } else {
    btn.classList.remove("show");
    btn.style.pointerEvents = "none";
    btn.setAttribute("tabindex", "-1");
  }
}

// === Link Popup ===
function showLinkPopup() {
  linkpopup.classList.add("show");
  popupBackgroundBlur.classList.add("show");
  disableScroll();
}

function hideLinkPopup() {
  linkpopup.classList.remove("show");
  popupBackgroundBlur.classList.remove("show");
  enableScroll();
}

linkbtn.addEventListener("click", e => {
  e.preventDefault();
  showLinkPopup();
});

closePopupBtn?.addEventListener("click", hideLinkPopup);

// === About Popup ===
function showAbout() {
  aboutBackground.classList.add("show");
  aboutSection.classList.add("show");
  aboutBackground.setAttribute("aria-hidden", "false");
  toggleBackButton("closeAbout", true);
  disableScroll();
}

function hideAbout() {
  aboutSection.classList.remove("show");
  aboutBackground.classList.remove("show");
  aboutBackground.setAttribute("aria-hidden", "true");
  toggleBackButton("closeAbout", false);
  enableScroll();
}

aboutLink.addEventListener("click", e => {
  e.preventDefault();
  showAbout();
});

closeAboutBtn.addEventListener("click", hideAbout);

// === Contact Popup ===
function showContact() {
  contactPopup.classList.add("open");
  contactPopup.setAttribute("aria-hidden", "false");
  toggleBackButton("closeContact", true);
  disableScroll();
}

function hideContact() {
  contactPopup.classList.remove("open");
  contactPopup.setAttribute("aria-hidden", "true");
  toggleBackButton("closeContact", false);
  enableScroll();
}

contactBtn?.addEventListener("click", e => {
  e.preventDefault();
  showContact();
});

closeContact?.addEventListener("click", hideContact);

// === Global keyboard handler for ESC key ===
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    hideLinkPopup();
    hideAbout();
    hideContact();
  }
});
