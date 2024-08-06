const prompt = require("prompt-sync")();

const corretora = require("./modulos/corretora.js");
const corretor = require("./modulos/corretor.js");

console.log("GERENCIAMENTO DE CORRETORA DE IMÓVEIS");

while (true) {
  console.log(`
        O que deseja gerenciar?
        1 - Corretora
        2 - Corretor
        0 - Sair
        `);

  const opcaoEntidade = prompt();

  let continuar;
  
  switch (opcaoEntidade) {
    case "1":
      continuar = true;

      while (continuar) {
        console.log(`
                    GERENCIAMENTO DE CORRETORA
    
                    1 - Criar
                    2 - Listar
                    3 - Atualizar
                    4 - Remover
                    5 - Sair
                    
                    `);

        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            corretora.criar();
            break;
          case "2":
            corretora.listar();
            break;
          case "3":
            corretora.atualizar();
            break;
          case "4":
            corretora.remover();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;
    case "2":
      continuar = true;
      while (continuar) {
        console.log(`
                    GERENCIAMENTO DE CORRETOR
    
                    1 - Criar
                    2 - Listar
                    3 - Atualizar
                    4 - Remover
                    5 - Sair
                    
                    `);

        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            corretor.criar();
            break;
          case "2":
            corretor.listar();
            break;
          case "3":
            corretor.atualizar();
            break;
          case "4":
            corretor.remover();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;
    case "0":
      process.exit(0);
      break;
    default:
      console.log("Opcão inválida");
      break;
  }
}