
//Arrays são idexados por elementos e não por índice.
//                0        1
const alunos = ['Eduardo', 'Maria', 'Luiza', 'Fábio', 'Amanda'];
alunos[0] = 'Eduardo';
alunos[2] = 'Luiza';


alunos[alunos.length] = 'Fábio'; //adiciona mais elementos puxando tamanho do array.
alunos.push('Amanda'); //mais fácil
alunos.unshift('Tony'); //adiciona ao começo do array

alunos.shift(); //remove o primeiro do começo
console.log(alunos);

alunos.pop(); //remove ultimo elemento
console.log(alunos);

alunos[alunos.length] = 'Ana';
console.log(alunos[0]); //acesso o elemento 0
console.log(alunos[1]);
console.log(alunos);

console.log(alunos.slice(0, 3)); //quero saber os nomes do indice[i] zero[0] até o [3]
console.log(alunos.slice(3, -1));

