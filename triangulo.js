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