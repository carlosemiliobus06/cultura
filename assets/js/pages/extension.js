const encabezados = document.querySelectorAll(".contenedor .seccion");
const enlaces = document.querySelectorAll("#enlaces a");

const observer = new IntersectionObserver(
  (entradas, observador) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        const id = "#" + entrada.target.id;
        history.pushState({}, entrada.target.innetText, id);

        enlaces.forEach((enlace) => {
          enlace.classList.remove("activo");

          const href = enlace.attributes.href.nodeValue;
          if (href === id) {
            enlace.classList.add("activo");
          }
        });
      }
    });
  },
  {
    threshold: 1,
    rootMargin: "0px 0px -50% 0px",
  }
);

encabezados.forEach((encabezado) => {
  observer.observe(encabezado);
});

/*
const secciones = document.querySelectorAll(".seccion");
const navLink = document.querySelectorAll("#enlaces a");

window.onscroll = () => {
  secciones.forEach((sec) => {
    let top = window.screenY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeght;
    let id = sec.getAttribute("id");

    console.log(id);
    if (top >= offset && top < offset + height) {
      navLink.forEach((links) => {
        links.classList.remove("activo");
        document
          .querySelector("#enlace a[href*=" + id + "]")
          .classList.add("activo");
      });
    }
  });
};
*/
