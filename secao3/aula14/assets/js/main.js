const elementos = [
  {tag: 'p', texto: 'Qualquer coisa'},
  {tag: 'div', texto: 'Frase 2'},
  {tag: 'section', texto: 'Frase 3'},
  {tag: 'footer', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div'); //Isso cria um div no html.

//vamos percorer o array de elementos com for para percorrer cada um dos objetos.
//Usar desestruturação para pegar as propriedades do objeto.

for(let i = 0; i < elementos.length; i++){
  let { tag, texto } = elementos[i]; //Associação via Desestruturação para pegar as propriedades do objeto.
  let tagPcriada = document.createElement(tag); //Criar o elemento HTML com a tag do objeto.
  let textoCriado = document.createTextNode(texto); //Criar um nó de texto com o texto do objeto.
  //tagPcriada.innerText = texto;

  tagPcriada.appendChild(textoCriado); //Adicionar o nó de texto como filho do elemento criado.
  div.appendChild(tagPcriada); //Adicionar o elemento criado como filho do div.
}
container.appendChild(div); //Adicionar o div como filho do container.

//console.log(elementos);
