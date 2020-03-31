let kelvin = 0;
let fahrenheit = 0;
let celsius = 0;

//Resultado exercício 1
fahrenheit = 70;
let resultadoKelvin = (fahrenheit-32)*5/9 + 273.15;
console.log(resultadoKelvin);

//Resultado exercício 2
celsius = 80;
let resultadoFarenheit = celsius*9/5 + 32;
console.log(resultadoFarenheit);

//Resultado exercício 3
celsius = 30;
resultadoFarenheit = celsius*9/5 + 32;
resultadoKelvin = (resultadoFarenheit-32)*5/9 + 273.15;
console.log("Valor em F° " + resultadoFarenheit + "\nValor em K° " + resultadoKelvin);

//Resultado exercício 4
celsius = prompt("Digite o valor em Celsius que deseja converter");
resultadoFarenheit = celsius*9/5 + 32;
resultadoKelvin = (resultadoFarenheit-32)*5/9 + 273.15;
console.log("Valor em F° " + resultadoFarenheit + "\nValor em K° " + resultadoKelvin);