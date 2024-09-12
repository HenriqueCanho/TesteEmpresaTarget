// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
// ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
//IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

let a = 0 
let b = 1

const numeroInformado = 256 
// const numeroInformado = prompt("Digite o número que você deseja a verificacao")

console.log(a)
console.log(b)
let numeroAtualizado = a + b
for(let i = 0; i < numeroInformado; i++){ // gerar fibonacci
    console.log(numeroAtualizado)
    numeroAtualizado = numeroAtualizado + numeroAtualizado
}
if(numeroInformado === numeroAtualizado){
    console.log("O numero informado está dentro da sequência")
} else {
    console.log("O numero informado não está dentro da sequência")
    
}
// esse código irá printar a sequência de fibonacci e depois no final dizer se o numero informado faz ou não parte da sequência
