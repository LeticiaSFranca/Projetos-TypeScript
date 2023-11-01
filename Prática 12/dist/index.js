"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pokmon_factory_js_1 = __importDefault(require("./pokmon-factory.js"));
const pokemons = new pokmon_factory_js_1.default("./data/pokemon.csv").pokemons;
for (let pokemon of pokemons) {
    if (pokemon.geracao === 1 && pokemon.lendario) {
        const { nome, geracao } = pokemon;
        console.log(`O pokemon ${nome} é lendário da fase ${geracao}`);
    }
}
