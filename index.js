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

// Testando
criarCampanha("Black Friday", "Promoção de novembro");
criarCampanha("Lançamento Produto", "Campanha de lançamento");

listarCampanhas();
