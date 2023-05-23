const currLanguageWrapper = document.getElementById("curr-language-wrapper");
const currLanguageImg = document.getElementById("curr-language-img");
const currLanguageText = document.getElementById("curr-language-text");
const arrowImg = document.getElementById("arrow-img");
const languagesList = document.getElementById("languages-list");
const enWrapper = document.getElementById("language-en-wrapper");
const usWrapper = document.getElementById("language-us-wrapper");
const byWrapper = document.getElementById("language-by-wrapper");
const kzWrapper = document.getElementById("language-kz-wrapper");
const ruWrapper = document.getElementById("language-ru-wrapper");

currLanguageWrapper.onclick = () => {
  if (languagesList.style.display === "flex") {
    languagesList.style.display = "none";
    arrowImg.style.background = "url(./assets/images/global/header/arrow.svg)";
  } else {
    languagesList.style.display = "flex";
    arrowImg.style.background =
      "url(./assets/images/global/header/arrow-reverse.svg)";
  }
};

const laptopL = 1024;
window.onresize = () => {
  if (this.outerWidth < laptopL) {
    languagesList.style.display = "none";
    arrowImg.style.background = "url(./assets/images/global/header/arrow.svg)";
  }
};

enWrapper.onclick = () => {
    currLanguageImg.src = "./assets/images/global/header/en.png";
    currLanguageText.textContent = "EN";
}
usWrapper.onclick = () => {
    currLanguageImg.src = "./assets/images/global/header/us.png";
    currLanguageText.textContent = "US";
}
byWrapper.onclick = () => {
    currLanguageImg.src = "./assets/images/global/header/by.png";
    currLanguageText.textContent = "BY";
}
kzWrapper.onclick = () => {
    currLanguageImg.src = "./assets/images/global/header/kz.png";
    currLanguageText.textContent = "KZ";
}
ruWrapper.onclick = () => {
    currLanguageImg.src = "./assets/images/global/header/ru.png";
    currLanguageText.textContent = "RU";
}
