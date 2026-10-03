// Manzano p.66 — Lista 05h: base elevada a expoente
// h) Elaborar um programa que apresente como resultado o valor de uma potência de uma base qualquer elevada a um expoente qualquer, ou seja, de B^E , em que B é o valor da base e E o valor do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). 

let base = Number(prompt("Digite a base:"));
let expoente = Number(prompt("Digite um expoente inteiro não negativo:"));
let resultado = 1;
for (let contador = 1; contador <= expoente; contador++) {
    resultado = resultado * base;
}
alert("Resultado: " + resultado);
