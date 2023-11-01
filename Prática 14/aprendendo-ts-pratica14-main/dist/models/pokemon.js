"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pokemon {
    constructor(id, nome, geracao, lendario) {
        this._id = 0;
        this._nome = "";
        this._geracao = 0;
        this._lendario = false;
        this._id = id;
        this._nome = nome;
        this._geracao = geracao;
        this._lendario = lendario;
    }
    get id() {
        return this._id;
    }
    get nome() {
        return this._nome;
    }
    get geracao() {
        return this._geracao;
    }
    get lendario() {
        return this._lendario;
    }
}
exports.default = Pokemon;
