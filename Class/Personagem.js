import { Atributo } from "./Atributo.js";

export class Personagem {
    // Atributos Básicos
    #Nome;
    #Classe;
    #Level;
    #Dado;
    #attr;

    constructor(nome, classe, attr) {
        this.#Nome = nome;
        this.#Classe = classe;
        this.#attr = new Atributo(...attr);
    }

    rolarDado() {
        this.#Dado = parseInt(Math.random() * 100);
        return this.#Dado
    }

    setVitalidade(pts) {

    }

    setDestreza(pts) {
        
    }
}