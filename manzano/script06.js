// Manzano p.25 — 7f: trocar valores de A e B
// f) Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresentar os valores trocados

let a = Number(prompt("Digite o valor de A:"));
let b = Number(prompt("Digite o valor de B:"));
let c = a;
a = b;
b = c;
alert("A agora vale: " + a + "\nB agora vale: " + b);
