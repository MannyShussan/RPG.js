export class Magico {
    #Obscura;
    #Alado;

    get Obscura() {
        return this.#Obscura;
    }

    get Alado() {
        return this.#Alado;
    }

    constructor(obscura, alado) {
        this.#Obscura = obscura;
        this.#Alado = alado;
    }
}