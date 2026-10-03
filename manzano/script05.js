// Manzano p.25 — 7e: prestação em atraso
// e) Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula PRESTACAO = VALOR + (VALOR * TAXA/100) * TEMPO).

let valor = Number(prompt("Valor da prestação:"));
let taxa = Number(prompt("Taxa de juros (%):"));
let tempo = Number(prompt("Tempo de atraso:"));
let prestacao = valor + (valor * taxa / 100) * tempo;
alert("Valor da prestação com juros: " + prestacao);
