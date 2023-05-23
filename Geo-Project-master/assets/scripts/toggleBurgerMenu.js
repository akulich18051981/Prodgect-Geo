const headerNavInfo = document.getElementById("header-nav-info");
const burgerMenuBtn = document.getElementById("burger-menu-btn");
burgerMenuBtn.onclick = () => {
  if (headerNavInfo.style.display === "flex") {
    headerNavInfo.style.display = "none";
  } else {
    headerNavInfo.style.display = "flex";
  }
};
const tabletL = 768;
window.onresize = () => {
  if (this.outerWidth > tabletL) {
    headerNavInfo.style.display = "flex";
  } else {
    headerNavInfo.style.display = "none";
  }
}
