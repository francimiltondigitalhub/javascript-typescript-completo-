/**
 Operadores aritméticos, de atribuição e incremento:
 
 == Aritiméticos: ==
 
 adição(+) - concatenação:

 subtração (-):

 divisão (/):

 multiplicação (*) ou potenciação (**):

 resto da divisão (%):

*/

//Ex: adição (+)

const num1 = 20;
const num2 = 30;
const num3 = 2

console.log(num1 + num2);
console.log(num1 + (num2 * num3)); //precedencia: igual na matemática, precisamos fazer a multiplicação primeiro, colocar dentro de parenteses(nume2 * num3)



//Ex: * ou **

const num10 = 2;
const num11 = 10

console.log(num10 * num11); //multiplicação
console.log(num10 ** num11); //potenciação

//Ex: (%) resto da divisão:

const num12 = 10;
const num13 = 3;

console.log(num12 % num13); //resultado: 1

//Operador de incremento(++) e decremento(--):

let contador = 1;
contador++ // no valor 1 é incrementado +1 = 2
contador++ //3
contador++ //4
contador++ //5
console.log(contador);


const passo = 60;
let contador3 = 0;
contador3 += passo; //contador = contador + 50

let contador4 = 0;
contador4 += 2;
contador4 += 2;
contador4 += 2;
console.log(contador4);

let contador5 = 2;
contador5 *= 2;
contador5 *= 2;
contador5 *= 2;
console.log(contador5);

//operador de decremento (--):

let contador2 = 10;
--contador2
console.log(contador2);

//NaN - Not a number
const number1 = 10;
const number2 = '5';
console.log(number1 * number2);

//Converter um string de numero para number - 3 formas:

const number3 = 10;
const number4 = parseInt('5'); //converte para numero inteiro.
const number5 = parseFloat('5.2'); //retorna decimal
const number6 = Number('10.5'); //aqui ele se vira, ou seja, decide se é numbero inteiro ou decimal.
console.log(number3 + number4);
console.log(number3 / number5);
console.log(number3 + number6);




