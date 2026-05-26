//Não posso reatribuir os valores de uma const, mas posso manipular os valores:

const array = [1, 2, 3];
array.push(4); //adiciona ao final - certo
array[0] = 'Luiz'; //certo
//array = 'Não pode fazer isso'; // errado

console.log(array);

//fazer um objeto para guardar varios dados:

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 34
};

const pessoa2 = {
    nome: 'Otávio',
    sobrenome: 'Silva',
    idade: 26
};

const pessoa3 = {
    nome: 'Ana',
    sobrenome: 'Castela',
    idade: 31
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

//criar uma function:

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa4 = criaPessoa('Luiz', 'Otávio', 25);
console.log(pessoa2.nome);


