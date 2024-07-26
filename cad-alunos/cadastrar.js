const prompt = require("prompt-sync")();

const alunos = [
  {
    nomeAluno: "Edson",
    dataNascimento: 1988,
    curso: "dev",
    periodo: "noite",
  },
  {
    nomeAluno: "Aluno 1",
    dataNascimento: 2010,
    curso: "dev",
    periodo: "noite",
  },
];

const modelo = () => {
  const nomeAluno = prompt("Nome do aluno: ");
  const dataNascimento = parseInt(prompt("Ano de nascimento (AAAA): "), 10);
  const curso = prompt("Descrição do curso: ");
  const periodo = prompt("Qual o período: ");

  if (nomeAluno !== "" && curso !== "" && periodo !== "" && !isNaN(dataNascimento)) {
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
    //substituir pelo alunos.push(aluno);
    alunos.push(aluno);
    console.log("Aluno cadastrado com sucesso");
    console.log(alunos);
  }
};

// como Executar a função
criar();


