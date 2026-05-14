// Contador de números positivos

const readline= require("readline-sync")
console.log("==== Contador de Números Positivos ====")
console.log("====")

let p = 0

for(let i = 1; i <= 10; i++){
let n = readline.questionInt(` ${i}º Número: `)
if(n >= 0 ){
    p++
}else{}
}
console.log("====")
console.log(`Tem ${p} Números positivos. `)
console.log("====")