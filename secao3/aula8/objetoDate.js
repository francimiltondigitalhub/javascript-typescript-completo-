/**
 * DATE
 * 
 * Date trabalha com datas e horas.
 * 
 * É uma função construtora, por isso usamos "new".
 * 
 * Internamente ele guarda o tempo em milissegundos
 * desde 01/01/1970 00:00:00 UTC.
 * 
 * Esse dia é chamado de:
 * - Marco Zero
 * - Unix Timestamp
 * - Unix Epoch
 */

// Ex1 - new Date(); data e hora atual
const dataAtual = new Date();
console.log(dataAtual);


//Ex2 - new Date(valor); passando 0, começa o Marco Zero
const data2 = new Date(0);
console.log(data2);


/*
 * Dependendo do fuso horário da máquina,
 * pode aparecer:
 * 
 * 31/12/1969 21:00:00
 * 
 * porque no Brasil normalmente estamos em UTC-3.
 */

// 3 horas em milissegundos
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000; //um dia = 60 * 60 * 24 * 1000; adiciona um dia ao marco zero
// soma 3 horas ao Marco Zero
const dataCorrigida = new Date(0 + tresHoras + umDia);
console.log(dataCorrigida.toString());

//Ex3: new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);
const dataAgora = new Date(2026, 4, 29, 9, 6); //mes começa em 0(Janeiro) 11(Dezembro)
console.log(dataAgora.toString());

//Ex3: - new Date(dataString);

const data3 = new Date('2026-04-29 23:24:59') //(dataString)
console.log('Dia', data3.getDate());
console.log('Mês', data3.getMonth()); //mes começa em 0(Janeiro) 11(Dezembro)
console.log('Ano', data3.getFullYear());
console.log('Hora', data3.getHours());
console.log('Min', data3.getMinutes());
console.log('Seg', data3.getSeconds());
console.log('ms', data3.getMilliseconds());
console.log('Dia semana', data3.getDay()); // dia da seman 0 = domindo, 1 = segunda...
console.log(data2.toString());

//Ex4: - Formatando uma data:

function addZeroAesquerda (num) {
    return num >= 10 ? num : `0${num}`; //
}
function formatarData(data) {
    const dia = addZeroAesquerda(data.getDate());
    const mes = addZeroAesquerda(data.getMonth() + 1);
    const ano = addZeroAesquerda(data.getFullYear());
    const hora = addZeroAesquerda(data.getHours());
    const min = addZeroAesquerda(data.getMinutes());
    const seg = addZeroAesquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formatarData(data);
console.log(dataBrasil);






/*
 * Conversões úteis:
 * 
 * 1000 ms = 1 segundo
 * 60 segundos = 1 minuto
 * 60 minutos = 1 hora
 * 
 * 60 * 60 * 1000 = 1 hora em ms
 */

/*
 * Resumindo:
 * 
 * Date sempre conta os milissegundos
 * a partir de 01/01/1970 UTC.
 */