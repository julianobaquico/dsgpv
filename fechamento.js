let baseValue = 0.05;
const resultElement = document.getElementById("result");
const numberInput = document.getElementById("numberInput");

numberInput.addEventListener('input', multiply);

function multiply() {
 const number = parseFloat(numberInput.value);

 if (isNaN(number)) {
 // Se a entrada não for um número válido, exibe o valor base
 resultElement.textContent = `Resultado: ${baseValue.toFixed(2)}`;
 return;
 }

 const result = baseValue * number;
 resultElement.textContent = `Resultado: ${result.toFixed(2)}`;
}