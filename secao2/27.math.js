let num1 = 9.4;
let num0 = 9;
let num2 = Math.floor(num1);
console.log(num2);
let num3 = Math.ceil(num1); //arronda pra cima(numero inteiro)
console.log(num3);
let num4 = Math.round(num1); //A função Math.round() retorna o valor de um número arredondado para o inteiro mais proximo. Tanto para cima quanto para baixo
console.log(num4);

console.log(Math.max(1, 2, 4, 1333, -4544, 14009, -1)); //pega maior numero da sequencia
console.log(Math.min(1, 2, 4, 1333, -4544, 14009, -1)); //menor
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);

console.log(Math.pow(2, 10)); //raiz quadrada

console.log(num0 ** (1/2)); //raiz
console.log(num0 ** 0.5); //raiz
