// Exercício de cadastro de aluno com NodeJs


// Crie um sistema de cadastro de alunos, receba do usuário o nome do aluno, idade do aluno, e o curso que ele frequenta, 
// salve essas informações em um array para que possa realizar quantos cadastros for necessário, 
// crie um menu verificando se quer cadastrar um novo aluno, apresentar os alunos cadastrados, ou sair do programa.

// Após isso adicione esse conteúdo em seu repositório no git/github

const prompt = require("prompt-sync")({ sigint: true });

let alunos = [];

while (true) {
  console.log(`
    //     === Menu de Cadastro de Alunos ===
    //     1. Adicionar uma novo aluno
    //     2. Listar todas as consultas
    //     0. Sair
    //     `);

  let opcao = prompt("Escolha uma opção: ");

  if (opcao === "1") {
    let aluno = prompt("Nome do aluno: ");
    let idade = prompt("Idade do aluno: ");
    let curso = prompt("Curso: ");

    alunos.push({ aluno, idade, curso });
    console.log("Aluno adicionado com sucesso!", alunos);
  } else if (opcao === "2") {
    if (alunos.length === 0) {
      console.log("Nenhuma consulta agendada.");
      break;
    } else {
      alunos.forEach((alunos, index) => {
        console.log(
          `${index + 1}. ${alunos.aluno} - ${alunos.idade} - ${alunos.data} - ${
            alunos.curso
          }`
        );
      });
    }
  } else if (opcao === "0") {
    console.log("Saindo do sistema. Até logo!");
    break;
  } else {
    console.log("Opção inválida. Tente novamente.");
    break;
  }
}