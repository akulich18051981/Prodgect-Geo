const currLanguageImg = document.querySelector(".header__language-flag-img");
const currLanguageText = document.querySelector(".header__curr-language");
const arrowImg = document.querySelector(".header__choose-language-btn");
const languagesList = document.querySelector(".header__languages-list");

document
  .querySelector(".header__language-wrapper")
  .addEventListener("click", () => {
    if (window.getComputedStyle(languagesList, null).display === "flex") {
      languagesList.classList.remove("appeared-flex");
      arrowImg.classList.remove("header__choose-language-btn_arrow-top");
      languagesList.classList.add("hidden-element");
      arrowImg.classList.add("header__choose-language-btn_arrow-bottom");
    } else {
      languagesList.classList.remove("hidden-element");
      arrowImg.classList.remove("header__choose-language-btn_arrow-bottom");
      languagesList.classList.add("appeared-flex");
      arrowImg.classList.add("header__choose-language-btn_arrow-top");
    }
  });

const laptopL = 1024;
window.addEventListener("resize", () => {
  if (this.outerWidth < laptopL) {
    languagesList.classList.remove("appeared-flex");
    arrowImg.classList.remove("header__choose-language-btn_arrow-top");
    languagesList.classList.add("hidden-element");
    arrowImg.classList.add("header__choose-language-btn_arrow-bottom");
  }
});

document
  .querySelector(".header__language-item-wrapper_en")
  .addEventListener("click", () => {
    currLanguageImg.src = "./assets/images/global/header/en.png";
    currLanguageText.textContent = "EN";
  });
document
  .querySelector(".header__language-item-wrapper_us")
  .addEventListener("click", () => {
    currLanguageImg.src = "./assets/images/global/header/us.png";
    currLanguageText.textContent = "US";
  });
document
  .querySelector(".header__language-item-wrapper_by")
  .addEventListener("click", () => {
    currLanguageImg.src = "./assets/images/global/header/by.png";
    currLanguageText.textContent = "BY";
  });
document
  .querySelector(".header__language-item-wrapper_kz")
  .addEventListener("click", () => {
    currLanguageImg.src = "./assets/images/global/header/kz.png";
    currLanguageText.textContent = "KZ";
  });
document
  .querySelector(".header__language-item-wrapper_ru")
  .addEventListener("click", () => {
    currLanguageImg.src = "./assets/images/global/header/ru.png";
    currLanguageText.textContent = "RU";
  });
