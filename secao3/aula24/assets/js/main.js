//Cria um timer que inicia, pausa e zera. O timer deve ser criado utilizando a 
// função setInterval e deve ser exibido no formato horas:minutos:segundos.
function relogio() {

  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const relogio = document.querySelector('.relogio');

  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  document.addEventListener('click', function (event) {
    const elemento = event.target;

    if (elemento.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();
    }

    if (elemento.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('pausado');
    }

    if (elemento.classList.contains('zerar')) {
      clearInterval(timer);
      segundos = 0;
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');
    }
  });
}

relogio();


/*
//definir os eventos para os botões
iniciar.addEventListener('click', function (event) {
  relogio.classList.remove('pausado'); //remove a classe pausado do relógio
  clearInterval(timer); //limpa o timer para evitar que ele seja iniciado mais de uma vez
  iniciaRelogio(); //inicia o relógio
});

pausar.addEventListener('click', function (event) {
  clearInterval(timer); //limpa o timer para pausar o relógio
  relogio.classList.add('pausado'); //adiciona a classe pausado ao relógio
});

zerar.addEventListener('click', function (event) {
  clearInterval(timer); //limpa o timer para zerar o relógio
  relogio.innerHTML = '00:00:00'; //zera o relógio
  segundos = 0;
});
*/



   
