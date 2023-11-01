"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pokmon_factory_js_1 = __importDefault(require("./pokmon-factory.js"));
const express_1 = __importDefault(require("express"));
const pokemons = new pokmon_factory_js_1.default("./data/pokemon.csv").pokemons;
const app = (0, express_1.default)();
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
});
app.get('/', (req, res) => {
    const pokemonsFiltrados = pokemons.filter(valores => valores.geracao == 1);
    res.status(200).json(pokemonsFiltrados);
});
app.get('/top', (req, res) => {
    const filtrados = pokemons.filter(value => {
        return value.id === 1 ||
            value.id === 4 ||
            value.id === 7 ||
            value.id === 16 ||
            value.id === 25;
    });
    const retorno = [];
    filtrados.forEach(pokemon => {
        if (retorno.filter(value => value.id === pokemon.id).length === 0) {
            retorno.push(pokemon);
        }
    });
    res.status(200).json(retorno);
});
