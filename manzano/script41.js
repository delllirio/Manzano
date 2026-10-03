// Manzano p.66 — Lista 05f: múltiplos de 4 abaixo de 200
// f) Apresentar todos os números divisíveis por 4 que sejam menores que 200. Para verificar se o número é divisível por 4, efetuar dentro da malha a verificação lógica desta condição com a instrução se, perguntando se o número é divisível; sendo, mostre-o; não sendo, passe para o próximo passo. A variável que controlará o contador deve ser iniciada com o valor 1. 

let resultado = "";
for (let numero = 1; numero < 200; numero++) {
    if (numero % 4 === 0) {
        resultado += numero + "\n";
    }
}
alert(resultado);
