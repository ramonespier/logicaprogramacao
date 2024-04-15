function postoGasolina (totalLitros, codigo) {
    let alcool = 2.89;
    let gasolina = 5.19;

    totalLitros = document.querySelector('#litros');
    codigo = document.querySelector('#codigo');

    if (document.querySelector(codigo === 'A')) {

        if (totalLitros < 21) {
            valor = (alcool * totalLitros) - (totalLitros * 0.03);
    
        } else {
            valor = (alcool * totalLitros) - (totalLitros * 0.05);
        };
        
    } else {

        if (totalLitros < 21) {
            valor = (gasolina * totalLitros) - (totalLitros * 0.04);
    
        } else {
            valor = (gasolina * totalLitros) - (totalLitros * 0.06);
        };        
    };

    return {
    valor: valor
    };
};

    document.querySelector('#calc-gasolina').addEventListener('click', () => {
        const totalLitros = document.querySelector('#litros');
        const codigo = document.querySelector('#codigo');

        const desconto = postoGasolina (totalLitros, codigo);

        document.querySelector('#resultado-gasolina').innerHTML = `Valor a ser pago é de R$${desconto.valor}`
    });

    document.querySelector('#limpa-gasolina').addEventListener('click', function(){
        document.querySelector('#resultado-gasolina').innerHTML = "";
    });
