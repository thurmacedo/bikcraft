//Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  if (document.location.href.includes(link.href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

//Ativar Items do Orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const element = document.getElementById(parametro);
  if (element) {
    element.checked = true;
  }
}

parametros.forEach(ativarProduto);

//Perguntas Frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventoPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventoPerguntas);

// Galeria de Bicicletas
const galeria = document.querySelectorAll(".bike-img img ");
const galeriaContainer = document.querySelector(".bike-img ");

function trocarImg(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventoGaleria(img) {
  img.addEventListener("click", trocarImg);
}

galeria.forEach(eventoGaleria);
