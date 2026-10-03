// Manzano p.66 — Lista 05k: fatoriais dos ímpares de 1 a 9
// k) Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares situados na faixa numérica de 1 a 10. 

let resultado = "";
for (let numero = 1; numero <= 9; numero = numero + 2) {
    let fatorial = 1;
    for (let contador = 1; contador <= numero; contador++) {
        fatorial = fatorial * contador;
    }
    resultado += numero + "! = " + fatorial + "\n";
}
alert(resultado);
