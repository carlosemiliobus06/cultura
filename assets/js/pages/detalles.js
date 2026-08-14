// 1. Obtener el ID desde la URL (ej: noticia.html?id=2)
const parametrosURL = new URLSearchParams(window.location.search);
const idNoticia = parseInt(parametrosURL.get("id"));

console.log(idNoticia);
const url = "../../../noticias.json";

// 2. Cargar el archivo JSON y buscar la noticia
fetch(url)
  .then((respuesta) => respuesta.json())
  .then((articles) => {
    console.log(articles);
    // Buscar el objeto que coincida con el ID
    const noticiaEncontrada = articles.articles.find((n) => n.id === idNoticia);

    if (noticiaEncontrada) {
      // 3. Mostrar los datos en el HTML
      document.getElementById("titulo-noticia").innerText =
        noticiaEncontrada.title;
      document.getElementById("portada").src = noticiaEncontrada.urlToImage;
      document.getElementById("fecha").innerText = noticiaEncontrada.date;
      document.getElementById("contenido-noticia").innerText =
        noticiaEncontrada.description;
    } else {
      document.getElementById("titulo-noticia").innerText =
        "Noticia no encontrada";
    }
  })
  .catch((error) => console.error("Error al cargar el JSON:", error));
