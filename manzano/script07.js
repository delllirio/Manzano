// Manzano p.25 — 7g: somas e produtos dos pares
// g) Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D, devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de multiplicação e apresentar doze resultados de saída.

let a = Number(prompt("Digite A:"));
let b = Number(prompt("Digite B:"));
let c = Number(prompt("Digite C:"));
let d = Number(prompt("Digite D:"));
alert(
    "Somas:\nA+B = " + (a + b) +
    "\nA+C = " + (a + c) +
    "\nA+D = " + (a + d) +
    "\nB+C = " + (b + c) +
    "\nB+D = " + (b + d) +
    "\nC+D = " + (c + d) +
    "\n\nProdutos:\nA*B = " + (a * b) +
    "\nA*C = " + (a * c) +
    "\nA*D = " + (a * d) +
    "\nB*C = " + (b * c) +
    "\nB*D = " + (b * d) +
    "\nC*D = " + (c * d)
);
