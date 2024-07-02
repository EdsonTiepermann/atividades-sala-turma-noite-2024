//crio uma constante recebendo o pacote prompt-sync
const prompt = require("prompt-sync")({});
//crio uma variável recebendo o resultado do módulo
var nameUppercase = require("./func-nome/upper_case_name");
//crio uma variável recebendo o resultado do módulo
var yarBorn = require("./calculations/yar-born/yar_born");

//Solicio ao usuário o nome do usuário 
let userName = prompt('Digite o nome do usuário: ');
//Solicio ao usuário a idade do usuário
let age = prompt('Digite a idade do usuário: ');

//Imprimo o nome do usuário e a seu ano de nascimento utilizando a interpolação
console.log(`O nome do usuário é ${nameUppercase(userName)}, nascido no ano de ${yarBorn(age)}`);