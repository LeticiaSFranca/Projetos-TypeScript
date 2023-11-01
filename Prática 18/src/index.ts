import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.get('/dobrar', async (req: Request, res: Response) => {
  const { valor } = req.query;

  if (typeof valor !== 'string') {
    return res.status(400).json({ error: 'Parâmetro inválido' });
  }

  const numericValue = parseFloat(valor);
  if (isNaN(numericValue)) {
    return res.status(400).json({ error: 'Valor não numérico' });
  }

  const doubledValue = await dobrarValorAssinc(numericValue);

  return res.json({ valor: `O dobro de ${numericValue} é ${doubledValue}.` });
});

async function dobrarValorAssinc(valor: number): Promise<number> {
  return new Promise(resolve => {
    setTimeout(() => {
      const dobro = valor * 2;
      resolve(dobro);
    }, 5000);
  });
}

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});