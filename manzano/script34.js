// Manzano p.50 — Lista 04i: maior e menor número positivo até entrada negativa
//i) Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário. 

let numero;
let maior = 0;
let menor = 0;
let encontrouPositivo = false;
do {
    numero = Number(prompt("Digite um número positivo (negativo para encerrar):"));
    if (numero > 0) {
        if (!encontrouPositivo) {
            maior = numero;
            menor = numero;
            encontrouPositivo = true;
        } else {
            if (numero > maior) {
                maior = numero;
            }
            if (numero < menor) {
                menor = numero;
            }
        }
    }
} while (numero >= 0);
if (encontrouPositivo) {
    alert("Maior positivo: " + maior + "\nMenor positivo: " + menor);
} else {
    alert("Nenhum número positivo foi informado.");
}
