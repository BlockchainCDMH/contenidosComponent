
  function createcarrouselpage(Tematicas) {
  const indicators = document
  .querySelector("#carouselExampleIndicators")
  .querySelector("ol");
    let pages = Math.ceil(Tematicas.length / 5);
    let circles = newindicator(pages);
    for (const child of [...indicators.children]) {
      indicators.removeChild(child);
    }
    indicators.appendChild(circles);
    let TemasEachPage = [];
    for (let i = 1; i <= pages; i++) {
      for (let j = 0; j <= 4; j++) {
        let item = 5 * i + j - 5;
        if (item <= Tematicas.length) {
          TemasEachPage[j] = Tematicas[item];
        } else {
          TemasEachPage[j] = undefined;
        }
      }
      return createCarouselItem(i, TemasEachPage);
    }
  }
  function createCarouselItem(i, Tematicas) {
    const fragment = document.createDocumentFragment();
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div4 = document.createElement("div");
    for (const Tematica of Tematicas) {
      if (Tematica) {
        const Item = createItem(Tematica);
        div4.appendChild(Item);
      }
    }
    div1.classList.add("carousel-item");
    if (i == 1) {
      div1.classList.add("active");
    }
    div2.classList.add("row", "d-flex");
    div3.classList.add("contenido");
    div4.classList.add("grid-layout");
  
    div3.appendChild(div4);
    div2.appendChild(div3);
    div1.appendChild(div2);
    fragment.appendChild(div1);

    return fragment;
  }
  function createItem(Tematica) {
    texto=Tematica["descripcion"]
    const div1 = document.createElement("div");
    const div1_1 = document.createElement("div");
    const div1_2 = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");
  
    div1.classList.add("grid-content");
    div1.dataset.id=Tematica['idTema'];
    div1_1.classList.add("logo", "py-1", "px-0", "px-md-3");
    div1_2.classList.add("contenido");
    img.classList.add("grid-img-logo");
    img.src = `img/carpeta blanca.svg`;
    img.alt = `Tema`;
    p.innerText = `${texto}`;
    div1_1.appendChild(img);
    div1_2.appendChild(p);
    div1.appendChild(div1_1);
    div1.appendChild(div1_2);
    return div1;
  }
  function listenersTemas(APIURL) {
    let bibliotecas = Array.from(
      document
        .querySelector("#carouselExampleIndicators")
        .querySelectorAll(".grid-content")
    );
    for (const biblioteca of bibliotecas) {
      biblioteca.addEventListener("click", () => {
        removeselected();
        biblioteca.classList.add("selected");
        listenAjaxContenidos(APIURL,biblioteca.dataset.id)
      });
    }
    function removeselected() {
      for (const biblioteca of bibliotecas) {
        biblioteca.classList.remove("selected");
      }
    }
  }
  
  function removelistenersTemas() {
    let bibliotecas = Array.from(
      document
        .querySelector("#carouselExampleIndicators")
        .querySelectorAll(".grid-content")
    );
    for (const biblioteca of bibliotecas) {
      biblioteca.removeEventListener("click", () => {
        removeselected();
        biblioteca.classList.add("selected");
      });
    }
  }
  function newindicator(pages) {
    const fragment1 = document.createDocumentFragment();
    for (let i = 0; i < pages; i++) {
      const li = document.createElement("li");
      if (i == 0) {
        li.classList.add("active");
      }
      li.dataset.target = "#carouselExampleIndicators";
      li.dataset.slideTo = `${i}`;
      fragment1.appendChild(li);
    }
    return fragment1;
  }