class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = this.definirAtaque();
    }

    definirAtaque() {
        switch(this.tipo) {
            case "mago":
                return "magia";
            case "guerreiro":
                return "espada";
            case "monge":
                return "artes marciais";
            case "ninja":
                return "shuriken";
            default:
                return "ataque desconhecido";
        }
    }

    fichaTecnica() {
        console.log(`Nome: ${this.nome}
Idade: ${this.idade}
Tipo: ${this.tipo}`);
    }

    atacar() {
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
    }
}

const heroi1 = new Heroi('Gandalf', 4580, 'mago');

heroi1.fichaTecnica();
heroi1.atacar();