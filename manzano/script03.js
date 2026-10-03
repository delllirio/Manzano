// Manzano p.25 — 7c: volume de uma lata de óleo
// c) Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula: 
// Volume = Pi * Raio^2 * Altura 
let raio = Number(prompt("Digite o raio da lata:"));
let altura = Number(prompt("Digite a altura da lata:"));
let volume = 3.14159 * raio * raio * altura;
alert("Volume da lata: " + volume);
