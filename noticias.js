// 1. Ruta de tu archivo local
const url = "/noticias.json";

async function cargarNoticiasLocales() {
  try {
    const respuesta = await fetch(url);

    // Verificamos si el archivo se leyó correctamente
    if (!respuesta.ok) {
      throw new Error(`Error en la petición: ${respuesta.status}`);
    }
    const datos = await respuesta.json();
    // Accedemos a la propiedad "articles" de tu JSON
    //const noticiasInvertidas = datos.articles.reverse();
    const ultimasCuatro = datos.articles.slice(-3).reverse();
    console.log(ultimasCuatro);

    desplegarNoticias(ultimasCuatro);
  } catch (error) {
    console.error("Error al cargar el archivo de noticias:", error);
  }
}

function desplegarNoticias(listaArticulos) {
  console.log(listaArticulos);
  const contenedor = document.getElementById("contenedor-noticia");
  // 2. Separar la primera (más reciente) de las otras tres
  const [noticiaPrincipal, ...otrasNoticias] = listaArticulos;

  // Limpiamos el contenedor
  contenedor.innerHTML = "";

  // 2. Iterar sobre cada objeto noticia del archivo JSON
  listaArticulos.forEach((noticia) => {
    // texto corto para tarjeta
    const textoCorto = noticia.description.substring(0, 100);

    // 3. Crear el diseño de la tarjeta usando los datos exactos del JSON
    const tarjeta = `
      <div class="tarjeta">
        <img src="${noticia.urlToImage}" alt="${noticia.title}">
        <small><i class="fa-regular fa-calendar"></i> ${noticia.date}</small>
        <h3>${noticia.title}</h3>
        <p>${textoCorto}...</p>
        <a class="btn-mas" href="${noticia.url}">Leer más <i class="fa-solid fa-arrow-right-long" style="font-size: 12px;"></i></a>
      </div>
    `;
    // 4. Inyectar la tarjeta al contenedor
    contenedor.innerHTML += tarjeta;
  });

  /*
  let html = `
      <a href="${noticiaPrincipal.url}" class="tarjeta noticia-principal">
        <img src="${noticiaPrincipal.urlToImage}" alt="${noticiaPrincipal.title}">
        <small>${noticiaPrincipal.date}</small>
        <h3>${noticiaPrincipal.title}</h3>
      </a>  
      `;

  // 6. Recorrer las otras 3 noticias e integrarlas (Clase pequeña)
  otrasNoticias.forEach((noticia) => {
    html += `
        <a href="${noticia.url}" class="tarjeta noticia-secundaria">
          <img src="${noticia.urlToImage}" alt="${noticia.title}">
          <small>${noticia.date}</small>
          <h3>${noticia.title}</h3>
        </a>
        `;
  });*/

  //html += `</div>`; // Cerrar el contenedor del bloque secundario
  // 7. Inyectar todo el HTML construido en la página
  //contenedor.innerHTML = html;
}

// Ejecutar la función automáticamente cuando cargue la página
//document.addEventListener("DOMContentLoaded", cargarNoticiasLocales);
// Iniciar el proceso
cargarNoticiasLocales();
