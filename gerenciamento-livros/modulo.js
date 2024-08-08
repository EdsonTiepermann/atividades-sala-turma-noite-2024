const prompt = require("prompt-sync")({ sigint: true });

let livros = [];

let countId = 1;

function getIndice(id) {
  const indice = livros.findIndex((el) => el.id == id);

  if (indice == -1) {
    console.log("ID inexistente");
  }
  return indice;
}

const modelo = (id) => {
  let title = prompt("Título do livro: ");
  let author = prompt("Nome do autor: ");
  let year = parseInt(prompt("Ano de lançamento: "));
  let genre = prompt("Genero: ");

  let new_versions = [];

  while (true) {
    let year_new_version = prompt(
      "Possui novas versões, digite o nome ou 'fim' para parar: "
    );

    if (year_new_version === "fim") {
      break;
    } else {
      new_versions.push(year_new_version);
    }
  }

  if (title !== "" && author !== "" && genre != "" && !isNaN(year)) {
    if (id === undefined) {
      return {
        title,
        author,
        genre,
        year,
        new_versions,
        id: countId++,
      };
    } else {
      return {
        title,
        author,
        genre,
        year,
        new_versions,
        id,
      };
    }
  } else {
    console.log("Dados inválidos!");
    return undefined;
  }
};

const addBook = () => {
  let livro = modelo();

  if (livro !== undefined) {
    livros.push(livro);
    console.log("Livro adicionado adicionada");
  }
};

const listBook = () => {
  if (livros.length === 0) {
    console.log("Não possui nenhum livro registrada!");

    return false;
  } else {
    livros.forEach((livro) => {
      console.log(
        `ID:${livro.id}, 
            Título: ${livro.title}, 
            Autor: ${livro.author}, 
            Lançamento: ${livro.year},
            Genero: ${livro.genre}`
      );

      livro.new_versions.forEach((new_version, indice) => {
        console.log(`Nome versão ${indice + 1}: ${new_version}`);
      });
    });

    return true;
  }
};

const updateBook = () => {
  if (listBook()) {
    const id = parseInt(prompt("Qual ID deseja editar: "));

    const indice = livros.findIndex((livro) => id === livro.id);

    // const indice = getIndice(id);

    if (indice !== -1) {
      let livroEditado = modelo(id);

      if (livroEditado !== undefined) {
        livros[indice] = livroEditado;
        console.log("Livro Atualizada!");
      }
    } else {
      console.log("ID inexistente");
    }
  }
};

const deleteBook = () => {
  if (listBook()) {
    const id = parseInt(prompt("Qual ID deseja remover: "));

    const indice = livros.findIndex((livro) => id === livro.id);

    // const indice = getIndice(id);

    if (indice !== -1) {
      livros.splice(indice, 1);
      console.log("Livro removida!");
    } else {
      console.log("ID inexistente");
    }
  }
};

const findBook = () => {
  console.log(`
      --- Você deseja filtrar por: ---
      1. Título
      2. Autor
      3. Lançamento
      4. Gênero
    `);

  const opcao = parseInt(prompt("Escolha uma opção: "));

  let key;
  let value;

  switch (opcao) {
    case 1:
      key = "title";
      value = prompt("Digite o título do livro: ");
      break;
    case 2:
      key = "author";
      value = prompt("Digite o nome do autor: ");
      break;
    case 3:
      key = "year";
      value = parseInt(prompt("Digite o ano de lançamento: "));
      if (isNaN(value)) {
        console.log("Ano inválido");
        return;
      }
      break;
    case 4:
      key = "genre";
      value = prompt("Digite o gênero do livro: ");
      break;
    default:
      console.log("Opção inválida");
      return;
  }

  const results = livros.filter((livro) => livro[key] == value);

  if (results.length > 0) {
    results.forEach((livro) => {
      console.log(
        `ID:${livro.id}, 
          Título: ${livro.title}, 
          Autor: ${livro.author}, 
          Lançamento: ${livro.year},
          Gênero: ${livro.genre}`
      );

      livro.new_versions.forEach((new_version, indice) => {
        console.log(`Nome versão ${indice + 1}: ${new_version}`);
      });
    });
  } else {
    console.log("Nenhum livro encontrado");
  }
};

const funcoes = {
  addBook,
  listBook,
  updateBook,
  deleteBook,
  findBook,
};

// module.exports = funcoes;

module.exports = {
  addBook,
  listBook,
  updateBook,
  deleteBook,
  findBook,
};

// module.exports = addBook;
// module.exports = listBook;
// module.exports = updateBook;
// module.exports = deleteBook;
// module.exports = findbook;
