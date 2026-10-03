// Manzano p.66 — Lista 05a: quadrados de 15 a 200
// a) Apresentar os quadrados dos números inteiros de 15 a 200.

let resultado = "";
for (let numero = 15; numero <= 200; numero++) {
    resultado += numero + " ao quadrado = " + (numero * numero) + "\n";
}
alert(resultado);
