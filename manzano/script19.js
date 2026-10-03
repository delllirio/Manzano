// Manzano p.46 — Lista 03f: base elevada a expoente
// f) Elaborar um programa que apresente como resultado o valor de uma potência de uma base qualquer elevada a um expoente qualquer, ou seja, de B^E, em que B é o valor da base e E o valor do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).

let base = Number(prompt("Digite a base:"));
let expoente = Number(prompt("Digite um expoente inteiro não negativo:"));
let contador = 1;
let resultado = 1;
while (contador <= expoente) {
    resultado = resultado * base;
    contador++;
}
alert("Resultado: " + resultado);
