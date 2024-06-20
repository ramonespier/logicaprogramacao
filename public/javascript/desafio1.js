// Escreva um código em JavaScript que resolva o problema descrito no livro Lógica da Programação I, p. 20 , em que temos que obter as 3 notas de um aluno, calcular a média e exibir se o aluno foi aprovado, reprovado ou se ficou para exame. Não é necessario ler as notas, você pode defini-las com variáveis.
// Você precisará utilizar uma esrutura de decisão composta como a seguir:

const
    nota1 = 7,
    nota2 = 5,
    nota3 = 4,
    media = (nota1 + nota2 + nota3) / 3;

if (media >= 7){
    console.log (`APROVADO ${media.toFixed(2)}`);
} else if (media >= 5){
    console.log (`EXAME ${media.toFixed(2)}`);
} else {
    console.log (`REPROVADO ${media.toFixed(2)}`);
}