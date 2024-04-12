// Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes VIPs.
// Faça um programa que calcule o valor total a ser pago por uma pessoa. O programa deverá ler o valor total da compra efetuada e um código que identifique se o comprador é um cliente comum [1], funcionário [2] ou VIP [3].
// A saída do programa deve ser o valor total da compra após o processamento e a categoria do desconto aplicado, se houver.
// Dica: para calcular um percentual de um número, faça a operação desconto = valor * percentualDesconto / 100

function desconto (cliente) {

    let valor = 100.00
 
    if (cliente === `Comum`) {
        mensagem = `O valor a ser pago não terá desconto, pagará ${valor}`;

    } else if (cliente === `Funcionário`) {
        mensagem = `O cliente terá 10% de desconto, irá pagar ${valor - (valor *0.1)}`

    } else {
        mensagem = `O cliente terá 5% de desconto, irá pagar ${valor - (valor *0.05)}`
    }

    return{
        mensagem: mensagem
    }
}