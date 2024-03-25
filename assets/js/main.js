// BOTÕES DIV BANNER
const botaoBannerAnterior = document.querySelector('.botao__banner-esquerda');
const botaoBannerProximo = document.querySelector('.botao__banner-direita');
const listaBannerCards = document.querySelector('.cabecalho__cards');
const itemBannerCards = listaBannerCards.getElementsByTagName('div');

// BOTÔES SEÇÃO BUILD
const botaoBuildAnterior = document.querySelector('.build__botao-esquerda');
const botaoBuildProximo = document.querySelector('.build__botao-direita');
const listaBuildCards = document.querySelector('.build__cards');
const itemBuildCards = listaBuildCards.getElementsByTagName('div');

// BOTÕES SEÇÃO TECH
const botaoTechAnterior = document.querySelector('.tech__botao-esquerda');
const botaoTechProximo = document.querySelector('.tech__botao-direita');
const listaTechCards = document.querySelector('.tech__cards');
const itemTechCards = listaTechCards.getElementsByTagName('div');

// BOTÕES SEÇÃO PROGRESSO
const botaoProdAnterior = document.querySelector('.progresso__botao-esquerda');
const botaoProdProximo = document.querySelector('.progresso__botao-direita');
const listaPordCards = document.querySelector('.progresso__cards');
const itemProdCards = listaPordCards.getElementsByTagName('div');

// Objeto para armazenar o currentIndex de cada seção
const currentIndexes = {
    'cabecalho': 0,
    'build': 0,
    'tech': 0,
    'progresso': 0
};

// CHAMANDO A FUNÇÃO NOS BOTÕES DOS CARDS DA DIV BANNER
botaoBannerProximo.addEventListener('click', () => {
    proximo(itemBannerCards, 'cabecalho');
})

botaoBannerAnterior.addEventListener('click', () => {
    anterior(itemBannerCards, 'cabecalho');
});
// FIM

// CHAMANDO A FUNÇÃO DOS BOTÕES DOS CARDS DA SEÇÃO BUILD
botaoBuildProximo.addEventListener('click', () => {
    proximo(itemBuildCards, 'build');
})

botaoBuildAnterior.addEventListener('click', () => {
    anterior(itemBuildCards, 'build');
});
// FIM

// CHAMANDO A FUNÇÃO DOS BOTÕES DOS CARDS DA SEÇÃO TECH
botaoTechProximo.addEventListener('click', () => {
    proximo(itemTechCards, 'tech');
});

botaoTechAnterior.addEventListener('click', () => {
    anterior(itemTechCards, 'tech');
});
// FIM

// CHAMANDO A FUNÇÃO DOS BOTÕES DOS CARDS DA SEÇÃO TECH
botaoProdProximo.addEventListener('click', () => {
    proximo(itemProdCards, 'progresso');
});

botaoProdAnterior.addEventListener('click', () => {
    anterior(itemProdCards, 'progresso');
});
// FIM

// FUNÇÕES PARA MUDAR OS CARDS
function proximo(botao, secao) {
    const cards = document.querySelectorAll(`.${secao}__cards > div`);
    botao[currentIndexes[secao]].style.display = 'none';
    currentIndexes[secao] = (currentIndexes[secao] + 1) % cards.length;
    botao[currentIndexes[secao]].style.display = 'flex';
}

function anterior(botao, secao) {
    const cards = document.querySelectorAll(`.${secao}__cards > div`);
    botao[currentIndexes[secao]].style.display = 'none';
    currentIndexes[secao] = (currentIndexes[secao] - 1 + cards.length) % cards.length;
    botao[currentIndexes[secao]].style.display = 'flex';
}
//FIM DAS FUNÇÕES