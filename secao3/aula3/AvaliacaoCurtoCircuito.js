/**
 && = Todas as expressões precisam ser verdadeiras -> false && true = false
 || = Todas precisam ser falsas para que retorne false, caso uma seja true, retorna verdadeiro.
 
 
 FALSY = valores que retornam false:

 false
0
-0
0n
""
``
''
null
undefined
NaN

 O curto circuito é quando o valor da expressao é achado, ocasionando na interrupção, 
 ou seja, nada mais precisa ser executado depois de achado.
 */

//Ex1: com AND(&&)

console.log('Francimilton Sena' && 0 && 'Maria'); //o valor 0 é false.

//Ex1.1

function falarOi () {
    return 'Oi';
}

const vaiExecutar = true; //O valor que for colocado aqui, tanto false ou true, é que vai determinar se a execução é false ou true

console.log(vaiExecutar && falarOi()); //pra falar "Oi" preicsa que todas as expressões sejam verdadeiras.
 
//Ex2: com OR(||)

console.log(0 || false || null || 'Francimilton Sena' || true); 

const corUsuario = null;
const corPadrao = corUsuario || 'Vermelho'; 
//No caso como null é false, retorna 'vermelho' (primeiro valor verdaeiro)
//Se o usuário digital algo que não seja valor de false, retorna 'corUsuario' (passa a ser o primeiro valor verdaeiro)


console.log(corPadrao);

//'Francimilton' e true são verdadeiros, mas já será interrompido no primeiro valor true ou seja 'Francimelton' (da um curto-circuito)
