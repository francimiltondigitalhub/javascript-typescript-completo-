const nome = 'Francimilton';
let idade;
idade = 30;
let peso = 84;
let alturaEmMetros = 1.80;

let imc;
imc = peso / (alturaEmMetros * alturaEmMetros);

//Jeito trabalhoso os valores ficam separados por causa da vírgula:
console.log(nome, 'tem', idade, 'anos, pesa', peso, 'Kg. Tem', alturaEmMetros, 'de altura e seu IMC é de', imc);

//Jeito prático (template strings):

console.log(`${nome} tem ${idade} anos, pesa ${peso} Kg. Tem ${alturaEmMetros} de altura e seu IMC é de ${imc}`);




