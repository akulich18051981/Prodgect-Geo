const headerNavInfo = document.querySelector(".header__nav-info-wrapper");
document
  .querySelector(".header__burger-menu-btn")
  .addEventListener("click", () => {
    if (window.getComputedStyle(headerNavInfo, null).display === "flex") {
      headerNavInfo.classList.remove("appeared-flex");
      headerNavInfo.classList.add("hidden-element");
    } else {
      headerNavInfo.classList.remove("hidden-element");
      headerNavInfo.classList.add("appeared-flex");
    }
  });
const tabletL = 768;
window.addEventListener("resize", () => {
  if (this.outerWidth > tabletL) {
    headerNavInfo.classList.remove("hidden-element");
    headerNavInfo.classList.remove("appeared-flex");
  }
});
