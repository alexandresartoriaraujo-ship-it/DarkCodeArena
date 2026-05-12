const readline = require("readline-sync")

let numero = readline.questionInt("Qual numero deseja saber da tabuada do 1 á 10: ")

for(let i = 1; i <= 10; i++){
    console.log(numero * i)
}