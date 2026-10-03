// Manzano p.25 — 7j: dólares para reais
// j) Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares disponível com o usuário, para que seja apresentado o valor em moeda brasileira.

let cotacao = Number(prompt("Cotação do dólar em reais:"));
let dolares = Number(prompt("Valor em dólares:"));
let reais = cotacao * dolares;
alert("Valor em reais: R$ " + reais);
