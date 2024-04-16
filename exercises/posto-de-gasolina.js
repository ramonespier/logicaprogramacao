function postoGasolina (litros, codigo) {
    const alcool = 2.89;
    const gasolina = 5.19;
    let valor;

    if (codigo === 'A' && litros <= 20) {
        valor = (alcool * litros) - (litros * 0.03);

    } else if (codigo === 'A' && litros > 20) {
        valor = (alcool * litros) - (litros * 0.05);

    } else if (codigo === 'G' && litros <= 20) {
        valor = (gasolina * litros) - (litros * 0.04);

    } else if (codigo === 'G' && litros > 20) {
        valor = (gasolina * litros) - (litros * 0.06);
    
    } else {
        'Digite um código ou valor válido.'
    }

    return valor;
};



    document.querySelector('#calc-gasolina').addEventListener('click', () => {
        const litros = parseFloat(document.querySelector('#litros').value);
        const codigo = document.querySelector('#codigo').value;

        const desconto = postoGasolina (litros, codigo);

        document.querySelector('#resultado-gasolina').innerHTML = 'Valor a ser pago: R$' + desconto.toFixed(2);
    });

    document.querySelector('#limpa-gasolina').addEventListener('click', function(){
        document.querySelector('#resultado-gasolina').innerHTML = "";
    });