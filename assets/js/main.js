/** scroll encabezado 
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
}*/
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
