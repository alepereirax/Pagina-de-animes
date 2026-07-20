const animes = [
  {
    titulo: "Os Cavaleiros do Zodíaco",
    categoria: "classico",
    icone: "♐",
    etiqueta: "Clássico no Brasil",
    cor: "rgba(255, 212, 71, 0.18)",
    resumo:
      "Armaduras, constelações e batalhas que ajudaram a ampliar a presença dos animes na televisão brasileira.",
    descricao:
      "A história acompanha jovens Cavaleiros que protegem Atena usando armaduras inspiradas em constelações. A exibição brasileira nos anos 1990 transformou a série em uma referência cultural para uma geração."
  },
  {
    titulo: "Dragon Ball Z",
    categoria: "classico",
    icone: "🐉",
    etiqueta: "Ação e aventura",
    cor: "rgba(255, 143, 31, 0.18)",
    resumo:
      "Uma das séries de ação mais reconhecidas pelo público brasileiro, marcada por evolução, rivalidades e grandes confrontos.",
    descricao:
      "Dragon Ball Z acompanha Goku e seus aliados em batalhas que aumentam progressivamente de escala. A combinação de treinamento, transformações e superação tornou a obra uma referência mundial."
  },
  {
    titulo: "Naruto",
    categoria: "classico",
    icone: "🍥",
    etiqueta: "Ninjas e superação",
    cor: "rgba(255, 111, 48, 0.17)",
    resumo:
      "Uma jornada sobre rejeição, amizade, persistência e amadurecimento no universo dos ninjas.",
    descricao:
      "Naruto Uzumaki busca reconhecimento enquanto enfrenta conflitos pessoais e ameaças ao seu mundo. A série combina ação com temas de pertencimento, legado e construção de identidade."
  },
  {
    titulo: "Pokémon",
    categoria: "classico",
    icone: "⚡",
    etiqueta: "Aventura e coleção",
    cor: "rgba(255, 212, 71, 0.16)",
    resumo:
      "A jornada de treinadores e criaturas que conectou anime, jogos, cartas e diferentes gerações de fãs.",
    descricao:
      "Pokémon acompanha viagens, amizades e batalhas em um universo habitado por criaturas com diferentes habilidades. A franquia tornou-se um fenômeno multiplataforma."
  },
  {
    titulo: "Sailor Moon",
    categoria: "classico",
    icone: "🌙",
    etiqueta: "Magia e heroínas",
    cor: "rgba(255, 79, 145, 0.17)",
    resumo:
      "Uma referência do gênero de garotas mágicas, com amizade, transformação e protagonismo feminino.",
    descricao:
      "Sailor Moon combina vida cotidiana, romance e batalhas contra forças do mal. Seu grupo de heroínas e sua identidade visual influenciaram diferentes gerações."
  },
  {
    titulo: "Yu Yu Hakusho",
    categoria: "classico",
    icone: "🔥",
    etiqueta: "Mundo espiritual",
    cor: "rgba(75, 220, 166, 0.16)",
    resumo:
      "Ação, humor e conflitos espirituais em uma série lembrada também pela marcante dublagem brasileira.",
    descricao:
      "A obra acompanha Yusuke Urameshi, um jovem que passa a atuar como detetive espiritual. A narrativa combina investigações, torneios, drama e comédia."
  },
  {
    titulo: "Witch Hat Atelier",
    categoria: "2026",
    icone: "🪄",
    etiqueta: "Temporada 2026",
    cor: "rgba(128, 112, 255, 0.18)",
    resumo:
      "Fantasia sobre aprendizado, criatividade e os segredos por trás do uso da magia.",
    descricao:
      "A adaptação acompanha Coco, uma jovem fascinada por magia que descobre uma realidade diferente daquela que conhecia. O título integra a programação oficial de animes de 2026."
  },
  {
    titulo: "Re:ZERO — Season 4",
    categoria: "2026",
    icone: "⏳",
    etiqueta: "Temporada 2026",
    cor: "rgba(87, 229, 238, 0.17)",
    resumo:
      "Continuação da fantasia dramática protagonizada por Subaru e marcada por escolhas, consequências e reinícios temporais.",
    descricao:
      "A quarta temporada dá continuidade aos conflitos de Subaru em um universo de fantasia no qual cada decisão pode produzir consequências profundas. A temporada consta na programação oficial de 2026."
  },
  {
    titulo: "Daemons of the Shadow Realm",
    categoria: "2026",
    icone: "☯",
    etiqueta: "Temporada 2026",
    cor: "rgba(255, 255, 255, 0.11)",
    resumo:
      "Fantasia sobrenatural com mistério, poderes complementares e conflitos entre diferentes mundos.",
    descricao:
      "A produção adapta uma história de fantasia e ação construída em torno de entidades sobrenaturais e relações familiares. O anime integra a programação oficial de 2026."
  },
  {
    titulo: "MARRIAGETOXIN",
    categoria: "2026",
    icone: "🧪",
    etiqueta: "Temporada 2026",
    cor: "rgba(160, 255, 113, 0.15)",
    resumo:
      "Ação e comédia em uma história que mistura habilidades de assassino, relacionamentos e situações improváveis.",
    descricao:
      "MARRIAGETOXIN combina confrontos, humor e desenvolvimento de relações pessoais. A adaptação aparece entre as estreias confirmadas da temporada de 2026."
  },
  {
    titulo: "The Apothecary Diaries — Season 3",
    categoria: "2026",
    icone: "🌿",
    etiqueta: "Outubro de 2026",
    cor: "rgba(99, 222, 159, 0.16)",
    resumo:
      "Mistério histórico guiado pela observação, pelo conhecimento medicinal e pela inteligência de Maomao.",
    descricao:
      "A terceira temporada foi anunciada oficialmente para outubro de 2026. A série se diferencia ao combinar investigação, medicina e intrigas palacianas."
  }
];

