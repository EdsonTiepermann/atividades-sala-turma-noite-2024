const prompt = require("prompt-sync")();

const jogos = [];

const atualizacaoValida = (indice) => {
  return !(jogos.length === 1 && indice === 0);
};

const validarIndice = (indice) => indice >= 0 && indice < jogos.length;

const modelo = (indice = -1) => {
  const nome = prompt("Nome do jogo: ");
  const ano_lancamento = parseInt(prompt("Ano de lançamento: "), 10);
  const duracao = parseFloat(prompt("Duração média em horas: "));
  const preco = parseFloat(prompt("Preço: "));
  const estudio = prompt("Qual o estudio do jogo? ");
  let sequencia = -1;

  if (listar() && atualizacaoValida(indice)) {
    sequencia =
      parseInt(
        prompt("Qual é a sequência do jogo? Digite 0 se não houver"),
        10
      ) - 1;
  }

  if (
    nome !== "" &&
    ano_lancamento >= 1962 &&
    ano_lancamento <= 2024 &&
    duracao > 0 &&
    preco >= 0 &&
    estudio !== "" &&
    ((sequencia >= -1 && sequencia < jogos.length) || jogos.length === 0)
  ) {
    return {
      nome,
      ano_lancamento,
      duracao,
      preco,
      estudio,
      sequencia,
    };
  } else {
    console.log("Dados inválidos");
    return undefined;
  }
};

const criar = () => {
  const jogo = modelo();

  if (jogo !== undefined) {
    jogos.push(jogo);
    console.log("Jogo cadastrado com sucesso");
  }
};

const listar = () => {
  if (jogos.length === 0) {
    console.log("Nenhum jogo encontrado");
    return false;
  } else {
    jogos.forEach((jogo, indice) => {
      console.log(`
${indice + 1}. 
Nome: ${jogo.nome}
Ano de Lancamento: ${jogo.ano_lancamento}
Duração: ${jogo.duracao}
Preço: ${jogo.preco}
Estudio: ${jogo.estudio}
Sequência: ${jogo.sequencia}
`);
    });

    return true;
  }
};

const atualizar = () => {
  if (!listar()) {
    return;
  }

  const indice =
    parseInt(prompt("Qual o indice que deseja atualizar? "), 10) - 1;

  if (!validarIndice(indice)) {
    console.log("Índice inválido");
    return;
  }

  const jogo = modelo(indice);

  if (jogo !== undefined) {
    jogos[indice] = jogo;
    console.log("Jogo atualizado com sucesso");
  } else {
    console.log("Falha na atualização");
  }
};

const remover = () => {
  if (!listar()) {
    return;
  }

  const indice = parseInt(prompt("Qual indice você deseja remover? "), 10) - 1;

  if (validarIndice(indice)) {
    jogos.splice(indice, 1);
    console.log("Jogo removido com sucesso");
  } else {
    console.log("Falha na remoção");
  }
};

module.exports = {
  criar,
  atualizar,
  listar,
  remover,
};
