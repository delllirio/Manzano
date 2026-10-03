// Manzano p.66 — Lista 05g: potências de 3, expoentes de 0 a 15
// g) Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). 

let resultado = "";
for (let expoente = 0; expoente <= 15; expoente++) {
    let potencia = 1;
    for (let contador = 1; contador <= expoente; contador++) {
        potencia = potencia * 3;
    }
    resultado += "3 elevado a " + expoente + " = " + potencia + "\n";
}
alert(resultado);
