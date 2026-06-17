/**
 * O laço for...in interage sobre propriedades enumeradas de um objeto, 
 * na ordem original de inserção. O laço pode ser executado para cada propriedade distinta do objeto.
 */

const frutas = ['banana','maçã','laranja'];

//for in lê os índices do array, e não os valores
for (let indice in frutas) {
    console.log(frutas[indice]);
};

//objetos também são iteráveis com for in, 
//mas ele lê as chaves do objeto, e não os valores

const pessoa = {
    nome: 'Francimilton',
    sobrenome: 'Sena',
    idade: 26
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
/**
Array:
variável → índice → valor

Objeto:
variável → chave → valor
*/