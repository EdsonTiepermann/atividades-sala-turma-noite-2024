const prompt = require("prompt-sync")();

const candidatos = [];

const modelo = () => {
  let voto = [];

  while (true) {
    let resposta = prompt("Digite seu voto (ou '5' para terminar): ");

    if (resposta === '5') break;

    voto.push(resposta);
  }

  return voto;
};

const criar = () => {
  let voto = modelo();
  candidatos.push(voto);
  console.log("Voto adicionado");
};

const listar = () => {
  console.log("Os votos são:");
  candidatos.forEach((voto, indice) => {
    console.log(`Voto ${indice + 1}:`);
    voto.forEach((descricao, i) => console.log(`  ${i + 1} - ${descricao}`));
  });
};

const atualizar = () => {
  listar();
  let indice = parseInt(prompt("Qual índice deseja atualizar? "), 10);

  if (indice > 0 && indice <= candidatos.length) {
    let voto = modelo();
    candidatos[indice - 1] = voto;
    console.log("Atualizado");
  } else {
    console.log("Índice inválido");
  }
};

const remover = () => {
  listar();
  let indice = parseInt(prompt("Qual índice será removido? "), 10);

  if (indice > 0 && indice <= candidatos.length) {
    candidatos.splice(indice - 1, 1);
    console.log("Removido");
  } else {
    console.log("Índice inválido");
  }
};

module.exports = {
  criar,
  atualizar,
  remover,
  listar,
};
