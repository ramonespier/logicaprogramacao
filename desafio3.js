// Crie um conversor de temperatura entre as escalas Celsius, Fahrenheit e Kelvin. O usuário deve ser convertida, a escala da temperatura atual e a escala para o qual o valor deve ser convertido.

//Entradas: valor atual da temperatura, escala atual da temperatura, escala para exibição (conversão)

const
    //window.prompt('Qual a escala da sua temperatura? (Celsius, fahrenheit ou kelvin)'),
    celsius = tC,
    fahrenheit = tF,
    kelvin = tK,
    celsiusFahrenheit = tF = (tC * 9/5) + 35,
    celsiusKelvin = tK = tC + 273.15,
    fahrenheitCelsius = tC = (tF - 32) * 5/9,
    fahrenheitKelvin = tK = (tF + 459.67) * 5/9,
    kelvinCelsius = tC = tK - 273.15,
    kelvinFahrenheit = tF = tK * 9/5 - 459.67;

