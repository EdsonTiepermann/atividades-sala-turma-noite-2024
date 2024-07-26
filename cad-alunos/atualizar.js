//Adicionar o prompt
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
  {
    nomeAluno: "Aluno 2",
    dataNascimento: 1999,
    curso: "dev",
    periodo: "tarde",
  },
];

const atualizar = () => {
  const indice = parseInt(prompt("Qual o indice que deseja atualizar? "), 10) - 1;

  const nomeAluno = prompt("Nome do aluno: ");
  const dataNascimento = parseInt(prompt("Ano de nascimento (AAAA): "), 10);
  const curso = prompt("Descrição do curso: ");
  const periodo = prompt("Qual o período: ");

  const aluno = {
    nomeAluno,
    dataNascimento,
    curso,
    periodo,
  };

  if (aluno !== undefined) {
    //retirar o push
    alunos[indice] = aluno;
    console.log("Aluno atualizado com sucesso");
    console.log(alunos);
  } else {
    console.log("Falha na atualização");
  }
};

atualizar();