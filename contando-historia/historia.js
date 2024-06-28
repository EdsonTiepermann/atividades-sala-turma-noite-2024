const prompt = require('prompt-sync')({sigint: true});

let historia = prompt('Escreva uma história: ');

let palavras = historia.split(' ');
//console.log(palavras);

let numeroDePalavras = palavras.length;

let frequenciaPalavras = {};

for (let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i].toLowerCase();

    palavra = palavra.replace(/[.,!?;:()]/g, '');

    if (frequenciaPalavras[palavra]) {
        frequenciaPalavras[palavra]++;
    } else {
        frequenciaPalavras[palavra] = 1;
    }
    //objeto é acessado objeto.chave, quando você sabe qual é a chave
    //quando vc descobre o nome da chave em tempo de execução vc pode utilizar da forma acima, ex. frequenciaPalavras[palavra], onde `palavra` é a 
    //variável que tem o valor atual.
}
console.log(`Número total de palavras: ${numeroDePalavras}`);

console.log('Frequência das palavras:');
for (let palavra in frequenciaPalavras) {
    console.log(`${palavra}: ${frequenciaPalavras[palavra]}`);
}

//for.. in : loop utilizado para iterar um obj
//primeiro parâmetro é a variável a cada loop recebe o nome da propriedade 
//segundo parâmetro é o objeto que será iterado