// Manzano p.50 — Lista 04e: soma dos fatoriais de 15 números
// e) Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o total do somatório da fatorial de cada valor lido. 


let quantidade = 1;
let somaFatoriais = 0;
do {
    let numero = Number(prompt("Digite o número inteiro " + quantidade + ":"));
    let contador = 1;
    let fatorial = 1;
    do {
        if (numero > 1) {
            fatorial = fatorial * contador;
        }
        contador++;
    } while (contador <= numero);
    somaFatoriais = somaFatoriais + fatorial;
    quantidade++;
} while (quantidade <= 15);
alert("Soma dos fatoriais: " + somaFatoriais);
