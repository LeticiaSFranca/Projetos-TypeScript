"use strict";
/**
 * Implementar um algoritmo recursivo que imprima os n itens da sequência de Fibonacci.
 * Data: 22/05/2023
 */
function fibonacci(n, anterior = 0, valor = 1) {
    if (n > 0) {
        console.log(valor);
        fibonacci(n - 1, valor, valor + anterior);
    }
}
fibonacci(10);
