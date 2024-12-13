let baseValue = 0.05;
const resultElement = document.getElementById("result");

function multiply() {
 const numberInput = document.getElementById("numberInput");
 const number = parseFloat(numberInput.value);

 if (isNaN(number)) {
 alert("Por favor, insira um número válido.");
 return;
 }

 baseValue *= number;
 resultElement.textContent = `Resultado: ${baseValue.toFixed(2)}`;
 numberInput.value = "";
}