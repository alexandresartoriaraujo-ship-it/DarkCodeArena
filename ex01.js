const readline = require("readline-sync")

let número = readline.questionInt("Informe o número: ")


if(número > 0){
    console.log(`${número} é maior que o zero`)
    
    console.log('Este número é positivo')
}else if(número < 0){
    console.log(`${número} é menor que zero`)
    console.log('seu numero é negativo')
}else{
    console.log('Seu numero é zero')
}