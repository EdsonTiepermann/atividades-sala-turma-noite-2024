const prompt = require("prompt-sync")({sigint: true});

const {
    addBook,
    listBook,
    updateBook,
    deleteBook,
    findBook,
} = require("./modulo.js");

while (true) {
  console.log(`
    ---Cadastro de Livros---
    1.Cadastrar um livro
    2.Listar os livros registrados
    3.Atualizar um livro
    4.Deletar um livro
    5.Buscar livro
    0.Sair
    `);

  let opcao = Number(prompt("Digite uma opção: "));

  switch (opcao) {
    case 1:
        addBook();
      break;
    case 2:
        listBook();
      break;
    case 3:
        updateBook();
      break;
    case 4:
        deleteBook();
      break;
    case 5:
        findBook();
      break;
    case 0:
      console.log("Saindo do menu!");
      return;
    default:
      console.log("Vocẽ deve digitar uma opção válida!");
      break;
  }
}
