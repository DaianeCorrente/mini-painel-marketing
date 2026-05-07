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

    // Texto principal com nome + status + descrição
    const texto = document.createElement("span");
    let iconeStatus;

if (c.status === "ativa") {
  iconeStatus = "🟢";
} else {
  iconeStatus = "🔴";
}

texto.textContent = `${iconeStatus} ${c.nome} - ${c.status} | ${c.descricao}`

    item.appendChild(texto);

    // BOTÃO PAUSAR / ATIVAR
    const botaoStatus = document.createElement("button");

    if (c.status === "ativa") {
      botaoStatus.textContent = "Pausar";
    } else {
      botaoStatus.textContent = "Ativar";
    }

    botaoStatus.onclick = () => {
      if (c.status === "ativa") {
        c.status = "pausada";
      } else {
        c.status = "ativa";
      }

      renderizarCampanhas();
    };

    item.appendChild(botaoStatus);

    // BOTÃO DELETAR
    botaoDeletar.onclick = () => {

  const confirmar = confirm("Tem certeza que deseja excluir essa campanha?");

  if (confirmar) {
    campanhas = campanhas.filter(camp => camp.id !== c.id);

    renderizarCampanhas();
  }
    };

    item.appendChild(botaoDeletar);

    lista.appendChild(item);
  });
}