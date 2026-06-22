/**
 * O setInterval()método da Windowinterface chama repetidamente uma função ou executa um trecho de código, 
 * com um intervalo de tempo fixo entre cada chamada.
 */

// Exemplo de uso do setInterval para mostrar a hora atual a cada segundo
function mostrarHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}
// Chama a função mostrarHora a cada 1000 milissegundos (1 segundo)
const timer = setInterval(function() {
    console.log(mostrarHora());
}, 1000); // Chama a função a cada 1000 milissegundos (1 segundo)

/**
 * O setTimeout()método da Windowinterface define um temporizador que executa uma função 
 * ou um trecho de código específico assim que o temporizador expirar.
 */

setTimeout(function() {
    clearInterval(timer); // Para o setInterval após 5 segundos
    console.log('O setInterval foi parado após 3 segundos.');
}, 5000); // Executa a função após 5000 milissegundos (5 segundos)

setTimeout(function() {
    console.log('BUUM! Bomba explodiu!');
}, 5000); // Executa a função após 5000 milissegundos (5 segundos)