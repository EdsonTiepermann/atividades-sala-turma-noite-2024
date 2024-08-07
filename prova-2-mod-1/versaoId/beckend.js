const prompt = require("prompt-sync")({sign: true});

let residencias = [];

let countId = 1;

function getIndice(id) {
  const indice = residencias.findIndex((el) => el.id == id);

  if (indice == -1) {
    console.log("ID inexistente");
  }
  return indice;
}

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

  if (bairro !== "" && rua !== "" && !isNaN(numero) && moradores.length > 0) {
    if (id === undefined) {
      return {
        bairro,
        rua,
        numero,
        moradores,
        id: countId++,
      };
    } else {
      return {
        bairro,
        rua,
        numero,
        moradores,
        id,
      };
    }
  } else {
    console.log("Dados inválidos!");

    return undefined;
  }
};

const adicionarResidencia = () => {
  let residencia = modelo();

  if (residencia !== undefined) {
    residencias.push(residencia);
    console.log("Residência adicionada");
    console.log(residencias);
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
        Número: ${residencia.numero}`
      );
      residencia.moradores.forEach((morador, indice) => {
        console.log(`Morador ${indice + 1}: ${morador}`);
      });
    });
    return true;
  }
};

const atualizarResidencia = () => {
  if (listarResidencia()) {
    const id = parseInt(prompt("Qual ID deseja editar: "));

    // const indice = residencias.findIndex((residencia) => id === residencia.id);

    const indice = getIndice(id);

    if (indice !== -1) {
      let residenciaEditada = modelo(id);
      
      if (residenciaEditada !== undefined) {
        residencias[indice] = residenciaEditada;
        console.log("Residência Atualizada!");
      }
    } else {
      console.log("ID inexistente");
    }
  }
};

const deletarResidencia = () => {
  if (listarResidencia()) {
    const id = parseInt(prompt("Qual ID deseja remover: "));

    const indice = residencias.findIndex((residencia) => id === residencia.id);

    // const indice = getIndice(id);

    if (indice !== -1) {
      residencias.splice(indice, 1);
      console.log("Residência removida!");
    } else {
      console.log("ID inexistente");
    }
  }
};

// const funcoes = {
//   adicionarResidencia,
//   listarResidencia,
//   atualizarResidencia,
//   deletarResidencia,
// };

// module.exports = funcoes;

module.exports = {
  adicionarResidencia,
  listarResidencia,
  atualizarResidencia,
  deletarResidencia,
};
