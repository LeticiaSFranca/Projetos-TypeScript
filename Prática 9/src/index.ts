type FuncaoArrayQueRetornaUmNumero = (numeros: number[]) => number;

const funcoes: FuncaoArrayQueRetornaUmNumero[] = [
    // 0
    (numeros: number[]) : number => {
        return Math.max(...numeros);
    },
    // 1
    (numeros: number[]) : number =>{
        return Math.min(...numeros);
    }
];

const executaFuncoes = function (funcoes: FuncaoArrayQueRetornaUmNumero[]) : void {
    const valores = [5, 8, 10, 1, 6, 7];
    for (let funcao of funcoes){
        let resultado = funcao(valores);
        console.log(resultado);
    }
}

executaFuncoes(funcoes);