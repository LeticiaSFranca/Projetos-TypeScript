"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const pokemon_js_1 = __importDefault(require("./models/pokemon.js"));
class PokemonFactory {
    constructor(filename) {
        this._data = "";
        this._data = fs_1.default.readFileSync(filename, 'utf-8');
    }
    get pokemons() {
        const linhas = this.lerLinhas();
        const resultado = [];
        for (let i = 1; i < linhas.length; i++) {
            const colunas = this.gerarColunas(linhas[i]);
            try {
                const pokemon = this.criarPokemon(colunas);
                resultado.push(pokemon);
            }
            catch (err) {
                console.log('Erro em localizar Pokemon');
            }
        }
        return resultado;
    }
    lerLinhas() {
        return this._data.split("\n");
    }
    gerarColunas(linha) {
        return linha.split(',');
    }
    criarPokemon(coluna) {
        if (coluna[0] === '') {
            throw new Error('Linha Inválida');
        }
        const pokemon = new pokemon_js_1.default(parseInt(coluna[0].trim()), coluna[1].trim(), parseInt(coluna[11].trim()), coluna[12].trim() === "TRUE");
        return pokemon;
    }
}
exports.default = PokemonFactory;
