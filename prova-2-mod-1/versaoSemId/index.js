const prompt = require("prompt-sync")({sigint: true});

const {
  adicionarResidencia,
  listarResidencia,
  atualizarResidencia,
  deletarResidencia,
} = require("./beckend.js");

while (true) {
  console.log(`
    ---Cadastro de Residencias---
    1.Adicionar um cadastro de residência
    2.Listar os cadastros registrados
    3.Atualizar um cadastro
    4.Deletar um cadastro
    0.Sair
    `);

  let opcao = Number(prompt("Digite uma opção: "));

  switch (opcao) {
    case 1:
      adicionarResidencia();
      break;
    case 2:
      listarResidencia();
      break;
    case 3:
      atualizarResidencia();
      break;
    case 4:
      deletarResidencia();
      break;
    case 0:
      console.log("Saindo do menu!");
      return;
    default:
      console.log("Vocẽ deve digitar uma opção válida!");
      break;
  }
}
