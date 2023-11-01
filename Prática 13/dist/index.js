"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pokemon_factory_js_1 = __importDefault(require("./pokemon-factory.js"));
// Porta do Servidor Web
const port = 3000;
// Aplicação Express do Servidor Web
const app = (0, express_1.default)();
// Carrega o array de pokémons a partir do arquivo csv
const pokemons = new pokemon_factory_js_1.default("./data/pokemon.csv").pokemons;
// Rota raiz com todos os pokémons
app.get("/", (req, res) => {
    const filtrados = pokemons.filter(value => value.geracao === 1);
    res.status(200).json(filtrados);
});
// Rota /top com os 5 pokémons escolhidos
app.get("/top", (req, res) => {
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
// Inicia o Servidor Web
app.listen(port, () => {
    console.log(`Servidor Web rodando na porta ${port}`);
});
