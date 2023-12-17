export class Energia {
    #Fogo;
    #Gelo;
    #Eletrico;
    #Quimico;
    #Terra;
    #Vento;

    get Fogo() {
        return this.#Fogo;
    }

    get Gelo() {
        return this.#Gelo;
    }

    get Eletrico() {
        return this.#Eletrico;
    }

    get Quimico() {
        return this.#Quimico;
    }

    get Terra() {
        return this.#Terra;
    }

    get Vento() {
        return this.#Vento;
    }

    constructor(eletrico, fogo, gelo, quimico, terra, vento) {
        this.#Fogo = fogo;
        this.#Gelo = gelo;
        this.#Eletrico = eletrico;
        this.#Quimico = quimico;
        this.#Terra = terra;
        this.#Vento = vento;
    }
}