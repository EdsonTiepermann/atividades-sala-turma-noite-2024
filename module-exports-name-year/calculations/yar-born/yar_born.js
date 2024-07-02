
//Crio uma variável e armazeno o retorno da função anônima, que nesse caso me retornara cum calculo me informando o ano de nascimento
var yar_born = function(age)
{
    let now = new Date(); // Data atual
    let year = now.getFullYear(); // Obtem o ano atual

    return year - age; // Retorna o ano de nascimento
}

module.exports = yar_born; // Exporta, modularizo a variável