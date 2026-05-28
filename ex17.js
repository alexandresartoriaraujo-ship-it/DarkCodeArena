//Calculadora de cashback

//Uma loja oferece 8% de cashback.
//Peça: Valor da compra
//Mostre: Valor do cashback

console.log(" ==== Calculadora ==== ")
console.log("")
const readline = require("readline-sync")
console.log("")

let valorDaCompra = readline.questionInt("Qual é o valor da compra: ")
console.log("")

let cashBack = 0.08
console.log("")
console.log(`O valor do cashback é R$ ${valorDaCompra * cashBack}`)
console.log("")