const grade = document.querySelector("#grade-animes");
const busca = document.querySelector("#busca");
const filtros = [...document.querySelectorAll(".filtro")];
const statusResultado = document.querySelector("#resultado-status");
const modal = document.querySelector("#modal-anime");
const modalCategoria = document.querySelector("#modal-categoria");
const modalTitulo = document.querySelector("#modal-titulo");
const modalDescricao = document.querySelector("#modal-descricao");
const anoAtual = document.querySelector("#ano-atual");

let filtroAtivo = "todos";
let termoBusca = "";

function normalizarTexto(texto) {
  return texto
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}

function criarElemento(tag, classe, texto) {
  const elemento = document.createElement(tag);

  if (classe) {
    elemento.className = classe;
  }

  if (texto) {
    elemento.textContent = texto;
  }

  return elemento;
}

function abrirDetalhes(anime) {
  modalCategoria.textContent = anime.etiqueta;
  modalTitulo.textContent = anime.titulo;
  modalDescricao.textContent = anime.descricao;
  modal.showModal();
}

function criarCard(anime) {
  const card = criarElemento("button", "card-anime");
  card.type = "button";
  card.style.setProperty("--cor-card", anime.cor);
  card.setAttribute("aria-label", "Ver detalhes de " + anime.titulo);

  const conteudo = criarElemento("div");
  const icone = criarElemento("span", "card-icone", anime.icone);
  const titulo = criarElemento("h3", "", anime.titulo);
  const resumo = criarElemento("p", "", anime.resumo);
  const etiqueta = criarElemento("span", "card-etiqueta", anime.etiqueta);

  icone.setAttribute("aria-hidden", "true");
  conteudo.append(icone, titulo, resumo);
  card.append(conteudo, etiqueta);
  card.addEventListener("click", () => abrirDetalhes(anime));

  return card;
}

function obterResultados() {
  const termoNormalizado = normalizarTexto(termoBusca);

  return animes.filter((anime) => {
    const correspondeFiltro =
      filtroAtivo === "todos" || anime.categoria === filtroAtivo;
    const correspondeBusca = normalizarTexto(anime.titulo).includes(termoNormalizado);

    return correspondeFiltro && correspondeBusca;
  });
}

function renderizarCatalogo() {
  const resultados = obterResultados();
  grade.replaceChildren();

  if (resultados.length === 0) {
    const mensagem = criarElemento(
      "p",
      "sem-resultados",
      "Nenhum anime corresponde aos filtros selecionados."
    );
    grade.append(mensagem);
  } else {
    resultados.forEach((anime) => grade.append(criarCard(anime)));
  }

  const sufixo = resultados.length === 1 ? "título encontrado" : "títulos encontrados";
  statusResultado.textContent = resultados.length + " " + sufixo + ".";
}

busca.addEventListener("input", (evento) => {
  termoBusca = evento.target.value.trim();
  renderizarCatalogo();
});

filtros.forEach((botao) => {
  botao.addEventListener("click", () => {
    filtroAtivo = botao.dataset.filtro;

    filtros.forEach((item) => {
      const selecionado = item === botao;
      item.classList.toggle("ativo", selecionado);
      item.setAttribute("aria-pressed", String(selecionado));
    });

    renderizarCatalogo();
  });
});

modal.addEventListener("click", (evento) => {
  const limites = modal.getBoundingClientRect();
  const foraDoConteudo =
    evento.clientX < limites.left ||
    evento.clientX > limites.right ||
    evento.clientY < limites.top ||
    evento.clientY > limites.bottom;

  if (foraDoConteudo) {
    modal.close();
  }
});

anoAtual.textContent = String(new Date().getFullYear());
renderizarCatalogo();
