//Crie um programa que calcule o Índice de Massa Corporal (IMC) de uma pessoa.

//Orientações:

//Utilize o método prompt() do objeto window para realizar a leitura dos dados de entrada.
//Utilize a fórmula IMC = peso / altura² para calcular o IMC.
//Utilize a estrutura if-else para classificar o IMC de acordo com a tabela da OMS:
//IMC	Indicação
//Abaixo de 18,5	Abaixo do peso
//18,5 - 24,9	Peso normal
//25,0 - 29,9	Sobrepeso
//30,0 - 34,9	Obesidade grau I
//35,0 - 39,9	Obesidade grau II
//Acima de 40,0	Obesidade grau III

const altura = window.prompt('Informe sua altura');
const peso = window.prompt('Informe seu peso');
const imc = peso / (altura **2);

if (imc <= 18.5) {
    window.alert ('Abaixo do peso.')
} else if (imc <= 24.9) {
    window.alert ('Peso normal.')
} else if (imc <= 29.9) {
    window.alert ('Sobrepeso.')
} else if (imc <= 34.9) {
    window.alert ('Obesidade grau I.')
} else if (imc <= 39.9) {
    window.alert ('Obesidade grau II.')
} if (imc <= 40.0) {
    window.alert ('Obesidade grau III.')
};
