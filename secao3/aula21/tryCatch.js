/**
 * Lendo e tratando erros
 * 
 * Para ler e tratar erros, podemos usar o bloco try...catch. 
 * O código dentro do bloco try é executado normalmente, 
 * mas se ocorrer um erro, a execução é interrompida e o controle é passado para o bloco catch, 
 * onde podemos lidar com o erro de forma apropriada.
 * 
 * Exemplo:
 * 
 * try {
 *   // Código que pode gerar um erro
 *   console.log(naoDefinida);
 * } catch (error) {
 *   // Código para lidar com o erro
 *   console.error("Ocorreu um erro:", error.message);
 * }
 * 
 * Neste exemplo, se a variável naoDefinida não estiver definida, 
 * o bloco catch será executado e exibirá uma mensagem de erro no console.  
 * 
 * Lembrando que fazer isso não é uma boa prática, o ideal é sempre definir as variáveis antes de usá-las, 
 * mas isso serve para ilustrar como o try...catch funciona para lidar com erros em JavaScript.                
 * 
 */

//console.log(naoDefinida) // ReferenceError: naoDefinida is not defined


//EXEMPLO DE USO DO TRY...CATCH
try { //tente executar este código, caso haja um erro, vá para o bloco catch
    console.log(vaiDarErro)
} catch (error) {
    console.log("Ocorreu um erro:", error.message) // Ocorreu um erro: vaiDarErro is not defined
}

//OUTRO EXEMPLO
function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') { //verifica se x ou y não são números
        throw new Error('x e y devem ser números'); //lança um erro personalizado 
    }
    return x + y;
}

try {
    console.log(soma(2, 3)) // 5
    console.log(soma(2, '3')) // Uncaught: x e y devem ser números
} catch (error) {
    console.error("Ação indisponivel no momento:", error.message) // Ação indisponível: x e y devem ser números;
}

