// Manzano p.25 — 7i: quadrado da diferença entre A e B
// i) Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo segundo.

let a = Number(prompt("Digite A:"));
let b = Number(prompt("Digite B:"));
let resultado = (a - b) * (a - b);
alert("Quadrado da diferença: " + resultado);
