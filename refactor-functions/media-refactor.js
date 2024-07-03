const prompt = require("prompt-sync")({ sigint: true });

let qtdMedia = parseInt(prompt("Digite quantos números serão calculados na média: "), 10);

media(qtdMedia);

function media(qtdMedia) {
  let notas = [];
  let soma = 0;

  for (let i = 0; i < qtdMedia; i++) {
    let num = parseFloat(prompt(`Digite a nota ${i + 1}: `));
    notas.push(num);
    soma += num;
  }

  let media = soma / notas.length;

  console.log(`A média é ${media}`);
}
