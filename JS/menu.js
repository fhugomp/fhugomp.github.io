const btnMenu = document.getElementById('btn-menu-mobile');
const btnFechar = document.getElementById('btn-fechar-menu');
const menuNav = document.getElementById('menu-navegacao');

// Abre o menu
btnMenu.addEventListener('click', () => {
    menuNav.classList.add('ativo');
});

// Fecha o menu pelo X
btnFechar.addEventListener('click', () => {
    menuNav.classList.remove('ativo');
});

// Fecha o menu ao clicar em qualquer item da lista
const links = document.querySelectorAll('.link-nav');
links.forEach(link => {
    link.addEventListener('click', () => {
        menuNav.classList.remove('ativo');
    });
});

/* ==========================================
   BOTÃO VOLTAR AO TOPO
   ========================================== */
const btnTopo = document.getElementById('btn-topo');

// Mostra o botão quando rolar a página para baixo (passar de 300px)
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnTopo.classList.remove('oculto');
    } else {
        btnTopo.classList.add('oculto');
    }
});

// Faz a página subir suavemente ao clicar
btnTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});