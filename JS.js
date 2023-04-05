//1 -Como declarar uma variável com valor undefined em JavaScript? Exemplifique e demonstre a saída do valor da variável! (5 Pontos)
let varUnd;
console.log(varUnd);

//2 -Como usar o operador % em JavaScript? Exemplifique e demonstre a saída! (5 Pontos)
let operador = 2;
console.log(operador % 2);

//3 -Escreva um programa que calcula o índice de massa corporal (IMC) de uma pessoa e exibe uma mensagem indicando se ela está abaixo, no peso ideal ou acima do peso. Considere as seguintes faixas de IMC:  abaixo de 18,5 (abaixo do eso), entre 18,5   24,9 (peso ideal) e acima de 24,9 (acima do peso). Exemplifique e demonstre a saída! (10 Pontos)
let peso = prompt("Digite seu peso: ");
let altura = prompt("Digite sua altura");
let alturaCalculo = altura * altura;
let IMC = peso / alturaCalculo;

if (IMC <= 18.5) {
  document.write(
    "Com " +
      peso +
      "kg e " +
      altura +
      "m, você está abaixo do IMC recomendado<br>"
  );
} else if (IMC > 18.5 && IMC < 24.9) {
  document.write(
    "Com " +
      peso +
      "kg e " +
      altura +
      "m, você está entre a média do IMC recomendado<br>"
  );
} else {
  document.write(
    "Com " +
      peso +
      "kg e " +
      altura +
      "m, você está acima do IMC recomendado<br>"
  );
}

//4 -Faça um programa que receba a idade de uma pessoa e exiba uma mensagem indicando em qual faixa etária ela se encontra: criança (até 12 anos), adolescente (entre 13 e 18 anos), adulto (entre 19 e 60 anos) ou idoso (mais de 60 anos). Exemplifique e demonstre a saída! (10 Pontos)
let idade = prompt("Digite a sua idade: ");

if (idade <= 12) {
  document.write("Com " + idade + " anos, você se enquadra como: criança.<br>");
} else if (idade <= 18) {
  document.write(
    "Com " + idade + " anos, você se enquadra como: adolescente.<br>"
  );
} else if (idade <= 60) {
  document.write("Com " + idade + " anos, você se enquadra como: adulto.<br>");
} else {
  document.write("Com " + idade + " anos, você se enquadra como: idoso.<br>");
}

//5 -Crieum programa que recebaum nome de usuário e uma senha e verifiquese eles correspondem aos dados de um usuário cadastrado. Considere que o usuário cadastrado possui nome de usuário "admin" e senha "1234". O programa deve exibir uma mensagem indicando se o login foi realizado com sucesso ou se houve falha de autenticação.Exemplifique e demonstre a saída! (5 Pontos)
let usuario = "admin";
let senha = "1234";

let usu = prompt("Digite o seu nome de usuário.");
let sen = prompt("Digite a sua senha.");

if (usuario != usu || senha != sen) {
  document.write(
    "Falha na autenticação, alguma das credênciais está incorreta.<br>"
  );
} else {
  document.write(
    "O login foi realizado com sucesso.<br>Seja bem-vindo ao sistema.<br>"
  );
}

//6 -Vamos criar um programa que calculea média de 7notas e exibauma mensagem indicando se o aluno foi aprovado ou reprovado. Considere que a média mínima para aprovação é 6.Exemplifique e demonstre a saída! (5 Pontos)
let nota1 = parseFloat(prompt("Qual foi sua primeira nota:"));
let nota2 = parseFloat(prompt("Qual foi sua segunda nota:"));
let nota3 = parseFloat(prompt("Qual foi sua terceira nota:"));
let nota4 = parseFloat(prompt("Qual foi sua quarta nota:"));
let nota5 = parseFloat(prompt("Qual foi sua quinta nota:"));
let nota6 = parseFloat(prompt("Qual foi sua sexta nota:"));
let nota7 = parseFloat(prompt("Qual foi sua setima nota:"));

let media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) / 7;
if (media >= 6) {
  document.write("Aprovado. Sua media foi " + media.toFixed(1));
} else {
  document.write("Reprovado. Sua media foi " + media.toFixed(1));
}

//7 -Crie um programa que digite o nome, idade, Curso e ano na tela um embaixo do outro , no seu html coloque um fundo e um titulo e o javascript deve ser externo.(20 Pontos)
let nome = prompt("digite seu nome:");
let idade2 = prompt("agora sua idade:");
let curso = prompt("seu curso:");
let ano = prompt("e o ano que estamos:");

document.write(
  "<br>Seu nome é " +
    nome +
    "<br>A sua idade é " +
    idade2 +
    "<br>Seu curso é " +
    curso +
    "<br>Ano em que estamos " +
    ano
);

//8 -Crie  um  programa  em  Javascript  que troque  a  palavra  lugar  por  mundo  da frase O  LUGAR  VIRA TECNOLOGIA e apresente na tela. (20 Pontos)
let txt = "<br>O lugar vira tecnologia";
document.write(txt.replace("lugar", "mundo"));

//9 -Crie um programa que declare a variável como String depois converta para float e em seguida apresente apenas dois numeros depois da virgula
let numString = "134.5689"
let numFloat = parseFloat(numString)
document.write(numFloat.toFixed(2))