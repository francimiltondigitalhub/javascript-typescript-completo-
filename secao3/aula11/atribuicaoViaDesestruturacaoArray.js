//para imprimir todos os numeros, precisaria criar varias variáveis, algo trabalhoso
//Ex - 1:

//índices:       0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //8 índices
const primeiroNumero1 = numeros[0]; //atribui numa variável
console.log(primeiroNumero1) //para imprimir o valor do índice 0

//Para resolver isso, usamos a ATRIBUIÇÃO VIA DESESTRUTURAÇÃO:
//Ex - 2:

const numeros2 = [1000, 2, 3, 40000, 5, 6, 7000, 8, 9000];
const [num1, num2, ...resto] = numeros2; //posso também pegar o resto dos numeros seguintes com (rest) ... + nome da variavel --> resto
console.log(num1, num2); //resultado: 1 e 2
console.log(resto); //mostra todos os numeros restantes

//Ex - 2.1 - Posso pular numeros usando vírgular e deixando o espaço vazio.
const numeros3 = [1000, 2, 3, 40000, 5, 6, 7000, 8, 9000];
const [um, , tres, , cinco] = numeros3
console.log(um, tres, cinco);

//Ex3 - 2.2 Posso atribuir dentro de um array mais arrays com numeros
//cada array inteiro com numeros agora passar a ser um índice:
//Como acessar esses numeros? por índices e lista:

//índices:         [   0   ]  [   1   ]  [   2   ]
//listas:          [0  1  2]  [0  1  2]  [0  1  2]
const numeros4 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

//acesso 1: encontrar numero [9]:
const [lista1, lista2, lista3] = numeros4;
console.log(lista3[2]);





