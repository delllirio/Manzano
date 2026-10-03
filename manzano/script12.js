// Manzano p.25 — 7l: soma dos quadrados de A, B e C
// l) Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à soma dos quadrados dos três valores lidos.

let a = Number(prompt("Digite A:"));
let b = Number(prompt("Digite B:"));
let c = Number(prompt("Digite C:"));
let resultado = a * a + b * b + c * c;
alert("Soma dos quadrados: " + resultado);
