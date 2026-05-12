const readline = require("readline-sync")

let compra = readline.questionInt('Quanto custam a sua compra: ')

let total

if (compra > 500){
    console.log("====calculando")
    console.log(`sua compra deu o valor de ${compra}`)
    console.log("====calculando====")
    console.log("Seu desconto é de 20%")
    console.log("====calculando====")
    total = compra - (compra * 0.2)
    console.log(`O valor final é: ${total} `)
}else if(compra >= 200){
    console.log("====calculando====")
    console.log(`A sua compra deu ${compra}`)
    console.log("====calculando====")
    console.log("Seu desconto é de 10%")
    console.log("====calculando====")
    total = compra - (compra * 0.1)
    console.log(`O valor final é: ${total} `)
}else{
    console.log("====calculando====")
    console.log(`sua compra não tem desconto`)
    console.log("====calculando====")
    console.log(`Sua compra deu: ${compra}`)
}