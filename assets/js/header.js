const botaoMenu = document.getElementById('botao-menu');
const botaoFechar = document.getElementById('botao-menu-fechar');

botaoMenu.addEventListener('click', fecharAbrirMenu);
botaoFechar.addEventListener('click', fecharAbrirMenu);

// FUNÇÃO PARA ABRIR MENU
function fecharAbrirMenu() {
    const menu = document.querySelector('.menu__lista');

    menu.classList.toggle('mostrar');
    botaoMenu.classList.toggle('hidden');
}
// FIM DA FUNÇÃO