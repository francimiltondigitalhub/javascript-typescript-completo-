//                                  ==if, else if e else==

//Faça um sistema que dá saudação dependendo do horário do dia:
let horario = 53;

if (horario >= 0 && horario < 5) {
    console.log('Dormindo...');
} else if (horario < 12) {
    console.log('Bom dia!');
} else if (horario < 18) {
    console.log('Boa tarde!');
} else if (horario < 23) {
    console.log('Boa noite');
}else{ //Só posso ter um else final sem condição. Se nenhuma condição acima for verdeixa, cai nesse else.
    console.log('Esse horário não existe!');
}