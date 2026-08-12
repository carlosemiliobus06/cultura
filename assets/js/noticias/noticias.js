// 1. Ruta de tu archivo local
const url = "./noticias.json";

async function cargarNoticiasLocales() {
  try {
    const respuesta = await fetch(url);

    // Verificamos si el archivo se leyó correctamente
    if (!respuesta.ok) {
      throw new Error(`Error en la petición: ${respuesta.status}`);
    }
    const datos = await respuesta.json();
    console.log(datos);
    // Accedemos a la propiedad "articles" de tu JSON
    desplegarNoticias(datos.articles);
  } catch (error) {
    console.error("Error al cargar el archivo de noticias:", error);
  }
}

function desplegarNoticias(listaArticulos) {
  const contenedor = document.getElementById("contenedor-noticia");

  // Limpiamos el contenedor
  contenedor.innerHTML = "";

  // 2. Iterar sobre cada objeto noticia del archivo JSON
  listaArticulos.forEach((noticia) => {
    // 3. Crear el diseño de la tarjeta usando los datos exactos del JSON
    const tarjeta = `
      <div class="tarjeta">
        <img src="${noticia.urlToImage}" alt="${noticia.title}">
        <h3>${noticia.title}</h3>
        <p>${noticia.description}</p>
        <a href="${noticia.url}" target="_blank">Leer más</a>
      </div>
    `;
    // 4. Inyectar la tarjeta al contenedor
    contenedor.innerHTML += tarjeta;
  });
}

// Iniciar el proceso
cargarNoticiasLocales();
