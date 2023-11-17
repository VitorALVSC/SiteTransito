const BotaoMenu = document.querySelector('.icone-menu-lateral')
const Menu = document.querySelector('.menu-lateral')

const OpcaoPaginaInicial = document.querySelector('#opcaoPaginaInicial')
const PaginaInicial = document.querySelector('.pagina-inicial')

const OpcaoTransitoPatoBranco = document.querySelector('#opcaoTransitoPatoBranco')
const TransitoPatoBranco = document.querySelector('.transito-pato-branco')

const OpcaoTransitoBrasileiro = document.querySelector('#opcaoTransitoBrasileiro')
const TransitoBrasileiro = document.querySelector('.transito-brasileiro')

const OpcaoTransitoMundial = document.querySelector('#opcaoTransitoMundial')
const TransitoMundial = document.querySelector('.transito-mundial')

const OpcaoRecomendacoesTransito = document.querySelector('#opcaoRecomendacoesTransito')
const RecomendacoesNoTransito = document.querySelector('.recomendacoes-no-transito')

const BtnTopo = document.querySelector("#btnTop")

//Realiza a abertura e fechamento do menu lateral
BotaoMenu.addEventListener('click', () => {
    Menu.classList.toggle('menu-lateral-click')
});

//Navegação entre as opções do menu
OpcaoPaginaInicial.addEventListener('click', () => {
    PaginaInicial.setAttribute('style', 'display:flex')
    TransitoPatoBranco.setAttribute('style', 'display:none')
    TransitoBrasileiro.setAttribute('style', 'display:none')
    TransitoMundial.setAttribute('style', 'display:none')
    RecomendacoesNoTransito.setAttribute('style', 'display:none')
})

OpcaoTransitoPatoBranco.addEventListener('click', () => {
    PaginaInicial.setAttribute('style', 'display:none')
    TransitoPatoBranco.setAttribute('style', 'display:flex')
    TransitoBrasileiro.setAttribute('style', 'display:none')
    TransitoMundial.setAttribute('style', 'display:none')
    RecomendacoesNoTransito.setAttribute('style', 'display:none')
})

OpcaoTransitoBrasileiro.addEventListener('click', () => {
    PaginaInicial.setAttribute('style', 'display:none')
    TransitoPatoBranco.setAttribute('style', 'display:none')
    TransitoBrasileiro.setAttribute('style', 'display:flex')
    TransitoMundial.setAttribute('style', 'display:none')
    RecomendacoesNoTransito.setAttribute('style', 'display:none')
})

OpcaoTransitoMundial.addEventListener('click', () => {
    PaginaInicial.setAttribute('style', 'display:none')
    TransitoPatoBranco.setAttribute('style', 'display:none')
    TransitoBrasileiro.setAttribute('style', 'display:none')
    TransitoMundial.setAttribute('style', 'display:flex')
    RecomendacoesNoTransito.setAttribute('style', 'display:none')
})

OpcaoRecomendacoesTransito.addEventListener('click', () => {
    PaginaInicial.setAttribute('style', 'display:none')
    TransitoPatoBranco.setAttribute('style', 'display:none')
    TransitoBrasileiro.setAttribute('style', 'display:none')
    TransitoMundial.setAttribute('style', 'display:none')
    RecomendacoesNoTransito.setAttribute('style', 'display:flex')
})

//Faz voltar ao topo da página ao clicar
BtnTopo.addEventListener("click", function() {
    window.scrollTo(0,0)
})

document.addEventListener('scroll',ocultar)

function ocultar(){
    if(window.scrollY > 10){
        BtnTopo.style.display = "flex"
    } else {
        BtnTopo.style.display = "none"
    }
}

ocultar()