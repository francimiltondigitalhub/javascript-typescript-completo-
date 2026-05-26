/**
 ==Operadore lógicos==

&& -> AND -> E = Todas as expressões precisam ser verdadeiras para retirnar true

|| => OR -> OU

! -> NOT -> NÃO

Eles fazem a checagem de mais de uma comparação, com exceção do NOT(!)

 */

//Ex1: AND (&&) - Para eu sair de casa, tenho que ter dinheiro no bolso e tem que estar num dia ensolarado.
//Usar: && (duas comparações ou mais)

const tenhoDinheiro = false;
const diaEnsolarado = true;

if (tenhoDinheiro && diaEnsolarado) { //variável já é booleana
    console.log('Pode sair');
} else {
    console.log('Não pode sair');
};

//Ex1.1:

const usuario = 'Francimilton';
const senha = '123456';

const fazerLogin = usuario === 'Francimilton' && senha === '12345'; //true ou false
console.log(fazerLogin);


//Ex2: OR (||) - Para eu sair de casa, tenho que ter dinheiro no bolso ou(OR) tem que estar num dia ensolarado. 
//Precisa que apenas uma seja verdaeira.

const expressaoOr = true || false; //Tenho dinheiro, mas ta chovendo = Vou sair mesmo assim.
console.log(expressaoOr);

//Ex3: NOT (!) - Negação

console.log(!true); //passa a ser false
console.log(!false); //passa a ser true









