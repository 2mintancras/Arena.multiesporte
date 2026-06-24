/* =========================================
script.js
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    iniciarBusca();  
    criarDarkMode();
    destacarBotaoAtivo();

});

/* =========================================
BUSCA
========================================= */

function iniciarBusca() {
    const input = document.getElementById("searchInput");
    if (!input) return;

    input.addEventListener("keyup", () => {
        const valor = input.value.toLowerCase();
        const cards = document.querySelectorAll(".post-card");
        cards.forEach(card => {
            const texto = card.textContent.toLowerCase();
            card.style.display = texto.includes(valor) ? "block" : "none";
        });
    });
}

/* =========================================
DARK MODE
========================================= */

function criarDarkMode() {
    const botao = document.createElement("button");
    botao.id = "darkModeBtn";
    botao.innerHTML = "🌙";
    document.body.appendChild(botao);

    botao.style.position = "fixed";
    botao.style.right = "20px";
    botao.style.bottom = "20px";
    botao.style.zIndex = "9999";
    botao.style.width = "55px";
    botao.style.height = "55px";
    botao.style.border = "none";
    botao.style.borderRadius = "50%";
    botao.style.cursor = "pointer";
    botao.style.fontSize = "22px";
    botao.style.background = "#0f172a";
    botao.style.color = "#fff";

    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark");
        botao.innerHTML = "☀️";
    }

    botao.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const ativo = document.body.classList.contains("dark");
        localStorage.setItem("darkMode", ativo);
        botao.innerHTML = ativo ? "☀️" : "🌙";
    });
}

/* =========================================
DESTAQUE DO BOTÃO ATIVO (TODAS AS PÁGINAS)
========================================= */

function destacarBotaoAtivo() {
    // Remove active de todos os botões
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    // Obtém o nome da página atual (ex: "futebol.html", "index.html", etc.)
    let pagina = window.location.pathname.split('/').pop();
    if (!pagina || pagina === '') pagina = 'index.html';

    // Mapeia página → seletor do botão
    const mapa = {
        'index.html': '.inicio-btn',
        'futebol.html': '.futebol',
        'f1.html': '.f1',
        'basquete.html': '.basquete',
        'volei.html': '.volei',
        'surf.html': '.surf',
        'tenis.html': '.tenis',
        'tenisdemesa.html': '.mesa',
        'xadrez.html': '.xadrez'
    };

    const seletor = mapa[pagina];
    if (seletor) {
        const botao = document.querySelector(seletor);
        if (botao) botao.classList.add('active');
    }
}