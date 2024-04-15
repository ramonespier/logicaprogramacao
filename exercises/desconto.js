function desconto (clientes) {

    let valor = document.querySelector('#valor').value;

    if (clientes === '1'){
        resultado = valor;

    } else if (clientes === '2'){
        resultado = valor - (valor * 0.1);
        
    } else {
        resultado = valor - (valor * 0.05);

    }
    
    return resultado;
};

document.querySelector('#btDesconto').addEventListener('click', function (event) {
    event.preventDefault();
    escolha = document.getElementById('codigo').value;
    calculo = desconto(escolha);
    document.getElementById('resultadoDesconto').innerHTML = `${calculo.toFixed(2)}`

});

document.querySelector('#limpaDesconto').addEventListener('click', function(){
    document.querySelector('#resultadoDesconto').innerHTML = "";
    document.querySelector('#codigo').innerHTML = "";
    document.querySelector('#valor').innerHTML = "";
});