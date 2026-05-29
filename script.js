// Função simples para interação com os cards clássicos
function mostrarInfo(nomeAnime) {
    alert(`Você clicou em um verdadeiro clássico: ${nomeAnime}!`);
}

// Dados dos melhores animes de 2026 (Array de Objetos)
const animes2026 = [
    {
        titulo: "Spy x Family (Temporada 3)",
        descricao: "A família Forger retorna com mais missões secretas, momentos hilários e a Anya lendo mentes para salvar o mundo."
    },
    {
        titulo: "Demon Slayer: Castelo Infinito",
        descricao: "O arco final adaptado com uma animação espetacular, trazendo as batalhas mais aguardadas contra os Luas Superiores."
    },
    {
        titulo: "Solo Leveling (Temporada 2)",
        descricao: "Jinwoo continua sua jornada ascendente, enfrentando masmorras ainda mais perigosas e revelando os segredos do Sistema."
    }
];

// Função para renderizar os cards de 2026 dinamicamente
function renderizarAnimes2026() {
    const grid2026 = document.getElementById('grid-2026');

    animes2026.forEach(anime => {
        // Criando os elementos HTML pelo JavaScript
        const card = document.createElement('div');
        card.classList.add('card');
        
        const titulo = document.createElement('h3');
        titulo.textContent = anime.titulo;
        
        const descricao = document.createElement('p');
        descricao.textContent = anime.descricao;

        // Montando o card
        card.appendChild(titulo);
        card.appendChild(descricao);

        // Adicionando evento de clique no card gerado dinamicamente
        card.addEventListener('click', () => {
            alert(`Destaque de 2026: ${anime.titulo} é imperdível!`);
        });

        // Inserindo o card na tela
        grid2026.appendChild(card);
    });
}

// Executa a função quando o documento terminar de carregar
document.addEventListener('DOMContentLoaded', renderizarAnimes2026);