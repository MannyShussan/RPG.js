export class Atributo {
    #Hp;
    #Mp;
    #Destreza;
    #Inteligencia;
    #Estamina;
    #Velocidade;
    #Defesa;
    #Forca;
    #Magico;

    get Hp() {
        return this.#Hp;
    }

    get Mp() {
        return this.#Mp;
    }

    get Destreza() {
        return this.#Destreza;
    }

    get Inteligencia() {
        return this.#Inteligencia;
    }

    get Estamina() {
        return this.#Estamina;
    }

    get Velocidade() {
        return this.#Velocidade;
    }

    get Defesa() {
        return this.#Defesa;
    }

    get Forca() {
        return this.#Forca;
    }

    get Magico() {
        return this.#Magico;
    }


    constructor(vit = 1, mVit = 1, agi = 1, mAgi = 1, vig = 1, mVig = 1) {

    }

    setVitalidade(vit = 1, mVit = 1) {
        this.#Hp = this.#Calcula(200, vit, mVit);
        this.#Estamina = this.#Calcula(80, vit, mVit);
        this.#Defesa = this.#Calcula(50, vit);
    }

    setAgilidade(agi = 1, mAgi = 1) {
        this.#Velocidade = this.#Calcula(20, agi, mAgi);
        this.#Destreza = this.#Calcula(50, agi, mAgi);
    }

    setVigor(vig = 1, mVig = 1) {
        this.#Forca = this.#Calcula(vig, 20, mVig);
    }

    #Calcula(num, vezes, mVit) {
        let mod = mVit / 100, result = 0;
        for (let i = 0; i < vezes; i++) {
            result = +num;
            result *= 1 + mod;
        }
        return result;
    }
}