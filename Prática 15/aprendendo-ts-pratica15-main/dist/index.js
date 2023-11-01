"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
});
app.get("/somar", (req, res) => {
    try {
        const { numero1, numero2 } = req.query;
        let total = 0;
        if (typeof numero1 === 'string' && typeof numero2 === 'string') {
            if (parseInt(numero1) > 0 && parseInt(numero2) > 0) {
                total = parseInt(numero1) + parseInt(numero2);
            }
            else {
                throw new Error("Valores inválidos");
            }
        }
        else {
            throw new Error("Valores não informados");
        }
        res.status(200).json({ Resultado: `${total}` });
    }
    catch (err) {
        res.status(404).json({ Erro: `${err.message}` });
    }
});
app.get("/multiplicar", (req, res) => {
    try {
        const { numero1, numero2 } = req.query;
        let total = 0;
        if (typeof numero1 === 'string' && typeof numero2 === 'string') {
            if (parseInt(numero1) > 0 && parseInt(numero2) > 0) {
                total = parseInt(numero1) * parseInt(numero2);
            }
            else {
                throw new Error("Valores inválidos");
            }
        }
        else {
            throw new Error("Valores não informados");
        }
        res.status(200).json({ Resultado: `${total}` });
    }
    catch (err) {
        res.status(404).json({ Erro: `${err.message}` });
    }
});
