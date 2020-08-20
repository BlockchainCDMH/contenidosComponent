const listenAjaxContenidos = (APIURL, IDTema) => {
  let xhr;
  if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
  else xhr = new ActiveXObject("Microsoft.XMLHTTP");
  xhr.open("GET",`${APIURL}api/contenido/getContentbyMicrositeTopic/?tema=${IDTema}&micrositio=142`);
  xhr.onreadystatechange = function (data) {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
    const Contenidos = JSON.parse(data.target.response);
    clearTBody();
    createTBody(Contenidos);
      } else {
        console.log("Error al cargar los contenidos");
        clearTBody();
      };
    }
  };

  xhr.send();
};

const listenAjaxTemas = (APIURL, carrousel) => {
  let xhr;
  if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
  else xhr = new ActiveXObject("Microsoft.XMLHTTP");
  xhr.open("GET", `${APIURL}api/tema/getTopicsforList`);
  xhr.onreadystatechange = function (data) {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        console.log(xhr);
        const Tematicas = JSON.parse(data.target.response);
        let fragment = createcarrouselpage(Tematicas);
        carrousel.appendChild(fragment);
        listenersTemas(APIURL);
        listenerBuscar(Tematicas);
      } else dump("Error al cargar los Temas");
    }
  };
  xhr.send(null);
};
