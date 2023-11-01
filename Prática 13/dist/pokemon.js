"use strict";
/**
 * Define um Pokémon com seus principais atributos
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Pokemon {
    constructor(id, nome, tipo, geracao, lendario) {
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
exports.default = Pokemon;
