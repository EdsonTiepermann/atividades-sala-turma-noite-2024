const prompt = require("prompt-sync")();

const atividades = [];

const modelo = () => {
  let atividade = {
    dia: undefined,
    descricao: [],
  };

  atividade.dia = prompt("Qual dia? ");

  while (true) {
    let resposta = prompt("O que fez nesse dia? ");

    if (resposta == "acabou") break;

    atividade.descricao.push(resposta);
  }

  return atividade;
};

const criar = () => {
  let atividade = modelo();

  atividades.push(atividade);

  console.log("Atividade criada");
};

const listar = () => {
  atividades.forEach((atividade, indice) => {
    console.log(`${indice + 1}. ${atividade.dia}: `);
    atividade.descricao.forEach((descricao) => console.log(`- ${descricao}`));
  });
};

const atualizar = () => {
  listar();

  let indice = prompt("Qual indice deseja atualizar? ");

  let atividade = modelo();

  atividades[--indice] = atividade;

  console.log("Atualizado");
};

const remover = () => {
  listar();

  let indice = prompt("Qual indice sera removido? ");

  atividades.splice(--indice, 1);

  console.log("Removido");
};

module.exports = {
  criar,
  atualizar,
  remover,
  listar,
};
