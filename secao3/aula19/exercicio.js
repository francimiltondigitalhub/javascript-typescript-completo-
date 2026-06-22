//ESCREVA UMA FUNÇÃO QUE RECEBE 2 NUMEROS E RETORNA O MAIOR ENTRE ELES

//FUNÇÃO PARA VER QUAL É O MAIOR NÚMERO
function maiorNumero (num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }                      
}

//TESTANDO A FUNÇÃO
console.log(`O maior número é ${maiorNumero(10, 20)}`) //20
console.log(`O maior número é ${maiorNumero(30, 15)}`) //30
console.log(`O maior número é ${maiorNumero(5, 5)}`) //5  

//EXEMPLO COM ARROW FUNCTION
const maiorNumeroArrow = (num1, num2) => {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

//TESTANDO A FUNÇÃO ARROW
console.log(`O maior número é ${maiorNumeroArrow(11, 21)}`) //20
console.log(`O maior número é ${maiorNumeroArrow(31, 16)}`) //30
console.log(`O maior número é ${maiorNumeroArrow(6, 6)}`) //6