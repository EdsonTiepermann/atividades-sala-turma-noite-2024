const prompt = require("prompt-sync")();
const { criar, atualizar, listar, remover, menorMaior } = require("./backend.js");

while (true) {
  console.log(`
        1. Para adicionar um aluno
        2. Para listar alunos
        3. Para atualizar alunos
        4. Para remover alunos
        5. Para sair
        6. Quantidade de alunos menores e maiores de idade
        `);

  const opcao = parseInt(prompt("Escolha uma opção acima: "));

  switch (opcao) {
    case 1:
        criar()
      break;
    case 2:
        listar()
      break;
    case 3:
        atualizar()
      break;
    case 4:
        remover()
      break;
    case 5:
        process.exit()
    case 6:
        menorMaior()
      break;
    default:
        console.log("Opção inválida")
      break;
  }
}
