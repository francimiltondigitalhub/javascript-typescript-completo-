/**
 * A declaração while cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira. 
 * A condição é avaliada antes da execução da rotina.
 */

//Variável de controle:

let i = 0;

while (i <= 10) {
    console.log(i);
    i++; //Sempre declarar a variável de controle e incrementá-la para evitar um loop infinito.
}

//Outro exemplo:

const nome = 'Francimilton';
let index = 0;

while (index < nome.length) { //enquanto o index for menor que o tamanho do nome, continue executando o loop
    console.log(nome[index]);
    index++;
}

//Exemplo mais realista: gerar um número aleatório entre 1 e 50.

function numeroAleatorio(min, max) {
    const numero = Math.random() * (max - min) + min; //gera um número aleatório entre min e max
    return Math.floor(numero); //arredonda para baixo para obter um número inteiro
}

const min = 1;
const max = 50;
let declarandoNumero = numeroAleatorio(min, max);

while (declarandoNumero !== 25) { //enquanto o número gerado for diferente de 25, continue gerando números
    declarandoNumero = numeroAleatorio(min, max);
}

/**
 * do while é semelhante ao while, mas a condição de teste é avaliada após a execução da rotina.
 * Isso significa que a rotina será executada pelo menos uma vez, mesmo que a condição de teste seja falsa.
 */

let j = 0;

do { //faça e depois verifique a condição
    console.log(j);
    j++;
} while (j < 10); //j é menor que 10, então o loop continua até que j seja igual a 10

//Outro exemplo:

const nome2 = 'Daniele';
let index2 = 0;

do {
    console.log(nome2[index2]); //imprime cada letra do nome2 
} while (index2++ < nome2.length - 1); //o index2 é incrementado após a verificação da condição, 
//então o loop continua até que index2 seja igual ao tamanho do nome - 1