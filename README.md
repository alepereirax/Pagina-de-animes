# AnimeVerse — Anime Web Portfolio

Portfólio web interativo desenvolvido com HTML, CSS e JavaScript puro. O projeto reúne animes clássicos populares no Brasil e uma seleção de produções confirmadas para 2026.

A seção de 2026 não representa um ranking definitivo. Ela utiliza títulos presentes em programações e anúncios oficiais consultados em julho de 2026.

## Funcionalidades

- catálogo renderizado dinamicamente com JavaScript;
- busca por título com normalização de acentos;
- filtros por clássicos e destaques de 2026;
- modal nativo com informações adicionais;
- cards interativos criados sem uso de `innerHTML`;
- interface responsiva para computador, tablet e celular;
- navegação por teclado e foco visível;
- suporte à preferência por movimento reduzido;
- funcionamento sem bibliotecas ou dependências externas.

## Tecnologias utilizadas

- HTML5 semântico;
- CSS3 com Grid, Flexbox, variáveis e media queries;
- JavaScript moderno com arrays, objetos, funções e manipulação do DOM;
- Git e GitHub.

## Estrutura do projeto

~~~text
.
├── index.html
├── style.css
├── script.js
├── portfolio_animes.html
└── README.md
~~~

O arquivo `index.html` contém a versão principal. O arquivo `portfolio_animes.html` foi preservado como versão anterior para registrar a evolução do projeto.

## Como executar

1. Clone ou baixe o repositório.
2. Abra o arquivo `index.html` em um navegador moderno.

Não é necessário instalar pacotes ou compilar o projeto.

Opcionalmente, inicie um servidor local:

~~~bash
python -m http.server 8000
~~~

Depois, acesse `http://localhost:8000`.

## Publicação com GitHub Pages

1. Abra `Settings` no repositório.
2. Acesse `Pages`.
3. Em `Build and deployment`, selecione `Deploy from a branch`.
4. Escolha a branch `main` e a pasta `/ (root)`.
5. Clique em `Save`.

Após renomear o repositório para `anime-web-portfolio`, o endereço esperado será:

~~~text
https://alepereirax.github.io/anime-web-portfolio/
~~~

## Fontes da seleção de 2026

- [Crunchyroll — Spring 2026 Anime Season Lineup](https://www.crunchyroll.com/news/seasonal-lineup/2026/3/24/spring-anime-2026-crunchyroll)
- [The Apothecary Diaries — anúncio oficial da terceira temporada](https://kusuriyanohitorigoto.jp/news/1998/)

Conteúdo verificado em 20 de julho de 2026. Como calendários de lançamento podem sofrer alterações, as fontes oficiais devem ser consultadas para confirmação futura.

## Conceitos praticados

- estruturação semântica;
- design responsivo;
- renderização dinâmica;
- busca e filtragem de dados;
- tratamento de eventos;
- manipulação segura do DOM;
- uso do elemento `dialog`;
- acessibilidade de navegação e conteúdo;
- separação entre HTML, CSS e JavaScript.

## Melhorias futuras

- armazenar o catálogo em um arquivo JSON;
- adicionar ordenação alfabética;
- criar favoritos com `localStorage`;
- incluir testes automatizados;
- adicionar paginação quando o catálogo crescer;
- integrar uma API pública de animes, com tratamento de erros e cache.

## Aviso

Este é um projeto educacional, não oficial e sem finalidade comercial. Os títulos e personagens citados pertencem aos respectivos autores, editoras, estúdios e detentores de direitos.

## Autor

Desenvolvido por [Alexandre Pereira](https://github.com/alepereirax) como prática de desenvolvimento web front-end.
