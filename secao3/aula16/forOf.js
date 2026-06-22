/*
O loop for...of percorre objetos iterativos (incluindo Array, Map, Set, o objeto arguments e assim por diante),
 chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.
*/
const nomes = ['Francimilton', 'Dani'];

//for clássico geralmente utilizado para iterar sobre arrays, mas pode ser utilizado para outros fins
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

//for in geralmente utilizado para iterar sobre objetos, mas pode ser utilizado para outros fins
for (let i in nomes) {
    console.log(nomes[i]);
}

//forEach geralmente utilizado para iterar sobre arrays, mas pode ser utilizado para outros fins
nomes.forEach(function (valor, indice, array) {
    console.log(valor, indice, array);
});

//for of geralmente utilizado para iterar sobre arrays, mas pode ser utilizado para outros fins
for (let valor of nomes) {
    console.log(valor);
}