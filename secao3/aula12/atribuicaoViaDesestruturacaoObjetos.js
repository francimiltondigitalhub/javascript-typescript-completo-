//Atribuição via Desestruturaçõa - com Objetos


//ATRIBUIÇÕES NORMAIS:
//Ex 1 - Criando um objeto e localizando pelo console.log:

const pessoa = {
    nome: 'Francimilton',
    sobrenome: 'Sena',
    idade: 26,
    endereco: {
        rua: 'Rua das Dores',
        numero: 320
    }
};

console.log(pessoa.nome);

//Ou atribuindo a uma variável:

const nome = pessoa.nome;
const idade = pessoa.idade
console.log(nome, idade);

//ATRIBUIÇÕES VIA DESESTRUTURAÇÕES - OBJETOS:

//Ex 2 -

const pessoA = {
    nomE: 'FrancimiltoN',
    //sobrenomE: '',
    idadE: 30,
    enderecO: {
        ruA: 'Rua das DoreS',
        numerO: 500
    }
};

const { nomE: teste, sobrenomE = 'sobrenome Atribuido direto nas chaves', idadE } = pessoA; //estou criando um chame com uma variável identica a que está dentro do objeto, nesse caso ela extrai já o valor
//caso um valor não exista, pode ser atribuido direto dentro das chaves. Exemplo acima:
//posso mudar nome da variável usando o nome original + dois pontos :

console.log(teste, sobrenomE, idadE); //teste agora recebe meu nome

//Pega todos os obejtos dentro de objetos
const {enderecO} = pessoA;
console.log(enderecO);


//pegar valores específicos de um objeto dentro de outro objeto usando tambem dois pontos : + chaves
const {enderecO: {ruA}} = pessoA;
const {enderecO: {numerO}} = pessoA;

console.log(ruA);
console.log(numerO);

//usar ...rest para pegar o restante dos objetos:

const pEssoa= {
    nOme: 'FranciMilton',
    //sobrenomE: '',
    iDade: 25,
    eNdereco: {
        rUa: 'Rua 15 de Julho',
        nUmero: 600
    }
};
const { nOme, ...resto } = pEssoa;
console.log(resto); //fora o nOme, tenho todo o restante dos valores do objeto



