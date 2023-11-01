import PokemonFactory from "./pokmon-factory.js"
import Pokemon from "./models/pokemon.js"
import express, { Request, Response } from 'express'

const pokemons: Pokemon[] = new PokemonFactory("./data/pokemon.csv").pokemons

const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`)
})

app.get('/', (req: Request, res: Response) => {
    const pokemonsFiltrados = pokemons.filter(valores => valores.geracao == 1)
    res.status(200).json(pokemonsFiltrados)
})

app.get('/top', (req: Request, res: Response) => {
    const filtrados = pokemons.filter(value => {
        return value.id === 1 ||
            value.id === 4 ||
            value.id === 7 ||
            value.id === 16 ||
            value.id === 25;
    });
    const retorno: Pokemon[] = [];
    filtrados.forEach(pokemon => {
        if (retorno.filter(value => value.id === pokemon.id).length === 0) {
            retorno.push(pokemon);
        }
    });
    res.status(200).json(retorno);
})