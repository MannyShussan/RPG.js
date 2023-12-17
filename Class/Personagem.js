
import { Dano } from "./Danos/Dano.js";

export class Personagem {
    // Atributos Básicos
    #Nome;
    #Classe;
    #Raca;
    #Level;

    // Atributos Ataque
    #Dado;

    get Nome() {
        return this.#Nome;
    }

    get Classe() {
        return this.#Classe;
    }

    get Raca() {
        return this.#Raca;
    }

    get Level() {
        return this.#Level;
    }

    constructor(nome) {
        this.#Nome = nome;

    }

    rolarDado() {
        this.#Dado = parseInt(Math.random() * 100);
        return this.#Dado
    }
}