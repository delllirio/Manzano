// Manzano p.25 — 7k: reais para dólares
// k) Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível com o usuário, para que seja apresentado o valor em moeda americana.


let cotacao = Number(prompt("Cotação do dólar em reais:"));
let reais = Number(prompt("Valor em reais:"));
let dolares = reais / cotacao;
alert("Valor em dólares: US$ " + dolares);
