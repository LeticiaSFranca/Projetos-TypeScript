import fs from "fs";
import Pokemon from "./pokemon.js";

/**
 * Converte o arquivo csv em um array de Pokemons
 */
export default class PokemonFactory {
    private _data: string;

    constructor(arquivo: string) {
        // Lê o conteúdo de um arquivo de forma sincrona
        this._data = fs.readFileSync(arquivo, "utf-8");
    }

    get pokemons(): Pokemon[] {
        const lista: Pokemon[] = [];
        let linhas = this.lerLinhas();

        for (let i = 1; i < linhas.length; i++) {
            let colunas = this.lerColunas(linhas[i]);
            try {
                const pokemon = this.criar(colunas);
                lista.push(pokemon);
            } catch (e) {}
        }

        return lista;
    }

    private lerLinhas(): string[] {
        return this._data.split("\n");
    }

    private lerColunas(linha: string): string[] {
        return linha.split(",");
    }

    private criar(colunas: string[]): Pokemon {
        if (!colunas[0]) {
            throw new Error();
        }

        const id = parseInt(colunas[0].trim());
        const nome = colunas[1].trim();
        const tipo = colunas[2].trim();
        const geracao = parseInt(colunas[11].trim());
        const lendario = colunas[12].trim() == "TRUE";
        return new Pokemon(id, nome, tipo, geracao, lendario);
    }

}
