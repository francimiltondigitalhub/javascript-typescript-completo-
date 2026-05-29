// == "? :" == interrogação e dois pontos. ? 'true' : 'false'

// Se usuário tiver >= 1000 pontos (VIP). Se tiver menos de < 1000 pontos (NORMAL)

//Exemplo sem operação ternária:

const pontuacaoUsuario = 1500; //pontos

if (pontuacaoUsuario >= 1000) {
    console.log("VIP");
} else {
    console.log("NORMAL");
    
}

//Exemplo com operação ternária: 

const pontuacao = 1000;
const normalVip = pontuacao >= 1000 ? 'Usuário: VIP' : 'Usuário: NORMAL'
// A pontuação do usuário é maior ou igual a 1000? Se for true (VIP) - caso não for (NORMAL)

console.log(normalVip);

