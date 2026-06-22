//CONTINUE:
/**
 * A palavra chave continue termina a atual iteração do laço em que ele se encontra ou de um laço rotulado, 
 * e continua a execução deste laço com a próxima iteração.
 */


// Exemplo 1: Usando continue para sair de um loop com for of
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const numeroo of numeros) { // Para cada número no array 'numeros'
    if (numeroo === 2) { // Se o número for 2, pule para a próxima iteração do loop
        continue; // O comando continue faz com que o loop pule para a próxima iteração, ignorando o código abaixo
    }
    console.log(numeroo);
}

//Exemplo 2 de continue:
const frutas = ['maçã', 'banana', 'laranja', 'uva', 'abacaxi'];

for (const fruta of frutas) { // Para cada fruta no array 'frutas'
    if (fruta === 'laranja') { // Se a fruta for 'laranja', pule para a próxima iteração do loop
        console.log('Laranja encontrada, pulando para a próxima fruta...'); // Imprime uma mensagem indicando que a laranja foi encontrada
        continue; // O comando continue faz com que o loop pule para a próxima iteração, ignorando o código abaixo
    }
    console.log(fruta);
}

//BREAK:
/**
 * O comando 'break' encerra o loop atual, switch, 
 * ou o loop que foi informado no label e transfere o 
 * controle da execução do programa para o comando seguinte.
 */

//Exemplo 1: Usando break para sair de um loop com for of
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const num of numeros2) { // Para cada número no array 'numeros2'
    if (num === 5) { // Se o número for 5, saia do loop
        console.log('Número 5 encontrado, encerrando o loop...'); // Imprime uma mensagem indicando que o número 5 foi encontrado
        break; // O comando break encerra o loop atual e transfere o controle para o próximo comando após o loop
    }
    console.log(num); // Imprime o número atual e uma mensagem indicando que o número 5 foi encontrado
}

//Exemplo 2 de break:
const frutas2 = ['maçã', 'banana', 'laranja', 'uva', 'abacaxi'];

for (const fruta of frutas2) { // Para cada fruta no array 'frutas2'
    if (fruta === 'uva') { // Se a fruta for 'uva', saia do loop
        console.log('Uva encontrada, encerrando o loop...'); // Imprime uma mensagem indicando que a uva foi encontrada
        break; // O comando break encerra o loop atual e transfere o controle para o próximo comando após o loop
    }
    console.log(fruta);
}