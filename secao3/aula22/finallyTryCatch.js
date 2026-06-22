//Aula parte #2 de try e catch, com o adicionamento do finally

try { //É executado quando não há erros
    console.log('Abri o arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
} catch (error) { //É executado quando há erros
    console.log('Tratando o erro');
} finally { //É executado independente do resultado, ou seja, se houve ou não erros
    console.log('FINALLY: Eu sempre sou executado');
}   

//FUNÇAO MOSTRAR HORA

function mostrarHora() {
    if (date && !(data instanceof Date)) { //Verificando se o valor passado é uma instância de Date
        throw new TypeError('Esperando instância de Date.'); //Lançando um erro do tipo TypeError com uma mensagem personalizada
    }
    if (!date) { //Verificando se o valor passado é nulo ou indefinido
        date = new Date();
    }
    return data.toLocaleTimeString('pt-BR', { //Formatando a data para o formato de hora do Brasil
        hour: '2-digit', //Formatando a hora para exibir apenas as horas, minutos e segundos
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false 
    });
}
try {
    data = new Date('01-01-1970 12:59:59'); //Criando uma data específica
    const hora = mostrarHora(11); //Passando um valor que não é uma instância de Date para gerar um erro
    console.log(hora); //Exibindo a hora formatada
} catch (error) {
    //console.log('Erro capturado: ' + error.message);
} finally {
    console.log('Tenha um bom dia!'); //Exibindo uma mensagem de despedida, independente do resultado da função mostrarHora
}