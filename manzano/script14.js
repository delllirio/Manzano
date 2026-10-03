// Manzano p.46 — Lista 03a: tabuada de 1 a 10
// a) Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.

let numero = Number(prompt("Digite um número:"));
let contador = 1;
let resultado = "";
while (contador <= 10) {
    resultado += numero + " x " + contador + " = " + (numero * contador) + "\n";
    contador++;
}
alert(resultado);
