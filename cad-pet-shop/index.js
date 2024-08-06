const prompt = require("prompt-sync")();
const { criar, atualizar, listar, remover } = require("./backend.js");

while (true) {
  console.log(`
        1. Para cadastrar pet
        2. Para listar pet
        3. Para atualizar pet
        4. Para remover pet
        5. Para sair
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
    default:
        console.log("Opção inválida")
      break;
  }
}
