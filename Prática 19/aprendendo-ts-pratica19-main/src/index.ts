// Questão 1
import express, { Request, Response } from "express";

const port = 3000
const app = express()

// Questão 2
app.get("/", (res: Response) =>{
    const nome = "Letícia Silva França"
    const turma = "3D1"
    const prova = "B"
    res.status(200).json({msg: `nome: ${nome}, turma: ${turma}, prova: ${prova}`});
});

// Questão 3
app.get("/calculos", (req: Request, res: Response) => {
    try {
        const {comprimentoX, comprimentoY } = req.query
        let resultado = 0
        if (typeof comprimentoX === 'string' && typeof comprimentoY === 'string') {
            if (parseInt(comprimentoX) > 0 && parseInt(comprimentoY) > 0) {
                resultado = parseInt(comprimentoX) * parseInt(comprimentoY)
            }
            else {
                throw new Error("Valores inválidos")
            }
        } else {
            throw new Error("Valores não informados")
        }

        res.status(200).json({ resultado: `${resultado}`})
    }
    catch (err) {
        res.status(404).json({ Erro: `${(err as Error).message}` })
    }
})

app.listen(port, () => {
    console.log(`O servidor está sendo executado na porta ${port}`);
});