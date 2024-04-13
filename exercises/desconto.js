function compra() {

    let codigo = parseInt(document.getElementById("codigo").value);
    let valor = parseFloat(document.getElementById("valor").value);
    let resultado = valor;
    
    if (valor > 0) {
        if (codigo === 1) {
            resultado = valor;
    
            document.querySelector('p.resultado').innerHTML = `Valor a pagar R$` + resultado.toFixed(2)
            document.querySelector('p.erro').innerHTML = "";
    
        } else if (codigo === 2) {
        resultado -= (valor * 0.1);
    
        document.querySelector('p.resultado').innerHTML = 'Valor a pagar R$' + resultado.toFixed(2);
        document.querySelector('p.erro').innerHTML = "";
    
        } else if (codigo === 3) {
        resultado -= (valor * 0.05);
    
        document.querySelector("p.resultado").innerHTML = 'Valor a pagar R$' + resultado.toFixed(2);
        document.querySelector('p.erro').innerHTML = "";
    
        } else {
    
        document.querySelector("p.erro").innerHTML = "Código inválido!";
        document.querySelector("p.resultado").innerHTML = "";
        }
    
    } else {
    
    document.querySelector("p.erro").innerHTML = "Digite um valor válido!";
    document.querySelector("p.resultado").innerHTML = "";
    
    }
};
    
    function limpar() {
    document.getElementById('valor').value = "";
    document.getElementById('codigo').value = "";
    document.querySelector('p.resultado').innerHTML = "";
    document.querySelector('p.erro').innerHTML = "";
};