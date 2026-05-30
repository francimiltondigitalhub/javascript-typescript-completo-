//Comparação de if com switch, quando utilizar:

/*
IF:
- Comparações
- Operadores lógicos
- Regras mais complexas

SWITCH:
- Muitos valores possíveis para a mesma variável
- Código mais organizado e legível
*/

//Exemplo com if no final para comparação:

//Exemplo com switch case:

const data = new Date('2026-05-29 00:36');
let diaSemana = data.getDay();
let diaSemanaTexto;

//1 -

switch (diaSemana) {
    case 0: //caso o dia da semana for '', faça isso...
    diaSemanaTexto = 'Domingo'; //Se encontrar a condição, eu preciso falar para ele sair ou parar de executar: break
    break;
case 1:
    diaSemanaTexto = 'Segunda';
    break;
case 2:
    diaSemanaTexto = 'Terça';
    break;
case 3:
    diaSemanaTexto = 'Quarta';
    break;
case 4:
    diaSemanaTexto = 'Quinta';
    break;
case 5:
    diaSemanaTexto = 'Sexta';
    break;
case 6:
    diaSemanaTexto = 'Sábado';
    break;
default:
    diaSemanaTexto = ''; //caso não seja nenhum das condições, executa defaut(como se fosse o else do if). Posso add o break se eu quiser, mas não é obrigtório.
}

console.log(diaSemana, diaSemanaTexto);

//2 - Exemplo de switch case dentro de uma função onde posso eliminar o break.

diaSemanaTexto = pegarDiaSemanaTexto(diaSemana);

function pegarDiaSemanaTexto (diaSemana) {

    let diaSemanaTexto; // A função retorna uma string. O valor retornado é armazenado em diaSemanaTexto.

    switch (diaSemana) {
    case 0: 
        diaSemanaTexto = 'Domingo'; 
        return diaSemanaTexto // return encerra a função imediatamente por isso não precisamos usar break
        diaSemanaTexto = 'Segunda';
        return diaSemanaTexto
    case 2:
        diaSemanaTexto = 'Terça';
        return diaSemanaTexto
    case 3:
        diaSemanaTexto = 'Quarta';
        return diaSemanaTexto
    case 4:
        diaSemanaTexto = 'Quinta';
        return diaSemanaTexto
    case 5:
        diaSemanaTexto = 'Sexta';
        return diaSemanaTexto
    case 6:
        diaSemanaTexto = 'Sábado';
        return diaSemanaTexto
    default:
        diaSemanaTexto = '';
        return diaSemanaTexto
    }
}

console.log(diaSemana, diaSemanaTexto);


//Exemplo com if:

/*
const data = new Date('2026-05-30 00:36');
const diaSemana = data.getDay();

/*if (diaSemana === 0) { //tenho uma condição com if com muitas repetições. Nesse caso, um switch costuma ser mais legível
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Seunda-Feira';
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça-Feira';
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta-Feira';
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta-Feira';
} else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta-Feira';
} else if (diaSemana === 6) {
    diaSemanaTexto = 'Sábado';
} else {
    diaSemanaTexto = '';
}

console.log(diaSemana, diaSemanaTexto);
*/