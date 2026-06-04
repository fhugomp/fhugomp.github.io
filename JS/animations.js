//  ANIMACAO TYPE WRITER NOME
const textoNome = "Hugo Mendes";
const elementoDigitado = document.getElementById("nome-digitado");
let indexLetra = 0;

function animacaoTypewriter() {
    if (indexLetra < textoNome.length) {
        elementoDigitado.innerHTML += textoNome.charAt(indexLetra);
        indexLetra++;
        setTimeout(animacaoTypewriter, 150);
    } else {
        setTimeout(() => {
            // Apaga tudo instantaneamente
            elementoDigitado.innerHTML = ""; 
            indexLetra = 0;
            // Chama a função novamente
            animacaoTypewriter(); 
        }, 2900);
    }
}

window.addEventListener("load", () => {
    // Garante que comece vazio
    elementoDigitado.innerHTML = ""; 
    // Espera meio segundo ao carregar a página antes de começar
    setTimeout(animacaoTypewriter, 500); 
});

const observadorScroll = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            // Quando o elemento entra na tela, adiciona a animação
            entrada.target.classList.add('visivel');
        } else {
            // Quando o elemento sai da tela, remove a animação para poder repetir depois
            entrada.target.classList.remove('visivel');
        }
    });
}, {
    threshold: 0.1
});



//  ANIMACAO SCROLL PARA ELEMENTOS COM A CLASSE "animar-fade"
const elementosParaAnimar = document.querySelectorAll('.animar-fade');
elementosParaAnimar.forEach((elemento) => observadorScroll.observe(elemento));



//  ANIMACAO DE TEMA CLARO/ESCUTO COM LOCALSTORAGE
const btnTema = document.getElementById('btn-tema');
const iconeTema = document.getElementById('icone-tema');
const corpoSite = document.body;

// 1. Checa se o usuário já havia escolhido o tema claro antes
if (localStorage.getItem('tema-portfolio') === 'claro') {
    corpoSite.classList.add('tema-claro');
    // Troca o Sol pela Lua
    iconeTema.textContent = 'dark_mode'; 
}

// 2. Evento de clique para alternar
btnTema.addEventListener('click', () => {
    corpoSite.classList.toggle('tema-claro');

    if (corpoSite.classList.contains('tema-claro')) {
        iconeTema.textContent = 'dark_mode';
        // Salva a escolha
        localStorage.setItem('tema-portfolio', 'claro'); 
    } else {
        iconeTema.textContent = 'light_mode';
        // Salva a escolha
        localStorage.setItem('tema-portfolio', 'escuro');
    }
});