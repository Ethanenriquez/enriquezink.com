const linkbtn = document.getElementById("linkbtn");
const linkpopup = document.getElementById("linkopened");
const popupBackgroundBlur = document.getElementById("popupBackgroundBlur");
const navCheck = document.getElementById("check");

function showPopup() {
  linkpopup.classList.add("show");
  popupBackgroundBlur.classList.add("show");
  if (navCheck) navCheck.checked = false;
}

function hidePopup() {
  linkpopup.classList.remove("show");
  popupBackgroundBlur.classList.remove("show");
}

linkbtn.addEventListener("click", function (e) {
  e.preventDefault();
  showPopup();
});

document.addEventListener("click", function (e) {
  if (
    !linkpopup.contains(e.target) &&
    e.target !== linkbtn &&
    !popupBackgroundBlur.contains(e.target)
  ) {
    hidePopup();
  }
});

document.getElementById("closePopup").addEventListener("click", hidePopup);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    hidePopup();
  }
});