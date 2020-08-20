// ************************************ constantes ************************************
APIURL= 'https://pruebaescuelasecretarias.ivolucion.com/';

const carrousel = document
  .querySelector("#carouselExampleIndicators")
  .querySelector(".carousel-inner");
let Tematicas = [];
let Contenidos = [];

// ************************************ Ejecución Normal del programa ************************************
listenAjaxTemas(APIURL,carrousel);
listenAjaxContenidos(APIURL,1);

configureLenguage();
filterStyle();

//************************************ Para El botón buscar ************************************


function listenerBuscar(Tematicas) {
  document.querySelector("#buscarTemas").addEventListener("keyup", (e) => {
    let Tema = document.querySelector("#buscarTemas").value;
    let newTematicas = Tematicas.filter((Tematica) =>
      Tematica.descripcion.includes(Tema)
    );
    removelistenersTemas();
    for (const child of [...carrousel.children]) {
      carrousel.removeChild(child);
    }
    let fragment = createcarrouselpage(newTematicas);
    carrousel.appendChild(fragment);
    listenersTemas();
  });
}

