"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Questão 1
const express_1 = __importDefault(require("express"));
const port = 3000;
const app = (0, express_1.default)();
// Questão 2
app.get("/", (res) => {
    const nome = "Letícia Silva França";
    const turma = "3D1";
    const prova = "B";
    res.status(200).json({ msg: `nome: ${nome}, turma: ${turma}, prova: ${prova}` });
});
// Questão 3
app.get("/calculos", (req, res) => {
    try {
        const { comprimentoX, comprimentoY } = req.query;
        let resultado = 0;
        if (typeof comprimentoX === 'string' && typeof comprimentoY === 'string') {
            if (parseInt(comprimentoX) > 0 && parseInt(comprimentoY) > 0) {
                resultado = parseInt(comprimentoX) * parseInt(comprimentoY);
            }
            else {
                throw new Error("Valores inválidos");
            }
        }
        else {
            throw new Error("Valores não informados");
        }
        res.status(200).json({ resultado: `${resultado}` });
    }
    catch (err) {
        res.status(404).json({ Erro: `${err.message}` });
    }
});
app.listen(port, () => {
    console.log(`O servidor está sendo executado na porta ${port}`);
});
