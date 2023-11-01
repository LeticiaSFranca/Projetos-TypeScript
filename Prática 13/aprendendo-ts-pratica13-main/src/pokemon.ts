/**
 * Define um Pokémon com seus principais atributos
 */

export default class Pokemon {
    private _id: number;
    private _nome: string;
    private _tipo: string;
    private _geracao: number;
    private _lendario: boolean;

    constructor(id: number, nome: string, tipo: string, geracao: number, lendario: boolean) {
        this._id = id;
        this._nome = nome;
        this._tipo = tipo;
        this._geracao = geracao;
        this._lendario = lendario;
    }

    get id() {
        return this._id;
    }

    get nome() {
        return this._nome;
    }
    
    get tipo() {
        return this._tipo;
    }

    get geracao() {
        return this._geracao;
    }    
    
    get lendario() {
        return this._lendario;
    }

}