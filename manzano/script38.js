// Manzano p.66 — Lista 05c: soma de 1 a 100
// c) Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100). 

let soma = 0;
for (let numero = 1; numero <= 100; numero++) {
    soma = soma + numero;
}
alert("Soma: " + soma);
