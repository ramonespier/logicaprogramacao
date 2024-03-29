# logicaprogramacao

Treinando a lógica de programção com JavaScript

## operadorees-aritimeticos.js

~~~js
const numero1 = 40
const numero2 = 20
~~~

A palavra `const` é utilizada para declaração de variáveis que não vão ser reatribuídas (não permite reatribuição).

Aqui declaramos duas constantes que serão calculadas no bloco a seguir.

~~~js
console.log(`Números da operação são ${numero1} e ${numero2}`);
console.log(`A soma dos números é ${numero1 + numero2}`);
console.log(`A subtração dos números é ${numero1 - numero2}`);
console.log(`A multiplicação dos números é ${numero1  numero2}`);
console.log(`A divisão dos números é ${numero1 / numero2}`);
console.log(`O resto da divisão dos números é ${numero1 % numero2}`);
console.log(`O número1 elevado à potência do numero2 é ${numero1 ** numero2}`);
~~~

Em cada uma das operações, gemos um operador aritmético:

*   `+` -> soma
*   `-` -> subtração
*   `*` -> multiplicação
*   `/` -> divisão
*   `%` -> resto da divisão
*   `**` -> potenciação

## operadores-atribuicao.js
~~~js
let numero = 10;
~~~

Declaramos a variável `numero` usando a palavra `let`, pois essa variável sera **reatribuída** ao longo do nosso código.

Em seguida fazemos uma série de reatribuições usando os operadores de atribuíção.

~~~js
console.log(`O número é inicialmente igual a${numero}`);
console.log(`Após atribuir somando o número 10: ${numero += 10}`);
console.log(`Reatribuindo e subtraindo 10: ${numero -= 10}`);
console.log(`Reatribuindo e multiplicando 10: ${numero *= 10}`);
console.log(`Reatribuindo e dividindo 10: ${numero /= 10}`);
console.log(`Reatribuindo para o resto da divisão por 10: ${numero %= 10}`);
console.log(`Incrementando um número em 1: ${++ numero}`);
console.log(`Decrementando um número em 1: ${-- numero}`);
console.log(`O número final é igual a ${numero}`);
~~~

Operadores de atribuíção:

*   `+=` -> atribuíção com soma.
*   `-=` -> atribuíção com subtração.
*   `*=` -> atribuição com multiplicação.
*   `/=` -> atribuição com divisão.
*   `%=` -> atribuição com resto da divisão.
*   `++` -> atribuição com **incremento 1** (pode ser *pré* ou *pós* incrementado). Ex: `numero ++` (pós-incremento) ou `++ numero` (pré-incremento).
*   `--` -> atribuição com **decremento 1** (pode ser *pré* ou *pós* incrementado). Ex: `numero --` (pós-decremento) ou `--numero` (pré-decremento).


## operadores-comparacao.js

Neste arquivo conheceos os operadores de comparação e a estrutura lógica de decisão **if-else**.

~~~js
Estrutra IF-ELSE

if(condicao) { 
    console.log('VERDADEIRO');
} else {
    console.log('FALSO');
}
~~~

Usamos também as palavras `true` e `false` para "perguntar" se é verdadeiro ou falso

   `true` -> palavra reservada para o valor verdadeiro
   `false` -> palavra reservada para o valor falso

Também aprendemos os valores da lógica booliana


Operadores de comparação:

*   `==` -> é igual
*   `===` -> É estritamente igual (valor ou tipo)
*   `!==` -> **NÃO** é estritamente igual (valor ou tipo)
*   `!=` -> não é igual
*   `>=` -> maior OU igual
*   `<=` -> menor OU igual
*   `>` -> maior que
*   `<` -> menor que

## desafio1.js

Escreva um código em JavaScript que resolva o problema descrito no livro Lógica de Programação I, p. 20, em que temos que obter as 3 notas de um aluno, calcular a média e exibir se o aluno foi aprovado, reprovado ou se ficou para exame. Não é necessário ler as notas, você pode defini-las com variáveis.

Você precisará utilizar uma estrutura de decisão composta, como a seguir:

~~~js
if (condicao1) {
    // código da condição 1
} else if (condicao2) {
    // código da condição 2
} else {
    // código se nenhuma das condições for verdadeira
}
~~~

## desafio2.js

Crie um programa que calcule o Índice de Massa Corporal (IMC) de uma pessoa. 

Orientações: 
* Utilize o método `prompt()` do objeto `window` para realizar a leitura dos dados de entrada.
* Utilize a fórmula **IMC = peso / altura²** para calcular o IMC.
* Utilize a estrutura **if-else** para classificar o IMC de acordo com a tabela da OMS:

IMC | Indicação
----- | -----
Abaixo de 18,5	| Abaixo do peso
18,5 - 24,9	| Peso normal
25,0 - 29,9	| Sobrepeso
30,0 - 34,9	| Obesidade grau I
35,0 - 39,9	| Obesidade grau II
Acima de 40,0 |	Obesidade grau III

### Problema adicional

Como executar dois "programas" na mesma página?