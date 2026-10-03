// Manzano p.66 — Lista 05e: ímpares de 0 a 20
// e) Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo. 

let resultado = "";
for (let numero = 0; numero <= 20; numero++) {
    if (numero % 2 !== 0) {
        resultado += numero + "\n";
    }
}
alert(resultado);
