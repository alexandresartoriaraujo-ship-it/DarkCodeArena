const readline = require("readline-sync")

let nota = readline.questionInt("A nota do aluno é: ")

if(nota >= 7){
    console.log('O aluno está aprovado')
}else if (nota < 5){
    console.log("O aluno está reprovado")
}else{
    console.log("O aluno está de recuperação")
}