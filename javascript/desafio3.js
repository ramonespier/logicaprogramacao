// Crie um conversor de temperatura entre as escalas Celsius, Fahrenheit e Kelvin. O usuário deve ser convertida, a escala da temperatura atual e a escala para o qual o valor deve ser convertido.

//Entradas: valor atual da temperatura, escala atual da temperatura, escala para exibição (conversão)

function converteTemperatura(escalaAtual, escalaConversao, temperatura) {
    
    let
    temperaturaConvertida, msgErro = 'Ok';
    
    if (!isNaN(temperatura)){

        escalaAtual = escalaAtual.toUpperCase();
        escalaConversao = escalaConversao.toUpperCase();
        
            if(escalaAtual === 'C') {

                if (escalaConversao === 'F') {
                temperaturaConvertida = (temperatura * 9/5) + 32

                } else if (escalaConversao === 'K') {
                temperaturaConvertida = temperatura + 273.15;

                } else if (escalaConversao === 'C') {
                msgErro = `ERRO: Escala selecionada: ${escalaConversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`;
    
                } else {
                msgErro = `ERRO: Escala selecionada: ${escalaConversao}. Essa escala não existe ou não está disponível neste programa.`;
                }

            } else if(escalaAtual === 'F') {

                if (escalaConversao === 'C') {
                temperaturaConvertida = (temperatura - 32) * 5/9;

                } else if (escalaConversao === 'K') {
                temperaturaConvertida = (temperatura + 459.67) * 5/9;

                } else if (escalaConversao === 'F') {
                msgErro = `ERRO: Escala selecionada: ${escalaConversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`;
    
                } else {
                msgErro = `ERRO: Escala selecionada: ${escalaConversao}. Essa escala não existe ou não está disponível neste programa.`;
                }
        
            } else if (escalaAtual === 'K') {

                if (escalaConversao === 'C'){
                temperaturaConvertida = temperatura - 273.15;

                } else if (escalaConversao === 'F') {
                temperaturaConvertida = temperatura * 9/5 - 459.67;

                } else if (escalaConversao === 'K') {
                msgErro = `ERRO: Escala selecionada: ${escalaConversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`;
    
                } else {
                msgErro = `ERRO: Escala selecionada: ${escalaConversao}. Essa escala não existe ou não está disponível neste programa.`;
                }

            } else {
                msgErro = `ERRO: Escala ATUAL selecionada: ${escalaAtual}. A escala ATUAL não existe ou não está disponível neste programa.`;
            }

        } else {
        msgErro = 'ERRO: O número digitado para conversão não é um número válido.'; }

    // retornando em JSON - JavaScript Object Notation
    return { 
        temperatura: temperatura,
        escalaConversao: escalaConversao,
        escalaAtual: escalaAtual,
        temperaturaConvertida: temperaturaConvertida,
        msgErro: msgErro
    };
};

document.querySelector('#btConverte').addEventListener('click', function () {
    const temperatura = document.querySelector('#temperatura').value;
    const escalaAtual = document.querySelector('#escalas').value;
    const escalaConversao = document.querySelector('#conversaoConvertida').value;

    const conversaoTemperatura = converteTemperatura(escalaAtual, escalaConversao, temperatura);

    document.querySelector('#resultadoConversao').innerHTML = `Temperatura convertida: ${conversaoTemperatura.temperaturaConvertida + conversaoTemperatura.escalaConversao}`;
});

document.querySelector('#limparConv').addEventListener('click', function () {
    document.querySelector('#resultadoConversao').innerHTML = "";
});
