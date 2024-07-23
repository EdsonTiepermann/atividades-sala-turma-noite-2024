const prompt = require('prompt-sync')();
const soma = require('./soma');
const sub = require('./sub');

let op = +prompt('Escolha uma opção: ');
let num1 = +prompt('Digite o primeiro número: ');
let num2 = +prompt('Digite o segundo número: ');

if (op == 1) {
    console.log(sub(num1, num2));
} else if (op == 2) {
    soma(num1, num2);
} else {
    console.log('Opção inválida. Tente novamente.');
}