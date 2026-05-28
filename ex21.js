const readline = require("readline-sync")

let lucro = 0.35
console.log("==== Calculando o lucro ====")
console.log("")
console.log("==== Lucro do produto ====")
console.log(`Lucro: ${lucro*100}%`)
console.log("")
let custo = readline.questionFloat("Custo do produto: ")
console.log("")
console.log("==== Valor Final ====")
console.log("")
console.log(` Preço de Venda: R$${custo*lucro+custo} Para lucro. `)