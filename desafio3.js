// Crie um conversor de temperatura entre as escalas Celsius, Fahrenheit e Kelvin. O usuário deve ser convertida, a escala da temperatura atual e a escala para o qual o valor deve ser convertido.

//Entradas: valor atual da temperatura, escala atual da temperatura, escala para exibição (conversão)

const
    temperatura = parseFloat(window.prompt('Insira a temperatura atual')),
    escalaAtual = window.prompt('Escolha a escala atual (C), (F) ou (K).').toLowerCase(),
    conversao = window.prompt('Para qual escala você quer converter? (C), (F) ou (K).').toLowerCase(),
    celsiusFahrenheit = (temperatura * 9/5) + 32,
    celsiusKelvin = temperatura + 273.15,
    fahrenheitCelsius = (temperatura - 32) * 5/9,
    fahrenheitKelvin = (temperatura + 459.67) * 5/9,
    kelvinCelsius = temperatura - 273.15,
    kelvinFahrenheit = temperatura * 9/5 - 459.67;

    //window.alert(`O valor não é NaN: ${!isNaN(temperatura)}`);

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
        window.alert('TEMPERATURA NÃO RECONHECIDA')
    }