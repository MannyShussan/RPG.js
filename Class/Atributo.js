export class Atributo {
    // Atributos
    HP;
    MP;
    EST;

    // Propriedade
    DES;
    INT;
    SPD;
    DEF;
    STR;

    // Habilidades
    HAB

    VUL;

    constructor(hp, mp, est, des, int, spd, def, str, hab, vul) {
        this.HP = hp;
        this.MP = mp;
        this.EST = est;
        this.DES = des;
        this.INT = int;
        this.SPD = spd;
        this.DEF = def;
        this.STR = str;
        this.HAB = hab;
        this.VUL = vul;
    }
}