/**
 Não podemos criar constantes com palavras reservadas
 Precisam ter nomes significativos
 Não pode começar o nome de uma const com número
 Não podem conter espaços e traços
 Utilizamos camelCase
 Case-sensitive --> letras maiúsculas e minúsculas fazem diferença
 Não podemos redeclarar contantes (const)
 Não posso modificar o valor da const igual a let
 */

 const nome; //Errado, ela precisa já ser declarada.

 const nome = 'João'; //Certo
 nome = João; //Errado. (ERRO: Assegnment to constant variable) Não pode redeclarar valor.

//Podemos pegar o valor de uma constante ou variável e atribuir seu valor a outra constante ou variável:

//Exemplo:

const num1 = 5;
const num2 = 50;

const conta = num1 * num2;
const contaDuplicada = conta * 2;

let resultadoTriplicado = conta * 3;
resultadoTriplicado = resultadoTriplicado + 152; //Aqui eu perdi o valor da variável resultadoTiplicado.

console.log(conta);


