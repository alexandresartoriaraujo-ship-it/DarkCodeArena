//Porcentagem de Acertos

const readline = require("readline-sync")
console.log("")
console.log(" ==== Porcentagem de acertos ==== ")
console.log("")
let qtq = readline.question("Qual foi a quantidade total: ")
console.log("")
let qc = readline.questionFloat("Quantidade de acertos é: ")
let p = (qc / qtq) * 100
if(qtq > 0){
    console.log("")
    console.log(`Seu percentual foi de: ${p.toFixed(2)}%`)
    console.log("")
}else{
    console.log("Erro: O total de questões deve ser maior que zero. ")
}