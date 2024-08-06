const prompt = require("prompt-sync")();

const pets = [];

const validarIndice = (indice) => indice >= 0 && indice < pets.length;

const modelo = function () {
  const especie = prompt("Espécie do pet: ");
  const racaPet = prompt("Raça do pet: ");
  const nomePet = parseFloat(prompt("Nome do pet: "));
  const pesoPet = parseFloat(prompt("Peso do pet: "));
  const servico = parseFloat(prompt("Serviço realizado: "));

  if (racaPet !== "" && nomePet !== "" && servico !== "" && !isNaN(pesoPet)) {
    return {
      especie,
      racaPet,
      nomePet,
      servico,
      pesoPet,
    };
  } else {
    console.log("Dados inválidos");
    return undefined;
  }
};

function criar() {
  const pet = modelo();

  if (pet !== undefined) {
    pets.push(pet);
    console.log("Pet cadastrado com sucesso");
  }
}

const listar = () => {
  if (pets.length === 0) {
    console.log("Nenhum pet encontrado");
    return false;
  } else {
    pets.forEach((pet, indice) => {
      console.log(`
            ${indice + 1}. 
            Raça do pet: ${pet.especie}
            Raça do pet: ${pet.racaPet}
            Nome do pet: ${pet.nomePet}
            Serviço realizado: ${pet.servico}
           Peso do pet: ${pet.pesoPet}
        `);
    });

    return true;
  }
};

const atualizar = () => {
  if (!listar()) {
    return;
  }

  const indice =
    parseInt(prompt("Qual o indice que deseja atualizar? "), 10) - 1;

  if (!validarIndice(indice)) {
    console.log("Índice inválido");
    return;
  }

  const pet = modelo();

  if (pet !== undefined) {
    pets[indice] = pet;
    console.log("Pet atualizado com sucesso");
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
    pets.splice(indice, 1);
    console.log("Pet removido com sucesso");
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
