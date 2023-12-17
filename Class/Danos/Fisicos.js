export class Fisico {
    #Corte;
    #Perfuracao;
    #Esmagamento;

    get Corte() {
        return this.#Corte;
    }

    get Perfuracao() {
        return this.#Perfuracao;
    }

    get Esmagamento() {
        return this.#Esmagamento;
    }

    constructor(corte, perfuracao, esmagamento) {
        this.#Corte = corte;
        this.#Perfuracao = perfuracao;
        this.#Esmagamento = esmagamento;
    }
}