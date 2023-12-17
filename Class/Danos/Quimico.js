export class Quimico {
    #Veneno;
    #Radiacao;
    #Toxico;
    #Corrosivo;
    #Explosivo;

    get Veneno(){
        return this.#Veneno;
    }

    get Radiacao(){
        return this.#Radiacao;
    }

    get Toxico(){
        return this.#Toxico;
    }

    get Corrosivo(){
        return this.#Corrosivo;
    }

    get Explosivo(){
        return this.#Explosivo;
    }

    constructor(veneno, radiacao, toxico, corrosivo, explosivo) {
        this.#Veneno = veneno;
        this.#Radiacao = radiacao;
        this.#Toxico = toxico;
        this.#Corrosivo = corrosivo;
        this.#Explosivo = explosivo;
    }
}