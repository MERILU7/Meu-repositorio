// Banco de dados local de jogos
const jogos = [
  {
    nome: "The Legend of Zelda",
    descricao: "Um clássico jogo de aventura onde Link salva Hyrule da escuridão."
  },
  {
    nome: "Super Mario Odyssey",
    descricao: "Mario viaja por mundos diferentes em busca de Power Moons para salvar Peach."
  },
  {
    nome: "Dark Souls III",
    descricao: "Um jogo de RPG de ação com desafios intensos e mundo sombrio."
  },
  {
    nome: "Final Fantasy VII",
    descricao: "Um RPG épico sobre Cloud Strife e sua batalha contra a megacorporação Shinra."
  },
  {
    nome: "Minecraft",
    descricao: "Um jogo sandbox onde você constrói e explora mundos gerados aleatoriamente."
  }
];

// Função de pesquisa
function pesquisarJogo() {
  const input = document.getElementById("searchInput");
  const termo = input.value.trim().toLowerCase();
  const resultadoDiv = document.getElementById("resultado");

  if (termo === "") {
    resultadoDiv.innerHTML = "<p>Digite o nome de um jogo.</p>";
    return;
  }

  // Busca case-insensitive
  const jogoEncontrado = jogos.find(j => j.nome.toLowerCase().includes(termo));

  if (jogoEncontrado) {
    resultadoDiv.innerHTML = `
      <h2>${jogoEncontrado.nome}</h2>
      <p>${jogoEncontrado.descricao}</p>
    `;
  } else {
    resultadoDiv.innerHTML = `<p>Nenhum jogo encontrado com o nome "${termo}".</p>`;
  }
}