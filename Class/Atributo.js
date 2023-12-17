export class Atributo {
    #Hp;
    #MHp;
    #Mp;
    #MMp;
    #Destreza;
    #MDestreza;
    #Inteligencia;
    #MInteligencia;
    #Estamina;
    #MEstamina;
    #Velocidade;
    #MVelocidade;
    #Defesa;
    #MDefesa;
    #Forca;
    #MForca;
    #Magico;
    #MMagico;

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


    constructor(vit = 1, agi = 1, vig = 1, pwr = 1, mag = 1, mhp = 0.5, mmp = 0.5, mdes = 0.5, mint = 0.5, mest = 0.5, mvel = 0.5, mdef = 0.5, mfor = 0.5, mmag = 0.5) {
        this.#MHp = mhp;
        this.#MMp = mmp;
        this.#MDestreza = mdes;
        this.#MInteligencia = mint;
        this.#MEstamina = mest;
        this.#MVelocidade = mvel;
        this.#MDefesa = mdef;
        this.#MForca = mfor;
        this.#MMagico = mmag;
        this.setVitalidade(vit);
        this.setAgilidade(agi);
        this.setVigor(vig);
        this.setPoder(pwr);
        this.SetMagia(mag);
    }

    setVitalidade(vit = 1) {
        this.#Hp = this.#CalculaAtr(200, vit, this.#MHp);
        this.#Estamina = this.#CalculaAtr(80, vit, this.#MEstamina);
        this.#Defesa = this.#CalculaAtr(50, vit, this.#MDefesa);
    }

    setAgilidade(agi = 1) {
        this.#Velocidade = this.#CalculaAtr(20, agi, this.#MVelocidade);
        this.#Destreza = this.#CalculaAtr(50, agi, this.#MDestreza);
    }

    setVigor(vig = 1) {
        this.#Forca = this.#CalculaAtr(20, vig, this.#MForca);
        this.#Estamina = this.#CalculaAtr(150, vig, this.#MEstamina);
        this.#Defesa = this.#CalculaAtr(30, vig, this.#MDefesa);
    }

    setPoder(pwr = 1) {
        this.#Mp = this.#CalculaAtr(200, pwr, this.#MMp);
        this.#Inteligencia = this.#CalculaAtr(50, pwr, this.#MInteligencia);
    }

    SetMagia(mag = 1) {
        this.#Mp = this.#CalculaAtr(120, mag, this.#MMp);
        this.Magico = this.#CalculaAtr(250, mag, this.#MMagico);
    }

    #CalculaAtr(num, vezes, modif) {
        for (let i = 0; i < vezes; i++) {
            result = +num;
            result *= 1 + modif;
        }
        return result;
    }
}