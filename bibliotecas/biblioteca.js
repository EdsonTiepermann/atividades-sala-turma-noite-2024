const biblioteca = [];
const generos = ["ação", "aventura", "ficção", "romance", "terror"];

const validacao = (livro) => {
  if (
    livro.paginas > 0 &&
    !isNaN(+livro.paginas) &&
    generos.includes(livro.genero)
  )
    return true;
  return false;
};

function create(livro) {
    if(validacao(livro)) {
        biblioteca.push(livro);
        console.log("livro adicionado");
    } else {
        console.log("dados inválidos");
    }
}

const read = () => {
  if (biblioteca.length === 0) console.log("Nenhum livro encontrado");
  biblioteca.forEach((livro, indice) => {
    console.log(indice + 1, livro);
  });
};

const update = function (livro, indice) {
  if (biblioteca[indice] && validacao(livro)) {
    biblioteca[indice] = livro;
    console.log("livro atualizado");
  } else {
    console.log("livro inexistente");
  }
};

const destroy = (indice) => {
  if (biblioteca[indice]) {
    biblioteca.splice(indice, 1);
    console.log("livro removido");
  } else {
    console.log("Livro inexistente");
  }
};

module.exports = {
  create,
  read,
  update,
  destroy,
};
