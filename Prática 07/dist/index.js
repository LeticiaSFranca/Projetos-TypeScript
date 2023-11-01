"use strict";
// Lista de valores
let valores = [2.99, 10.50, 1.25, 4.80, 3.60];
// Cálculo da média
let soma = 0.0;
for (let valor of valores) {
    soma += valor;
}
console.log("A média dos valores é:", soma / valores.length);
// Ordenação com o bubble sort
for (let i = 0; i < valores.length - 1; i++) {
    for (let j = 0; j < valores.length - 1 - i; j++) {
        if (valores[j] > valores[j + 1]) {
            let auxiliar = valores[j];
            valores[j] = valores[j + 1];
            valores[j + 1] = auxiliar;
        }
    }
}
console.log("Valores ordenados:", valores);
