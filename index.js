// Lista de campanhas
let campanhas = [];

// Função para criar campanha
function criarCampanha(nome, descricao) {
  const novaCampanha = {
    id: campanhas.length + 1,
    nome: nome,
    descricao: descricao,
    status: "ativa"
  };

  campanhas.push(novaCampanha);
}

// Função para listar campanhas
function listarCampanhas() {
  console.log("📊 Campanhas:");
  campanhas.forEach(c => {
    console.log(`${c.id} - ${c.nome} (${c.status})`);
  });
}

function atualizarStatus(id,status) {
    let campanha=campanhas.find(c=> c.id === id);
    if (campanha) {
        campanha.status = status;
    } else {
        console.log("Campanha não encontrada");
    }
}
function buscarCampanha(nome) {
    let campanha=campanhas.find(c=> c.nome === nome)
    if (campanha) {
        console.log(campanha.nome)
    }
}
function listarCampanhasAtivas() {
  const ativas = campanhas.filter(c => c.status === "ativa");

  console.log("🟢 Campanhas ativas:");

  ativas.forEach(c => {
    console.log(`${c.id} - ${c.nome}`);
  });
}

// Testando
criarCampanha("Black Friday", "Promoção de novembro");
criarCampanha("Lançamento Produto", "Campanha de lançamento");

listarCampanhas();
atualizarStatus(3,"inativo");
listarCampanhas();
buscarCampanha("Black Friday");
listarCampanhasAtivas();




