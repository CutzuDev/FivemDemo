const twoPointOneSecTimeout = setTimeout(blurAdd1, 2100);
const onePointOneSecTimeout = setTimeout(blurAdd2, 1100);
const twoSecTimeout = setTimeout(headerShadow, 2100);

function blurAdd1() {
  document.querySelector(".header__right__half").style.backdropFilter =
    "blur(3px)";
}

function blurAdd2() {
  document.querySelector("nav").style.backdropFilter = "blur(5px)";
}

function headerShadow() {
  document.querySelector(".header").style.boxShadow =
    "0px 0px 20px rgba(0, 1, 0, 0.75)";
}
