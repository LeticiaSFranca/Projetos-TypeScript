import express, {Request, Response} from "express";

const port = 3000;
const app = express();

app.get("/", (req: Request, res: Response) =>{
    const nome = req.query.nome;
    const idade = req.query.idade;
    res.status(200).json({msg: `O meu nome é ${nome} e minha idade é ${idade}`});
});

app.get("/soma" , (req: Request, res: Response) =>{
    const {numero1, numero2, nome} = req.query;
    let soma = 0;
    if (typeof numero1 === "string" && typeof numero2 === "string") {
        soma = parseInt(numero1) + parseInt(numero2);
    }
    if(typeof nome === "string"){
        nomeMaiusculo = nome.toUpperCase();
    }

    res.status(200).json({resultado: `O valor da soma é ${soma}, msg: O nome é ${nomeMaiusculo}`});
});

app.listen(port, () => {
    console.log(`O servidor está sendo executado na porta ${port}`);
});