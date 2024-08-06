const prompt = require("prompt-sync")();

const db = [];

let ultimoId = 0;

function getIndice(id) {
  const indice = db.findIndex((el) => el.id == id);

  if (indice == -1) {
    console.log("ID inexistente");
  }
  return indice;
}

function model(id = ++ultimoId) {
  const nome = prompt("Digite o nome: ");

  if (nome != "") {
    return {
      id,
      nome,
    };
  }

  console.log("Dados inválidos");
}

function mostrar(id) {
    const el = db.find(el => el.id == id)

    return el
}

function criar() {
  const novo = model();

  if (novo) {
    db.push(novo);
    console.log("Registro criado com sucesso");
  }
}

function listar() {
  if (db.length == 0) {
    console.log("Nenhum registro encontrado");
    return false;
  }

  db.forEach((el) => console.log(el));
  return true;
}

function atualizar() {
  if (listar()) {
    const id = parseInt(prompt("Digite o ID: "));

    const indice = getIndice(id);

    if (indice != -1) {
      const novo = model(id);

      if (novo) {
        db[indice] = novo;
        console.log("Atualizado com sucesso");
      }
    }
  }
}

function remover() {
  if (listar()) {
    const id = parseInt(prompt("Digite o ID: "));

    const indice = getIndice(id);

    if (indice != -1) {
      db.splice(indice, 1);
      console.log("Removido com sucesso");
    }
  }
}

module.exports = {
  criar,
  listar,
  atualizar,
  remover,
  mostrar,
};