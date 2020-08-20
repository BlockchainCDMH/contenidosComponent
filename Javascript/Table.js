  function createTBody(Contenidos) {
    for (const Contenido of Contenidos) {
      let tr = createTrItem(Contenido);
      addDataTable(tr);
    }
  }
  function clearTBody(){
    var t = $("#Table").DataTable();
    console.log('limpiamos tabla');
    t.rows().remove();
    t.clear().draw();
  }
  function createTrItem(Contenido) {
    const tr = document.createElement("tr");
    const td1 = createFirstTdItem(Contenido);
    const td2 = document.createElement("td");
    const span = document.createElement("span");
    let fecha =new Date(Contenido.fecha);
    fecha = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
    const td3 = document.createElement("td");
    const td3_img = document.createElement("img");
    const td4 = document.createElement("td");
    const td4_img = document.createElement("img");
    td3.classList.add("cursorPointer");
    td4.classList.add("cursorPointer");
    tr.classList.add("py-2", "bb-1");
    td3_img.classList.add("verDescripcion");
    td3_img.src = "img/ojoAzul.svg";
    td3_img.alt = "Ver";
    td4_img.classList.add("verDescripcion");
    td4_img.src = `img/${Contenido.tipoContenido}.svg`;
    td4_img.alt =
      Contenido.tipoContenido[0].toUpperCase() +
      Contenido.tipoContenido
        .substring(1, Contenido.tipoContenido.length)
        .toLowerCase();
    span.textContent = fecha;
  
    td2.appendChild(span);
    td3.appendChild(td3_img);
    td4.appendChild(td4_img);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    return tr;
  }
  function createFirstTdItem(Contenido) {
    let ArchivoTipo = Contenido.ruta.substring(
      Contenido.ruta.lastIndexOf(".") + 1,
      Contenido.ruta.length
      );
      if(ArchivoTipo=='ruta documento')console.log(Contenido);
    let nombre = Contenido.nombre;
    const td1 = document.createElement("td");
    const div1 = document.createElement("div");
    const div1_1 = document.createElement("div");
    const div1_2 = document.createElement("div");
    const img = document.createElement("img");
    const span = document.createElement("span");
  
    div1.classList.add("row");
    div1_1.classList.add("col-2", "first-td", "px-0");
    div1_2.classList.add("col-10", "px-0");
    span.textContent = nombre;
    span.classList.add("descripcion");
    img.src = `img/ext/${ArchivoTipo}.svg`;
    img.alt = `${ArchivoTipo}`;
    img.classList.add(`verDescripcion`);
  
    div1_1.appendChild(img);
    div1_2.appendChild(span);
    div1.appendChild(div1_1);
    div1.appendChild(div1_2);
    td1.appendChild(div1);
    return td1;
  }
  function addDataTable(tr) {
    let dtdata = [...tr.children];
    var t = $("#Table").DataTable();
    t.row
      .add([
        dtdata[0].innerHTML,
        dtdata[1].innerHTML,
        dtdata[2].innerHTML,
        dtdata[3].innerHTML,
      ])
      .draw(false);
  }
  function configureLenguage() {
    $("#Table").DataTable({
      language: {
        lengthMenu: "Mostrar _MENU_ registros por página",
        zeroRecords: "No hay contenidos para mostrar",
        info: "Mostrando pagina _PAGE_ de _PAGES_",
        infoEmpty: "No hay registros disponibles",
        search: "Filtrar",
        infoFiltered: "(filtrando de _MAX_ contenidos totales)",
        paginate: {
          first: "Primero",
          last: "Ultimo",
          next: "Siguiente",
          previous: "Anterior",
        },
      },
      lengthMenu: [[5, 10, 20, 50], [5, 10, 20, 50]]
    });
  }
  function filterStyle() {
    let a = document
      .querySelector("#Table_wrapper")
      .querySelector("#Table_filter")
      .querySelector("label");
    a.classList.add("label");
    let div1 = document.createElement("div");
    let h4 = document.createElement("h4");
    let div1_1 = document.createElement("div");
    let div1_2 = document.createElement("div");
    let input = a.childNodes[1];
    let img = document.createElement("a");
  
    div1.classList.add("row", "d-flex", "align-items-center");
  
    div1_1.classList.add("col-12", "col-sm-3");
    h4.classList.add("title");
    div1_2.classList.add("col-12", "col-sm-9");
    input.classList.add("input");
    h4.innerText = "Filtrar";
    div1_1.appendChild(h4);
    div1.appendChild(div1_1);
    a.childNodes[0].replaceWith(div1);
  }
  