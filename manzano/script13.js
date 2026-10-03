// Manzano p.25 — 7m: quadrado da soma de A, B e C
//m) Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o quadrado da soma dos três valores lidos.


let a = Number(prompt("Digite A:"));
let b = Number(prompt("Digite B:"));
let c = Number(prompt("Digite C:"));
let soma = a + b + c;
let resultado = soma * soma;
alert("Quadrado da soma: " + resultado);
