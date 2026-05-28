//Gorjeta do Restaurante

//Peça:Valor da conta
//Calcule: Gorjeta de 10%
//Valor total a pagar

const readline = require("readline-sync")

console.log("==== Gorjeta ====")
console.log("")

let vendas = readline.questionFloat("Valor da conta: ")
console.log("")

let gorjeta = vendas * 0.10

console.log("")
console.log(`Valor da gorjeta: R$${vendas * 0.10}`)
console.log("")
console.log(`Valor total a pagar: R$${vendas + gorjeta}`)
console.log("")