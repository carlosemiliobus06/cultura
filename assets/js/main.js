/** scroll encabezado */
window.addEventListener("scroll", () => {
  posicionarmenu();
});

function posicionarmenu() {
  const header = document.querySelector("#header");
  const altoHeader = header.offsetHeight;
  const menu = document.querySelector("#nav");

  if (window.scrollY > altoHeader) {
    menu.classList.add("fixed");
  } else {
    menu.classList.remove("fixed");
  }
}
/** menu responsivo */
const nav = document.querySelector("#navbar");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

setInterval(() => {
  moveToRight();
}, 5000);

/** slider banner */
const btnLeft = document.querySelector("#left"),
  btnRight = document.querySelector("#right"),
  slider = document.querySelector("#slider"),
  slider_section = document.querySelectorAll(".slide-section");

btnLeft.addEventListener("click", () => moveToLeft());
btnRight.addEventListener("click", () => moveToRight());

let operacion = 0,
  counter = 0,
  widthImg = 100 / slider_section.length;

function moveToRight() {
  if (counter >= slider_section.length - 1) {
    counter = 0;
    operacion = 0;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "none";
  } else {
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
  }
}
function moveToLeft() {
  counter--;
  if (counter < 0) {
    counter = slider_section.length - 1;
    operacion = widthImg * (slider_section.length - 1);
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "none";
  } else {
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
  }
}
