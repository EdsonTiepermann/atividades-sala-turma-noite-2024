//Crio uma variável e armazeno o retorno da função anônima, que nesse caso só força a string recebida a ser toda com letras maiúsculas.
var upper_case_name = function(name)
{
    return name.toUpperCase();
}

module.exports = upper_case_name; // Exporta, modularizo a variável