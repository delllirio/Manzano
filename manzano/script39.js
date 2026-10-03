// Manzano p.66 — Lista 05d: soma dos pares de 1 a 500
// d) Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.

let soma = 0;
for (let numero = 1; numero <= 500; numero++) {
    if (numero % 2 === 0) {
        soma = soma + numero;
    }
}
alert("Soma dos pares: " + soma);
