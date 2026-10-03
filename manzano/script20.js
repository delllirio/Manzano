// Manzano p.46 — Lista 03g: 15 termos de Fibonacci
// g) Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de Fibonacci é formada pela seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza pela soma de um termo atual com o seu anterior subseqüente, para que seja formado o próximo valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc. 

let anterior = 1;
let atual = 1;
let contador = 1;
let resultado = "";
while (contador <= 15) {
    resultado += anterior + "\n";
    let proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
    contador++;
}
alert(resultado);
