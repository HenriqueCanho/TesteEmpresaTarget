// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula,
// além de informar a quantidade de vezes em que ela ocorre.

//IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

function contarLetraA(texto) {
    // Converte a string para minúscula para simplificar a contagem
    const textoMinusculo = texto.toLowerCase();

    // Divide a string com base na letra 'a' e conta o número de partes resultantes
    const partes = textoMinusculo.split('a');

    // O número de ocorrências é o número de partes menos 1
    return partes.length - 1;
}

// String a ser verificada
const texto = "Aqui está um exemplo com várias letras a e A. Quantas letras a e A existem aqui?"; // Resposta = 11

// Verifica a quantidade de letras 'a' e 'A'
const quantidade = contarLetraA(texto);

// Exibe o resultado
console.log(`A letra 'a' (maiúscula ou minúscula) ocorre ${quantidade} vez(es) na string.`);
