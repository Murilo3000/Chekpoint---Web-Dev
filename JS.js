//1 -Como declarar uma variável com valor undefined em JavaScript? Exemplifique e demonstre a saída do valor da variável! (5 Pontos) 
let varUnd;
console.log(varUnd)

//2 -Como usar o operador % em JavaScript? Exemplifique e demonstre a saída! (5 Pontos)
let operador = 2;
console.log(operador%2)

//3 -Escreva um programa que calcula o índice de massa corporal (IMC) de uma pessoa e exibe uma mensagem indicando se ela está abaixo, no peso ideal ou acima do peso. Considere as seguintes faixas de IMC:  abaixo de 18,5 (abaixo do eso), entre 18,5   24,9 (peso ideal) e acima de 24,9 (acima do peso). Exemplifique e demonstre a saída! (10 Pontos)
let peso = prompt("Digite seu peso: ")
let altura = prompt("Digite sua altura")
let alturaCalculo = altura*altura;

if (peso/alturaCalculo < 18,5){
    console.log("Você está abaixo do IMC recomendado")
} if (peso/alturaCalculo >= 18.5 && peso/alturaCalculo <= 24.9){
    console.log("Você está entre a média do IMC recomendado")
} if (peso/alturaCalculo > 24.9) {
    console.log("Você está acima do IMC recomendado")
}

//4 -Faça um programa que receba a idade de uma pessoa e exiba uma mensagem indicando em qual faixa etária ela se encontra: criança (até 12 anos), adolescente (entre 13 e 18 anos), adulto (entre 19 e 60 anos) ou idoso (mais de 60 anos). Exemplifique e demonstre a saída! (10 Pontos)
let idade = prompt("Digite a sua idade: ")

if (idade <= 12){
    document.write("Com " + idade + " anos, você se enquadra como: criança.")
} else if (idade <= 18){
    document.write("Com " + idade + " anos, você se enquadra como: adolescente.")
} else if (idade <= 60){
    document.write("Com " + idade + " anos, você se enquadra como: adulto.")
} else {
    document.write("Com " + idade + " anos, você se enquadra como: idoso.")
}