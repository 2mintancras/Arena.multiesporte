/* =========================================
script.js
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    iniciarBusca();  

    criarDarkMode();

});

/* =========================================
BUSCA
========================================= */

function iniciarBusca() {

    const input =
    document.getElementById("searchInput");

    if (!input) return;

    input.addEventListener("keyup", () => {

        const valor =
        input.value.toLowerCase();

        const cards =
        document.querySelectorAll(".post-card");

        cards.forEach(card => {

            const texto =
            card.textContent.toLowerCase();

            if (texto.includes(valor)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

/* =========================================
DARK MODE
========================================= */

function criarDarkMode() {

    const botao =
    document.createElement("button");

    botao.id = "darkModeBtn";

    botao.innerHTML = "🌙";

    document.body.appendChild(botao);

    botao.style.position = "fixed";

    botao.style.right = "20px";

    botao.style.bottom = "90px";

    botao.style.zIndex = "9999";

    botao.style.width = "55px";

    botao.style.height = "55px";

    botao.style.border = "none";

    botao.style.borderRadius = "50%";

    botao.style.cursor = "pointer";

    botao.style.fontSize = "22px";

    botao.style.background = "#0f172a";

    botao.style.color = "#fff";

    if (
        localStorage.getItem("darkMode")
        === "true"
    ) {

        document.body.classList.add("dark");

        botao.innerHTML = "☀️";

    }

    botao.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const ativo =
        document.body.classList.contains("dark");

        localStorage.setItem(
            "darkMode",
            ativo
        );

        botao.innerHTML =
        ativo ? "☀️" : "🌙";

    });

}
