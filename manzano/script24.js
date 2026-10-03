// Manzano p.46 — Lista 03k: área total de uma residência
// k) Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor total acumulado da área residencial. 

let continuar = "SIM";
let areaTotal = 0;
while (continuar !== "NAO") {
    let comodo = prompt("Nome do cômodo:");
    let largura = Number(prompt("Largura do cômodo em metros:"));
    let comprimento = Number(prompt("Comprimento do cômodo em metros:"));
    let area = largura * comprimento;
    areaTotal = areaTotal + area;
    alert("Área de " + comodo + ": " + area + " m²");
    continuar = prompt("Deseja calcular outro cômodo? Digite SIM ou NAO:").toUpperCase();
}
alert("Área total da residência: " + areaTotal + " m²");
