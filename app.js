const blurtimeout = setTimeout(blurAdd, 2150);

function blurAdd() {
  document.querySelector(".header__right__half").style.backdropFilter =
    "blur(3px)";
}
