import fs from "fs"
import Pokemon from "./models/pokemon.js";

class PokemonFactory {
    private _data : string = "";

    constructor(filename: string) {
       this._data = fs.readFileSync(filename,'utf-8')
    }

    get pokemons() : Pokemon[] {
        const linhas : string[] = this.lerLinhas()
        const resultado : Pokemon[] = []

        for (let i = 1; i < linhas.length; i++) {
            const colunas : string[] = this.gerarColunas(linhas[i])
            try {
                const pokemon : Pokemon = this.criarPokemon(colunas)
                resultado.push(pokemon)
            } catch (err) {
                console.log('Erro em localizar Pokemon')
            }   
        }

        return resultado
    }

    private lerLinhas() : string[] {
        return this._data.split("\n")
    }

    private gerarColunas(linha:string) : string[] {
        return linha.split(',')
    }

    private criarPokemon(coluna : string[]) : Pokemon {
         if (coluna[0] === '') {
            throw new Error('Linha Inválida')
        }        

        const pokemon = new Pokemon(
            parseInt(coluna[0].trim()), 
            coluna[1].trim(),
            parseInt(coluna[11].trim()),
            coluna[12].trim() === "TRUE"
        )
        
        return pokemon
    } 
}

export default PokemonFactory