const prompt = require("prompt-sync")();
const { criar, atualizar, listar, remover } = require("./backend.js");

while (true) {
  console.log(`
        1. Para adicionar um produto
        2. Para listar produtos
        3. Para atualizar produtos
        4. Para remover produto
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
