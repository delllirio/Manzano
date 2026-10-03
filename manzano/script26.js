// Manzano p.50 — Lista 04a: quadrados de 15 a 200
//a) Apresentar os quadrados dos números inteiros de 15 a 200. 

let numero = 15;
let resultado = "";
do {
    resultado += numero + " ao quadrado = " + (numero * numero) + "\n";
    numero++;
} while (numero <= 200);
alert(resultado);
