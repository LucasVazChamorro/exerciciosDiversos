function pontuacao(vitorias, derrotas) {
    return vitorias - derrotas;
}

const resultado = pontuacao(100, 10);
let nivel;

if (resultado < 10) {
    nivel = "Ferro";
} else if (resultado <= 20) {
    nivel = "Bronze";
} else if (resultado <= 50) {
    nivel = "Prata";
} else if (resultado <= 80) {
    nivel = "Ouro";
} else if (resultado <= 90) {
    nivel = "Platina";
} else if (resultado <= 100) {
    nivel = "Ascendente";
} else if (resultado <= 110) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log(`O herói tem saldo de ${resultado} e está no nível de ${nivel}`);
