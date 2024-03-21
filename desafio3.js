// Crie um conversor de temperatura entre as escalas Celsius, Fahrenheit e Kelvin. O usuário deve ser convertida, a escala da temperatura atual e a escala para o qual o valor deve ser convertido.

//Entradas: valor atual da temperatura, escala atual da temperatura, escala para exibição (conversão)

function converteTemperatura() {
    
    const
    temperatura = parseFloat(window.prompt('Insira a temperatura atual')),
    celsiusFahrenheit = (temperatura * 9/5) + 32,
    celsiusKelvin = temperatura + 273.15,
    fahrenheitCelsius = (temperatura - 32) * 5/9,
    fahrenheitKelvin = (temperatura + 459.67) * 5/9,
    kelvinCelsius = temperatura - 273.15,
    kelvinFahrenheit = temperatura * 9/5 - 459.67;
    
    if (!isNaN(temperatura)){
    
        const
            escalaAtual = window.prompt('Escolha a escala atual (C), (F) ou (K).').toLowerCase(),
            conversao = window.prompt('Para qual escala você quer converter? (C), (F) ou (K).').toLowerCase();
    
        if(escalaAtual == 'c' && conversao == 'f'){
        window.alert(`A temperatura convertida é ${celsiusFahrenheit.toFixed(1)}`)
    
        } else if (escalaAtual == 'c' && conversao == 'k'){
        window.alert(`A temperatura convertida é ${celsiusKelvin.toFixed(1)}`)
    
        } else if (escalaAtual == 'f' && conversao == 'c'){
        window.alert(`A temperatura convertida é ${fahrenheitCelsius.toFixed(1)}`)
    
        } else if (escalaAtual == 'f' && conversao == 'k'){
        window.alert(`A temperatura convertida é ${fahrenheitKelvin.toFixed(1)}`)
    
        } else if (escalaAtual == 'k' && conversao == 'c'){
        window.alert(`A temperatura convertida é ${kelvinCelsius.toFixed(1)}`)
    
        } else if (escalaAtual == 'k' && conversao == 'f'){
        window.alert(`A temperatura convertida é ${kelvinFahrenheit.toFixed(1)}`)
        } else {
        window.alert('A escala selecionada não existe, ou não está disponivel neste programa.') }
    
    } else {
        window.alert(`O número digitado para conversão não é um número válido`)     
    }
    
}
