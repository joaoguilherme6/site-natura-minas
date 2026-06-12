// ======================
// MODO CLARO / ESCURO
// ======================

const temaBtn = document.getElementById("temaBtn");

if (temaBtn) {
    temaBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            temaBtn.innerHTML = "☀️ Modo Claro";
        } else {
            temaBtn.innerHTML = "🌙 Modo Escuro";
        }

    });
}


// ======================
// BUSCA DE PRODUTOS
// ======================

const produtos = [
    "Suplementos",
    "Encapsulados",
    "Ervas naturais",
    "Grãos a granel",
    "Doces naturais",
    "Whey Protein",
    "Chá Verde",
    "Granola"
];

const botaoBuscar = document.getElementById("buscarBtn");
const campoBusca = document.getElementById("busca");

if (botaoBuscar && campoBusca) {

    botaoBuscar.addEventListener("click", function(event) {

        event.preventDefault();

        let textoBusca = campoBusca.value.trim().toLowerCase();

        if (textoBusca === "") {
            alert("Digite um produto para pesquisar.");
            return;
        }

        let encontrado = produtos.find(produto =>
            produto.toLowerCase().includes(textoBusca)
        );

        if (encontrado) {
            alert("✅ Produto encontrado: " + encontrado);
        } else {
            alert("❌ Produto não encontrado.");
        }

    });

}


// ======================
// FORMULÁRIO DE CONTATO
// ======================

const formulario = document.getElementById("formContato");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "" || email === "" || mensagem === "") {

            alert("⚠️ Preencha todos os campos!");

            return;
        }

        document.getElementById("mensagemSucesso").innerHTML =
            "✅ Mensagem enviada com sucesso!";

        formulario.reset();

    });

}