// == For - Clássico - Estrutura de repetição ==
//criar variável de controle e colocar o valor - i = index
//condição para parar
//incrementar ou decrementar ao i


//icrementação de 1 em 1
for (let i = 0; i <= 122; i++) { // i é menor ou igual a 5?
    console.log(`Linha ${i}`);
}

//icrementação de 2 em 2
for (let index = -100; index <= 122; index += 2) { 
    console.log(index);
}

//decrementação
for (let inicial = 500; inicial >= 100; inicial -= 10) { 
    console.log(inicial);
}

//checar se é par ou impar
for (let parOuimpar = 0; parOuimpar <= 10; parOuimpar++) { 
    const par = parOuimpar % 2 === 0 ? 'par' : 'impar';
    console.log(parOuimpar, par);
}

//percorrer um array com for
const frutas = ['Maça', 'Banana', 'Pêra'];

for (let tamanhoArray = 0; tamanhoArray < frutas.length; tamanhoArray++) {
    console.log(`índice ${tamanhoArray}`, frutas[tamanhoArray]);
}

