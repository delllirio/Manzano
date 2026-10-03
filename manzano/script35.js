// Manzano p.50 — Lista 04j: divisão inteira por subtrações sucessivas
// j) Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer. Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo. 

let dividendo = Number(prompt("Digite um dividendo inteiro não negativo:"));
let divisor = Number(prompt("Digite um divisor inteiro positivo:"));
let quociente = 0;
if (divisor <= 0 || dividendo < 0) {
    alert("Use dividendo não negativo e divisor positivo.");
} else {
    do {
        if (dividendo >= divisor) {
            dividendo = dividendo - divisor;
            quociente++;
        }
    } while (dividendo >= divisor);
    alert("Quociente inteiro: " + quociente + "\nResto: " + dividendo);
}
