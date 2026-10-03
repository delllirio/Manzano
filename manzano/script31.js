// Manzano p.50 — Lista 04f: números positivos até entrada negativa
// f) Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da média. 

let numero = Number(prompt("Digite um número positivo (negativo para encerrar):"));
let soma = 0;
let quantidade = 0;
do {
    if (numero > 0) {
        soma = soma + numero;
        quantidade++;
    }
    if (numero >= 0) {
        numero = Number(prompt("Digite outro número (negativo para encerrar):"));
    }
} while (numero >= 0);
if (quantidade > 0) {
    alert("Soma: " + soma + "\nMédia: " + (soma / quantidade) + "\nQuantidade: " + quantidade);
} else {
    alert("Nenhum número positivo foi informado.");
}
