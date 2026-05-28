const readline = require("readline-sync")

console.log(" ==== Aumento progressivo ==== ")
console.log("")
let ls = readline.questionFloat("Informe o seu salário: ")
console.log("")

if(ls<2000){
    console.log("Você deve um aumento de 10%")
    console.log("")
    console.log(`Salário final: R$${(ls*0.10)+ls}`)
    console.log("")

}else if(ls>2000){
    console.log("Você deve um aumento de 5%")
    console.log("")
    console.log(`Salário final: R$${(ls*0.05)+ls}`)
    console.log("")
}