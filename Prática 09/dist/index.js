"use strict";
const funcoes = [
    // 0
    (numeros) => {
        return Math.max(...numeros);
    },
    // 1
    (numeros) => {
        return Math.min(...numeros);
    }
];
const executaFuncoes = function (funcoes) {
    const valores = [5, 8, 10, 1, 6, 7];
    for (let funcao of funcoes) {
        let resultado = funcao(valores);
        console.log(resultado);
    }
};
executaFuncoes(funcoes);
