// Manzano p.46 — Lista 03e: potências de 3, expoentes de 0 a 15
// e) Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). 


let expoente = 0;
let resultado = "";
while (expoente <= 15) {
    let potencia = 1;
    let contador = 1;
    while (contador <= expoente) {
        potencia = potencia * 3;
        contador++;
    }
    resultado += "3 elevado a " + expoente + " = " + potencia + "\n";
    expoente++;
}
alert(resultado);
