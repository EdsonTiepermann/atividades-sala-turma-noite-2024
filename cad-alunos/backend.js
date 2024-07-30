const prompt = require("prompt-sync")();

const alunos = [];

const validarIndice = (indice) => indice >= 0 && indice < alunos.length;

const modelo = () => {
  const nomeAluno = prompt("Nome do aluno: ");
  const dataNascimento = parseInt(prompt("Ano de nascimento (AAAA): "), 10);
  const curso = prompt("Descrição do curso: ");
  const periodo = prompt("Qual o período: ");

  if (nomeAluno !== "" && curso !== "" && periodo !== "") {
    return {
      nomeAluno,
      dataNascimento,
      curso,
      periodo,
    };
  } else {
    console.log("Dados inválidos");
    return undefined;
  }
};

const criar = () => {
  const aluno = modelo();

  if (aluno !== undefined) {
    alunos.push(aluno);
    console.log("Aluno cadastrado com sucesso");
  }
};

const listar = () => {
  if (alunos.length === 0) {
    console.log("Nenhum aluno encontrado");
    return false;
  } else {
    alunos.forEach((aluno, indice) => {
      console.log(`
            ${indice + 1}. 
            nomeAluno: ${aluno.nomeAluno}
            Data de nascimento: ${aluno.dataNascimento}
            Curso: ${aluno.curso}
            Período: ${aluno.periodo}
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

  const aluno = modelo(indice);

  if (aluno !== undefined) {
    alunos[indice] = aluno;
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
    alunos.splice(indice, 1);
    console.log("Jogo removido com sucesso");
  } else {
    console.log("Falha na remoção");
  }
};

const menorMaior = () => {
  const anoAtual = new Date().getFullYear();
  let menoresDe18 = 0;
  let maioresDe18 = 0;

  alunos.forEach((aluno) => {
    const idade = anoAtual - aluno.dataNascimento;
    if (idade < 18) {
      menoresDe18++;
    } else {
      maioresDe18++;
    }
  });

  console.log(`Quantidade de alunos menores de 18 anos: ${menoresDe18}`);
  console.log(`Quantidade de alunos maiores de 18 anos: ${maioresDe18}`);
};

module.exports = {
  criar,
  atualizar,
  listar,
  remover,
  menorMaior,
};
