// Manzano p.50 — Lista 04b: soma dos pares de 1 a 500
// b) Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500. 

let numero = 1;
let soma = 0;
do {
    if (numero % 2 === 0) {
        soma = soma + numero;
    }
    numero++;
} while (numero <= 500);
alert("Soma dos pares: " + soma);
