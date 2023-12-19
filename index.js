function calcularSaldoVitorias(vitorias, derrotas){
    return vitorias - derrotas
}

function exibirRank(saldo){
    if(saldo < 10){
        return "Ferro"
    } else if(11 <= saldo && saldo < 21){
        return "Bronze"
    } else if(21 <= saldo && saldo < 51){
        return "Prata"
    } else if(51 <= saldo && saldo < 81){
        return "Ouro"
    } else if(81 <= saldo && saldo < 91){
        return "Diamante"
    } else if(91 <= saldo && saldo < 101){
        return "Lendário"
    } else if(saldo >= 101){
        return "Imortal"
    }
}

saldo = calcularSaldoVitorias(40, 10)
rank = exibirRank(saldo)
console.log("O herói tem saldo de " + saldo + " vitórias e está no nível de " + rank)