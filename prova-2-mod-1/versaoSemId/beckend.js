const prompt = require("prompt-sync")({sigint: true});

let residencias = [];

const modelo = () => {
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

  if ( bairro != "" && rua != "" && !isNaN(numero) && moradores != "") {
    return {
      bairro,
      rua,
      numero,
      moradores,
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
    residencias.forEach((residencia, index) => {
      console.log(
        `Index: ${index +1}
        zBairro: ${residencia.bairro}, 
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
    const indice = prompt("Qual indice deseja editar: ") -1;

    if (indice != -1 && indice != undefined) {
      let residenciaEditada = modelo();

      if (residenciaEditada === undefined) {
        return;
      } else {
        residencias[indice] = residenciaEditada;
        console.log("Residência Atualizada!");
      }
    } else {
      console.log("indice inexistente");
    }
  } else {
    return;
  }
};

const deletarResidencia = () => {
  if (listarResidencia()) {
    const indice = prompt("Qual indice deseja remover: ") -1;

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
