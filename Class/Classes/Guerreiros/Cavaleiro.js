import { Personagem } from "../../Personagem.js";

//(nome, vida, estamina, destreza, inteligencia, velocidade, classe, raca, level, magia, mana, forca)

export class Cavaleiro extends Personagem {

    constructor(nome, raca, level, atr) {
        // super(nome, (level * 1000 + atr.hp * 2), (level * 10 + atr.est), (level * 8 + 0 ), (level * 5), (level * 10), "Cavaleiro", raca, level, level, (level * 200), (level * 30));
        super();
        
    }
}