function natalidadeMortal() {
    let valor;

    const habitantes = document.querySelector('#habitantes').value;
    const natalMortal = document.querySelector('#natal-mortal').value;
    const taxa = document.querySelector('#taxa').value;
    
    if (taxa === 'N') {
        valor = natalMortal * 1000 / habitantes;
        
    } else if (taxa === 'M') {
        valor = natalMortal * 1000 / habitantes;
        
    } else {
        valor = 'Insira um valor válido'

    }
    
    return valor;
}

document.querySelector('#calc-natal').addEventListener('click', () => {
    const natalMortal = document.querySelector('#natal-mortal').value;
    const taxa = document.querySelector('#taxa').value;
    
    const calculo = natalidadeMortal(natalMortal, taxa);
    document.querySelector('#resultado-taxa').innerHTML = calculo.toFixed(2);
    
});

document.querySelector('#limpa-natal').addEventListener('click', function(){
    document.querySelector('#resultado-taxa').innerHTML = "";
    
});
