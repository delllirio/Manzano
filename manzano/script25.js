// Manzano p.46 — Lista 03l: maior e menor número positivo até entrada negativa
// l) Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário. 

let numero = Number(prompt("Digite um número positivo (negativo para encerrar):"));
let maior = numero;
let menor = numero;
let encontrouPositivo = false;
while (numero >= 0) {
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
    numero = Number(prompt("Digite outro número positivo (negativo para encerrar):"));
}
if (encontrouPositivo) {
    alert("Maior positivo: " + maior + "\nMenor positivo: " + menor);
} else {
    alert("Nenhum número positivo foi informado.");
}
