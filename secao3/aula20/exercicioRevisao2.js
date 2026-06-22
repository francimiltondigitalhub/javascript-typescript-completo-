/**
 * Exercício de revisão 2:
 * Escreva uma função que recebe um numero e
 * retorna o seguinte:
 * - "Fizz" se o numero for divisível por 3
 * - "Buzz" se o numero for divisível por 5
 * - "FizzBuzz" se o numero for divisível por 3 e 5
 * - Checar se o numero é realmente um numero, caso não seja retorne "Não é um número"
 * - Retornar o proprio numero caso ele não seja divisível por 3 ou 5
 * Use numeros de 0 a 100 para testar a função
 * 
 * Dica: Use o operador módulo (%) para verificar se um numero é divisível por outro
 */

function fizzBuzz(num) {
    if (typeof num !== 'number') {
        return num
    } else if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz"
    } else if (num % 3 === 0) {
        return "Fizz"
    } else if (num % 5 === 0) {
        return "Buzz"
    } else {
        return num
    }       
}

for (let i = 0; i <= 100; i++) {
    console.log(fizzBuzz(i))
}