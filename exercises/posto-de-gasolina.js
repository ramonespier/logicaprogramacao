function postoGasolina (totalLitros, codigo) {
    const alcool = 2.89;
    const gasolina = 5.19;

    if (document.querySelector(codigo === 'A')) {

        if (totalLitros <= 20) {
            return (alcool * totalLitros) - (totalLitros * 0.03);
    
        } else if (totalLitros > 20) {
            return (alcool * totalLitros) - (totalLitros * 0.05);

        } else {
            return "Digite um carácter válido."

        };
        
    // } else if (document.querySelector(codigo === 'G')) {
    } else {

        if (totalLitros <= 20) {
            return (gasolina * totalLitros) - (totalLitros * 0.04);
    
        } else if (totalLitros > 20) {
            return (gasolina * totalLitros) - (totalLitros * 0.06);

        } else {
            return "Digite um carácter válido."

        };  

    };
};
    // } else {

    //     if (codigo !== 'A' || 'G') {
    //         return 'Selecione "A" OU "G"'

    //     } else if (totalLitros < 0) {
    //         return 'Digite um número positivo.'

    //     } else if (totalLitros > 120) {
    //         return 'O tanque vai transbordar.'

    //     } else {
    //         return 'Recarregue a página'
            
    //     };
    // };

    document.querySelector('#calc-gasolina').addEventListener('click', () => {
        const totalLitros = parseFloat(document.querySelector('#litros').value);
        const codigo = document.querySelector('#codigo').value;

        const desconto = postoGasolina (totalLitros, codigo);

        document.querySelector('#resultado-gasolina').innerHTML = `${desconto.toFixed(2)}`
    });

    document.querySelector('#limpa-gasolina').addEventListener('click', function(){
        document.querySelector('#resultado-gasolina').innerHTML = "";
    });
