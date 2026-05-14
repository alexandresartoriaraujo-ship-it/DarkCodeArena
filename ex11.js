// Fatorial

const readline = require("readline-sync")

console.log("==== Fatorial ====")
console.log("====")

let n = readline.questionFloat("Fale um número inteiro positivo: ")
let f = 1

console.log("====")
for(let i = 2; i <= n; i++){
    f = f*i
}
console.log(f)
console.log("====")