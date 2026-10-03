// Manzano p.66 — Lista 05b: tabuada de 1 a 10
// b) Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. 

let numero = Number(prompt("Digite um número:"));
let resultado = "";
for (let contador = 1; contador <= 10; contador++) {
    resultado += numero + " x " + contador + " = " + (numero * contador) + "\n";
}
alert(resultado);
