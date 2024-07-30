const prompt = require("prompt-sync")(true);
const { create, read, destroy, update } = require("./biblioteca.js");

while (true) {
  console.log(`1. Cadastrar livro
2. Listar livros
3. Atualizar livro
4. Deletar livro
5. Sair
`);

  let opcao = prompt("O que deseja fazer? ");
  let nome, autor, paginas, genero;

  switch (opcao) {
    case "1":
      nome = prompt("Digite o nome do livro: ");
      autor = prompt("Digite o autor do livro: ");
      paginas = prompt("Digite a quantidade de páginas do livro: ");
      genero = prompt("Digite o genero do livro: ");

      create({
        nome,
        autor,
        paginas,
        genero,
      });
      break;
    case "2":
      read();
      break;
    case "3":
      read();

      indice = prompt("Digite o indice do livro: ");
      nome = prompt("Digite o nome do livro: ");
      autor = prompt("Digite o autor do livro: ");
      paginas = prompt("Digite a quantidade de páginas do livro: ");
      genero = prompt("Digite o genero do livro: ");

      update(
        {
          nome,
          autor,
          paginas,
          genero,
        },
        --indice
      );
      break;
    case "4":
      read();

      indice = prompt("Digite o indice do livro: ");

      destroy(--indice);
      break;
    case "5":
      console.log("Programa encerrado");
      process.exit();
      break;
    default:
      console.log("Opção inválida");
      break;
  }
}
