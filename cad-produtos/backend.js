const prompt = require("prompt-sync")();

const produtos = [];

const validarIndice = (indice) => indice >= 0 && indice < produtos.length;

const modelo = function () {
  const nomeProduto = prompt("Nome do produto: ");
  const valorProduto = parseFloat(prompt("Valor do produto: "));

  if (nomeProduto !== "" && !isNaN(valorProduto)) {
    return {
      nomeProduto,
      valorProduto,
    };
  } else {
    console.log("Dados inválidos");
    return undefined;
  }
};

function criar() {
  const produto = modelo();

  if (produto !== undefined) {
    produtos.push(produto);
    console.log("Produto cadastrado com sucesso");
  }
}

const listar = () => {
  if (produtos.length === 0) {
    console.log("Nenhum produto encontrado");
    return false;
  } else {
    produtos.forEach((produto, indice) => {
      console.log(`
            ${indice + 1}. 
            Nome do produto: ${produto.nomeProduto}
            Valor do produto: ${produto.valorProduto}
        `);
    });

    return true;
  }
};

const atualizar = () => {
  if (!listar()) {
    return;
  }

  const indice = parseInt(prompt("Qual o indice que deseja atualizar? "), 10) - 1;

  if (!validarIndice(indice)) {
    console.log("Índice inválido");
    return;
  }

  const produto = modelo();

  if (produto !== undefined) {
    produtos[indice] = produto;
    console.log("Produto atualizado com sucesso");
  } else {
    console.log("Falha na atualização");
  }
};

const remover = () => {
  if (!listar()) {
    return;
  }

  const indice = parseInt(prompt("Qual indice você deseja remover? "), 10) - 1;

  if (validarIndice(indice)) {
    produtos.splice(indice, 1);
    console.log("Produto removido com sucesso");
  } else {
    console.log("Índice inválido");
  }
};

module.exports = {
  criar,
  atualizar,
  listar,
  remover,
};
