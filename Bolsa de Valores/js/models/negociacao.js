export class Negociacao{
    #data;
    #quantidade;
    #valor;

    constructor (data, quantidade, valor){
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }
    get date(){
        return this.#data;
    }
    get quantidade(){
        return this.#quantidade;
    }
    get valor(){
        return this.#valor;
    }
}