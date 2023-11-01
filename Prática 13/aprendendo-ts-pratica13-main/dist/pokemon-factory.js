"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const pokemon_js_1 = __importDefault(require("./pokemon.js"));
/**
 * Converte o arquivo csv em um array de Pokemons
 */
class PokemonFactory {
    constructor(arquivo) {
        // Lê o conteúdo de um arquivo de forma sincrona
        this._data = fs_1.default.readFileSync(arquivo, "utf-8");
    }
    get pokemons() {
        const lista = [];
        let linhas = this.lerLinhas();
        for (let i = 1; i < linhas.length; i++) {
            let colunas = this.lerColunas(linhas[i]);
            try {
                const pokemon = this.criar(colunas);
                lista.push(pokemon);
            }
            catch (e) { }
        }
        return lista;
    }
    lerLinhas() {
        return this._data.split("\n");
    }
    lerColunas(linha) {
        return linha.split(",");
    }
    criar(colunas) {
        if (!colunas[0]) {
            throw new Error();
        }
        const id = parseInt(colunas[0].trim());
        const nome = colunas[1].trim();
        const tipo = colunas[2].trim();
        const geracao = parseInt(colunas[11].trim());
        const lendario = colunas[12].trim() == "TRUE";
        return new pokemon_js_1.default(id, nome, tipo, geracao, lendario);
    }
}
exports.default = PokemonFactory;
