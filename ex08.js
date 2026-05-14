
const readline = require("readline-sync")

let ab = 0
let ac = 0

let soma = 0

console.log("====")
let a = readline.question("Total de alunos: ")
console.log("====")
for(let i=1; i <= a; i++){
    console.log("====")
let n = readline.questionFloat(` ${i} nota dos alunos: `)
console.log("====")
soma = soma + n
if (n > 5){
    ac ++
} else{
    ab ++
}
}
let m = (soma/a)

console.log(`Média da turma ${m}`)
console.log(`Alunos abaixo da turma ${ab}`)
console.log(`Alunos acima da turma ${ac}`)
