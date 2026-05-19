//criar uma calculadora de partidas ranqueadas
// utilizar variaveis, Operadores, Laços de repetição, estruturas de decisão, funções.
// Criar uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, 
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito atraves 
// de calculo (vitórias-derrotas)


// Se vitorias for menor do que 10 = Ferro
// Se vitorias for entre 11 e 20 = Bronze
// Se vitorias for entre 21 e 50 = Prata
// Se vitorias for entre 51 e 80 = Ouro
// Se vitorias for entre 81 e 90 = Diamante
// Se vitorias for entre 91 e 100 = Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// Ao final deve se exibir uma mensagem: O Heroi tem de saldo de **(saldoVitorias)** está no nível de **(nivel)**

nivelAtual(50, 20); 

function nivelAtual(vitoriasTotal, derrotasTotal){
    let saldoVitorias = vitoriasTotal - derrotasTotal;
    let nivel = "";

    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    console.log("O Heroi tem de saldo de "+ saldoVitorias +" está no nível de "+ nivel+"."); 
}

