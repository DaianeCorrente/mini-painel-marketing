let campanhas = [];

function adicionarCampanha() {
    const nomeInput = document.getElementById("nome");
    const descricaoInput = document.getElementById("descricao");

    const nome = nomeInput.value;
    const descricao = descricaoInput.value;

    if (nome === "" || descricao === "") {
        alert("Preencha todos os campos");
        return;
    }

    const novaCampanha = {
        id: campanhas.length + 1,
        nome,
        descricao,
        status: "ativa"
    };

    campanhas.push(novaCampanha);

    nomeInput.value = "";
    descricaoInput.value = "";

    renderizarCampanhas();
}

function renderizarCampanhas() {
    const lista = document.getElementById("lista");

    lista.innerHTML = "";

    campanhas.forEach(c => {
        const item = document.createElement("li");

        item.textContent = `${c.nome} - ${c.status}`;

        lista.appendChild(item);
    
    });
}