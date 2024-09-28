const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("_____|  Desafio Classificador de nível de Herói |_____");

function classificarHeroi(nome, xp) {
    let nivel;
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }
    console.log(`O herói de nome ${nome} está no nível de ${nivel}`);
}

rl.question('Por favor, digite seu nome: ', (nome) => {
    console.log(`Olá, ${nome}! Bem-vindo(a) ao programa.`);
    
    rl.question('Informe a experiência (XP) do herói: ', (xpInput) => {
        const xp = parseInt(xpInput);
        if (isNaN(xp)) {
            console.log("Por favor, insira um número válido para XP.");
        } else {
            classificarHeroi(nome, xp);
        }
        rl.close();
    });
});