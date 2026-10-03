// Manzano p.50 — Lista 04g: fatoriais de 1, 3, 5, 7 e 9
// g) Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares situados na faixa numérica de 1 a 10. 

let numero = 1;
let resultado = "";
do {
    let contador = 1;
    let fatorial = 1;
    do {
        fatorial = fatorial * contador;
        contador++;
    } while (contador <= numero);
    resultado += numero + "! = " + fatorial + "\n";
    numero = numero + 2;
} while (numero <= 9);
alert(resultado);
