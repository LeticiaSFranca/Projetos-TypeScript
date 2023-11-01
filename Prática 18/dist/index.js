"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get('/dobrar', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { valor } = req.query;
    if (typeof valor !== 'string') {
        return res.status(400).json({ error: 'Parâmetro inválido' });
    }
    const numericValue = parseFloat(valor);
    if (isNaN(numericValue)) {
        return res.status(400).json({ error: 'Valor não numérico' });
    }
    const doubledValue = yield dobrarValorAssinc(numericValue);
    return res.json({ valor: `O dobro de ${numericValue} é ${doubledValue}.` });
}));
function dobrarValorAssinc(valor) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => {
            setTimeout(() => {
                const dobro = valor * 2;
                resolve(dobro);
            }, 5000);
        });
    });
}
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});