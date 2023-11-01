import express, { Request, Response } from "express";
import PokemonFactory from "./pokemon-factory.js";
import Pokemon from "./pokemon.js";

// Porta do Servidor Web
const port = 3000;

// Aplicação Express do Servidor Web
const app = express();

// Carrega o array de pokémons a partir do arquivo csv
const pokemons: Pokemon[] = new PokemonFactory("./data/pokemon.csv").pokemons;

// Rota raiz com todos os pokémons
app.get("/", (req: Request, res: Response) => {
    const filtrados = pokemons.filter(value => value.geracao === 1);
    res.status(200).json(filtrados);
});

// Rota /top com os 5 pokémons escolhidos
app.get("/top", (req: Request, res: Response) => {
    const filtrados = pokemons.filter(value => { 
        return value.id === 1  || 
            value.id === 4  ||
            value.id === 7  ||
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
});

// Inicia o Servidor Web
app.listen(port, () => {
    console.log(`Servidor Web rodando na porta ${port}`);
});