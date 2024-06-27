// Para instalar o pacote prompt-sync no terminal: npm i prompt-sync, dentro da pasta de seu projeto
// Importa o pacote prompt-sync para poder ler as entradas do usuário
// const prompt = require('prompt-sync')();

// // Pergunta ao usuário para digitar a base
// let base = prompt('Qual será a base dessa exponenciação? ');

// // Pergunta ao usuário para digitar o expoente
// let expoente = prompt('E o expoente? ');

// let resultado
// let base_aux = 1

// for (let i = 0; i < +expoente; i++) {
//     resultado = 0
//     console.log(expoente);
//     for (let j = 0; j < +base; j++) {
//         resultado += +base_aux
//     console.log(base_aux);
//     }
//     base_aux = resultado
// }

// console.log(resultado)

const prompt = require('prompt-sync')();

// Pergunta ao usuário para digitar a base
let base = prompt('Qual será a base dessa exponenciação? ');

// Pergunta ao usuário para digitar o expoente
let expoente = prompt('E o expoente? ');

// Converte a base e o expoente para números inteiros
base = parseFloat(base);
expoente = parseFloat(expoente);

// Calcula a exponenciação
let resultado = Math.pow(base, expoente);

// Exibe o resultado
console.log(`O resultado de ${base} elevado a ${expoente} é ${resultado}`);
