import PokemonFactory from "./pokmon-factory.js"
import Pokemon from "./models/pokemon.js"

const pokemons : Pokemon[] = new PokemonFactory("./data/pokemon.csv").pokemons

for (let pokemon of pokemons) {
    if (pokemon.geracao === 1 && pokemon.lendario) {
        const {nome, geracao} = pokemon
        console.log(`O pokemon ${nome} é lendário da fase ${geracao}`)
    }
}