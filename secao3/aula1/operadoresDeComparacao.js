/**
 * ==Operadores de comparação==
 
  > maior que
  >= maior ou igual a
  < menor que
  <= menor ou igual a 
  == igualdade (checa valor da direita e esquerda) obs: não utilizar
  === igualdade estrita (checa valor e tipo)
  !== diferente (valor) obs: não ultilizar também.
  !=== diferente estrito (valor e tipo)


 */
const maiorOumenor = 10 > 5; //true
const maiorOuIgual = 10 >= 20; //false
const menor = 10 < 11; //true
const menorOuIgual = 10 <= 9; //false

console.log(maiorOumenor, maiorOuIgual, menor, menorOuIgual);

const num1 = 10; //number
const num2 = '10'; //string

const comparacao = num1 < num2; //false
const comparacaoIgualdade = num1 == num2; //true obs: ele converteu sem eu mandar, não pode.
const comparacaoIgualdade2 = num1 === num2; //false, são dois tipos diferentes (correto)

console.log(comparacao, comparacaoIgualdade, comparacaoIgualdade2);

const num3 = 10; //number
const num4 = '10'; //number

const comparacaoDiferente = num3 != num4; //false obs: ele converteu novamente sem eu mandar, teria quer ser diferente(number/string)
const comparacaoDiferenteEstrito = num3 !== num4 //true obs: é diferente, portanto está correto.
console.log(comparacaoDiferente, comparacaoDiferenteEstrito);


