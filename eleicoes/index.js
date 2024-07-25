const prompt = require("prompt-sync")();

const { criar, atualizar, remover, listar } = require("./atividades.js");

while (true) {
  console.log(
    "O que deseja fazer?\n1 - Criar\n2 - Atualizar\n3 - Remover\n4 - Listar\n5 -  Encerrar a eleição\n",
    "Candidatos:\n1, 2, 3, 4\n"
  );
 
  let opcao = Number(prompt());

  switch (opcao) {
    case 1:
      criar();
      break;
    case 2:
      atualizar();
      break;
    case 3:
      remover();
      break;
    case 4:
      listar();
      break;
    case 5:
      process.exit();
      break;
    default:
      console.log("Opção inválida");
      break;
  }
}