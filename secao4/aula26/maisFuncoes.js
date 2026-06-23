//As funções são objetos de primeira classe (First-Class Objects)

//functions  (hoisting):
falaOi()
function falaOi() {
    console.log('Oi!');
}



//function expression:
 const souUmDado = function() { //declarei uma variável que passa a ser uma function
    console.log('Sou um dado');
};

function exercutaFuncao(funcao) { //posso pegar minnha função de um lugar e executar em outro:
    console.log('Vou executar sua função abaixo:');
    funcao();
}
exercutaFuncao(souUmDado)

//Arrow function:

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

//function dentro de um objeto:

const obj = {
    funcaofalar() {
        console.log('Estou falando...');
    }
};
obj.funcaofalar();