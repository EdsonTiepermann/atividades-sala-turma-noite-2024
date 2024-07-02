// Uma função é um bloco de código nomeado, que pode ou não conter
// parametros e pode ou não retornar valores.

// Função que não retorna nenhum valor e não possui parametros
function falaOi() {
    console.log("Oi")
}

// Chamando/Invocando a função
falaOi()

// Função que retorna um valor
function saudacao() {
    return "Olá!"
}

// Chamando/Invocando a função
let retorno = saudacao()
console.log(retorno)

// Função que retorna um valor e possui parâmetros/argumentos
function soma(x, y) {
    const resultado = x + y
    return resultado
}

// Chamando/Invocando a função
let resultado = soma(10, 5)
console.log(resultado)