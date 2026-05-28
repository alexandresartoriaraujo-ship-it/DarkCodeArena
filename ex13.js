// Fazer uma calculadora de IMC

const readline = require("readline-sync")

console.log("==== Calculando ====")
console.log("")
let a = readline.questionFloat(" Qual é a sua altura: ")
console.log("")
let p = readline.questionFloat("Peso atual: ")
console.log("")

let imc = p / (a*a)

console.log("")
console.log(` Seu IMC é: ${imc.toFixed(2)}`)
console.log("")

if(imc < 18.5){
    console.log("Abaixo do peso")
    console.log("")
}else if(imc>= 18.5 && imc < 25){
    console.log("Peso normal")
    console.log("")
}else if(imc >= 25 && imc <30){
    console.log("Você está com sobrepeso")
    console.log("")
}else if(imc >= 30){
    console.log("Obesidade")
}