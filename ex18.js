//Meta de vendas

const readline = require("readline-sync")
console.log("")
console.log(" ==== Metas de Vendas ==== ")
console.log("")
let metaDoDia = readline.questionFloat("Informe meta do dia: ")
console.log("")
let valorVendido = readline.questionFloat("Informe o valor vendido: ")
console.log("")

if(metaDoDia < valorVendido){
    console.log(`Meta atingida, ${((valorVendido/metaDoDia)*100)-100}% de sua meta.`)
}else if(metaDoDia>valorVendido){
    console.log("Você não bateu a meta")
}