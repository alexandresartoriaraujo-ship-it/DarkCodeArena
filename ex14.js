//Comissão de vendas

//Um vendedor recebe 5% de comissão sobre suas vendas.
//Peça
//Valor total vendido
//mostre:
//Valor de comissão

let comissão = 0.05

const readline = require("readline-sync")

console.log(" ==== Comissão de Vendas ==== ")
console.log("")

let vendas = readline.questionFloat(" Valor total vendido: ")
console.log("")

let c = vendas * comissão

console.log(`Valor da comissão: R$ ${vendas * comissão}`)