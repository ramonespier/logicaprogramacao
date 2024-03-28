// Crie um conversor de temperatura entre as escalas Celsius, Fahrenheit e Kelvin. O usuário deve ser convertida, a escala da temperatura atual e a escala para o qual o valor deve ser convertido.

//Entradas: valor atual da temperatura, escala atual da temperatura, escala para exibição (conversão)

function converteTemperatura(escalaAtual, conversao, temperatura) {
    
    let
    temperaturaConvertida, msgErro = 'Ok';


    const
    
    CF = (temperatura * 9/5) + 32,
    CK = temperatura + 273.15,
    FC = (temperatura - 32) * 5/9,
    FK = (temperatura + 459.67) * 5/9,
    KC = temperatura - 273.15,
    KF = temperatura * 9/5 - 459.67;
    
    if (!isNaN(temperatura)){

        escalaAtual = escalaAtual.toUpperCase();
        conversao = conversao.toUpperCase();
        
            if(escalaAtual === 'C') {

            if (conversao === 'F') {
                temperaturaConvertida = CF;

            } else if (conversao === 'K') {
                temperaturaConvertida = CK;

            } } else if (conversao === 'C') {
                msgErro = `ERRO: Escala selecionada: ${conversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`;
    
            } else {
                msgErro = `ERRO: Escala selecionada: ${conversao}. Essa escala não existe ou não está disponível neste programa.`;
            }

        } else if(escalaAtual === 'F') {

            if (conversao === 'C') {
                temperaturaConvertida = FC;

            } else if (conversao === 'K') {
                temperaturaConvertida = FK;

            } else if (escalaConversao === 'F') {
                msgErro = `ERRO: Escala selecionada: ${conversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`;
    
            } else {
                msgErro = `ERRO: Escala selecionada: ${conversao}. Essa escala não existe ou não está disponível neste programa.`;
            }
        
        } else if (conversao === 'K') {

            if (conversao === 'C'){
                temperaturaConvertida = KC;

            } else if (conversao === 'F') {
                temperaturaConvertida = KF;

            } else if (escalaConversao === 'K') {
                msgErro = `ERRO: Escala selecionada: ${conversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`;
    
            } else {
                msgErro = `ERRO: Escala selecionada: ${conversao}. Essa escala não existe ou não está disponível neste programa.`;
            }

        } else {
            msgErro = `ERRO: Escala ATUAL selecionada: ${escalaAtual}. A escala ATUAL não existe ou não está disponível neste programa.`;


    // retornando em JSON - JavaScript Object Notation
    return {
        temperatura: temperatura,
        conversao: conversao,
        escalaAtual: escalaAtual,
        temperaturaConvertida: temperaturaConvertida,
        msgErro: msgErro
        };
    }
}
