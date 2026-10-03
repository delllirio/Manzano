// Manzano p.25 — 7h: volume de uma caixa retangular
// h) Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula: VOLUME = COMPRIMENTO * LARGURA * ALTURA.


let comprimento = Number(prompt("Comprimento:"));
let largura = Number(prompt("Largura:"));
let altura = Number(prompt("Altura:"));
let volume = comprimento * largura * altura;
alert("Volume da caixa: " + volume);
