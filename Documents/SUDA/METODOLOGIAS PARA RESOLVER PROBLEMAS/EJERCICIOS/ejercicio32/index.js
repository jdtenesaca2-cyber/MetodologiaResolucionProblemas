'use strict';

const container = document.getElementById("container");

const list = [
  {
    id: 1,
    fullname: "Adam Gontier",
    url: "https://wallpaperbat.com/img/3589905-ricardo-irving-adam-gontier-three-days-grace-trish-deviant-devil-may-cry-dhl-albert-wesker-bayonetta-fetish-model.png"
  },
  {
    id: 2,
    fullname: "Noah Sebastian",
    url: "https://th.bing.com/th/id/R.83b5c0c6333c3d778282933339650052?rik=gYRxEMVo6iZGhw&pid=ImgRaw&r=0"
  },
  {
    id: 3,
    fullname: "Michael Jackson",
    url: "https://facts.net/wp-content/uploads/2023/07/31-facts-about-michael-jackson-1688465572.jpg"
  }
];

// recorrer el array
list.forEach(persona => {

  const card = document.createElement("div");
  card.style.border = "1px solid #ccc";
  card.style.padding = "10px";
  card.style.width = "320px";
  card.style.marginBottom = "10px";

  const img = document.createElement("img");
  img.src = persona.url;
  img.alt = persona.fullname;
  img.style.width = "100%";

  const titulo = document.createElement("h2");
  titulo.textContent = persona.fullname;

  card.appendChild(img);
  card.appendChild(titulo);

  container.appendChild(card);
});
