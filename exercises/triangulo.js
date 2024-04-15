function tipoTriangulo (ladoA, ladoB, ladoC) {

    let mensagem;

    if ((ladoA === ladoB) && (ladoB === ladoC)) {
        mensagem = 'Equilátero.'

    } else if ((ladoA === ladoB) || (ladoB === ladoC) || (ladoA === ladoC)) {
        mensagem = 'Isósceles.'

    } else {
        mensagem = 'Escaleno.'
    }
    
    return {
        mensagem: mensagem
    };
};

document.querySelector('#btTriangulo').addEventListener('click', function() {
    const ladoA = document.querySelector('#ladoA').value;
    const ladoB = document.querySelector('#ladoB').value;
    const ladoC = document.querySelector('#ladoC').value;

    const trianguloTipo = tipoTriangulo(ladoA, ladoB, ladoC)

    document.querySelector('#resultadoTriangulo').innerHTML = `Tipo do triangulo: ${trianguloTipo.mensagem}`;
});

document.querySelector('#limparTri').addEventListener('click', function(){
    document.querySelector('#resultadoTriangulo').innerHTML = "";
});