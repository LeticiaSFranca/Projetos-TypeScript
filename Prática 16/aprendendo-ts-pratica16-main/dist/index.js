"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3000;
const app = (0, express_1.default)();
//configurando rotas
// req : pedido / res : resposta
app.get("/", (req, res) => {
    const nome = req.query.nome;
    const idade = req.query.idade;
    res.status(200).json({ msg: `O meu nome é ${nome} e minha idade é ${idade}` });
    //o "erro" do 'status' é normal, só ignora ele
});
app.get("/soma", (req, res) => {
    const { numero1, numero2, nome } = req.query;
    //const numero1 = req.query.numero1
    //const numero2 = req.query.numero2
    let soma = 0;
    if (typeof numero1 == "string" && typeof numero2 == "string") {
        soma = parseInt(numero1) + parseInt(numero2);
    }
    // res.status(200).json({resultado: `O valor da soma é: ${soma}`});
    let nomeMaiusculo = "";
    // let nome = "";
    if (typeof nome === "string") {
        nomeMaiusculo = nome.toUpperCase();
    }
    res.status(200).json({ resultado: `O valor da soma é: ${soma}`, msg: `O nome é ${nomeMaiusculo}` });
});
app.listen(port, () => {
    console.log(`O servidor está sendo executado na porta ${port}`);
});
