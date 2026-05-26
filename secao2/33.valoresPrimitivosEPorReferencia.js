/**
 Primitivos (imutáveis) - string, number, boolean, undefined,
 null, (bigint, symbol) - valor.
 */

 let a = 'A'
 let b = a; //cópia

 console.log(a, b);
 
 a = 'Outra coisa'; //não afeta o valor de a por ser uma cópia
 console.log(a, b);
 

 //Tipos de valores por referências - array, object, function - (mutáveis):

let c = [1, 2, 3];
let d = c; //se alterar o valor de a ou b, ambos sofrem alteração
console.log(c, d);

c.push(4);//add //alterei a, porém b também foi afetado por ambos apontar pro mesmo valor.
console.log(c);

d.pop(); //remover
console.log(c, d);


