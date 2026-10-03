// Manzano p.46 — Lista 03i: ler 10 números, soma e média
// i) Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do somatório e a média aritmética dos valores lidos. 

let contador = 1;
let soma = 0;
while (contador <= 10) {
    let numero = Number(prompt("Digite o número " + contador + ":"));
    soma = soma + numero;
    contador++;
}
alert("Soma: " + soma + "\nMédia: " + (soma / 10));
