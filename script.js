class hero {
    constructor(nome, idade, classe) {
        this.nome = nome
        this.idade = idade
        this.classe = classe
    }

    atack() {
        let ataque = ""

        switch (this.classe) {
            case "mago":
            ataque = "usando magia"
            break
            case "guerreiro":
            ataque = "usando espada"
            break
            case "monge":
            ataque = "usando artes marcias"
            break
            case "ninja":
            ataque = "usando shuriken"
            break
        }

        console.log("Jogador:" + this.nome + " de classe " + this.classe + ", atacou " + ataque) 
    }

}

let heroiMago = new hero("Marcos", 20, "mago")
let heroiGuerreiro = new hero("Maquila", 21, "guerreiro")
let heroiMonge = new hero("Michel", 31, "monge")
let heroiNinja = new hero("Flint", 40, "ninja")

heroiMago.atack();
heroiGuerreiro.atack();
heroiMonge.atack();
heroiNinja.atack();