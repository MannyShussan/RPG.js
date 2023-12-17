import { Personagem } from "./Class/Personagem.js";

//                           (nome, vida, estamina, destreza, inteligencia, velocidade, classe, raca, level, magia, mana, forca)
let Jogador1 = new Personagem("Flávio", 5000, 1000, 50, 100, 5, "Cavaleiro", "Humano", 10, "None", 0, 35);
let Jogador2 = new Personagem("Vitrolinha", 4000, 800, 60, 150, 3, "Arqueira", "Elfo", 25, "Flecha de fogo", 2500, 10);

console.log(Jogador1);
console.log(Jogador2);