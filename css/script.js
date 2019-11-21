// lazy load lib
var lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy"
});

console.log(
  "Credit to the photographers who contributed: Vlad Sargu on Unsplash, Randy Fath on Unsplash, E H on Unsplash and Anne Nygård on Unsplash"
);

// top navbar
const navbarButton = document.querySelector(".topNavbarButton");
const navbarMenu = document.querySelector(".topNavbar");
navbarButton.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});
// top navbar /
