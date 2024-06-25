let numero1
let numero2

process.stdin.on("data", function(data) {
    let input = +data.toString().trim()

    if(!numero1) {

        numero1 = input
    } else {
        numero2 = input

        let i
        let maior
        let menor

        if(numero1 > numero2) {
            maior = numero1
            menor = numero2
        } else {
            maior = numero2
            menor = numero1
        }

        i = maior
        for (i; i <= numero1 * numero2; i += maior) {
            if(i % numero1 == 0 && i % numero2 == 0) {
                console.log("MMC: " + i)
                break
            }
        }

        i = menor

        for(i; i > 0; i--) {
            if(numero1 % i == 0 && numero2 % i ==0) {
                console.log("MDC: " + i)
                break;
            }
        }
        process.exit()
    }
})