const readline = require("readline-sync")

let soma = 0

for(let i = 1; i <= 5; i++ ){
    let a = readline.questionInt(`${i} Número: `)
    soma = soma + a 

}
console.log('-------Soma------')
console.log(soma)