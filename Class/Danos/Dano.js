import { Fisico } from "./Fisicos.js";
import { Magico } from "./Magico.js";
import { Energia } from "./Energia.js";
import { Quimico } from "./Quimico.js";


export class Dano {
    #fisico
    #magico;
    #energia;
    #quimico;

    constructor(obj) {
        this.#fisico = new Fisico(obj.Dano.Fisico);
        this.#magico = new Magico(obj.Dano.Magico);
        this.#energia = new Energia(obj.Dano.Energia);
        this.#quimico = new Quimico(obj.Dano.Quimico);
    }
}