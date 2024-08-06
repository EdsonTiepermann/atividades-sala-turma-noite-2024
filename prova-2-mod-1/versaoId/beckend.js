const prompt = require("prompt-sync")();

let residencias = [];

let countId = 1;

const modelo = (id) => {
  let bairro = prompt("Nome do bairro: ");
  let rua = prompt("Nome da sua rua: ");
  let numero = parseInt(prompt("Número da sua casa: "));

  let moradores = [];

  while (true) {
    let morador = prompt(
      "Nome de quem mora na residência? (Caso tenha finalizado, digite 'fim') "
    );

    if (morador === "fim") {
      break;
    } else {
      moradores.push(morador);
    }
  }

  if (
    bairro != "" &&
    rua != "" &&
    !isNaN(numero) &&
    moradores != "" &&
    id === undefined
  ) {
    return {
      bairro,
      rua,
      numero,
      moradores,
      id: countId++,
    };
  } else if (id != undefined) {
    return {
      bairro,
      rua,
      numero,
      moradores,
      id,
    };
  } else {
    console.log("Dados inválidos!");
    return false;
  }
};

const adicionarResidencia = () => {
  let residencia = modelo();
  if (residencia === undefined) {
    return;
  } else {
    residencias.push(residencia);
    console.log("Residencia adicionada");
  }
};

const listarResidencia = () => {
  if (residencias.length === 0) {
    console.log("Não possui nenhuma residência registrada!");
    return false;
  } else {
    residencias.forEach((residencia) => {
      console.log(
        `ID:${residencia.id}, 
            Bairro: ${residencia.bairro}, 
            Rua: ${residencia.rua}, 
            Número: ${residencia.numero}`
      );
      residencia.moradores.forEach((morador, indice) => {
        console.log(`Morador ${indice + 1}: ${morador}`);
      });
    });
  }
  return true;
};

const atualizarResidencia = () => {
  if (listarResidencia()) {
    const id = prompt("Qual ID deseja editar: ");

    const indice = residencias.findIndex((residencia) => id == residencia.id);

    if (indice != -1 && indice != undefined) {
      let residenciaEditada = modelo();
      if (residenciaEditada === false) {
        return;
      } else {
        residencias[indice] = residenciaEditada;
        console.log("Residência Atualizada!");
      }
    } else {
      console.log("ID inexistente");
    }
  } else {
    return;
  }
};

const deletarResidencia = () => {
  if (listarResidencia()) {
    const id = prompt("Qual ID deseja remover: ");

    const indice = residencias.findIndex((residencia) => id == residencia.id);

    if (indice != -1 && indice != undefined) {
      residencias.splice(indice, 1);
      console.log("Residência removida!");
    } else {
      console.log("ID inexistente");
    }
  } else {
    return;
  }
};

funcoes = {
  adicionarResidencia,
  listarResidencia,
  atualizarResidencia,
  deletarResidencia,
};

module.exports = funcoes;
