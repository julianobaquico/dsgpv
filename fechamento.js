const valores = [0.05, 0.10, 0.25, 0.50, 1.00, 2.00, 5.00, 10.00, 20.00];
const quantidadesInputs = document.querySelectorAll('.quantidades input');
const resultadosParciaisDiv = document.querySelector('.resultados-parciais');
const valorTotalDiv = document.getElementById('valor-total');
const calcularButton = document.getElementById('calcular');


calcularButton.addEventListener('click', () => {
    let total = 0;
    resultadosParciaisDiv.innerHTML = ''; // Limpa os resultados anteriores

    quantidadesInputs.forEach((input, index) => {
        const quantidade = parseInt(input.value) || 0;
        const resultadoParcial = valores[index] * quantidade;
        total += resultadoParcial;

       // Cria um novo div para o resultado parcial e o adiciona à div resultados-parciais
        const resultadoDiv = document.createElement('div');
        resultadoDiv.textContent = resultadoParcial.toFixed(2);
        resultadosParciaisDiv.appendChild(resultadoDiv);
    });


    valorTotalDiv.textContent = total.toFixed(2);

    if (total >= 200) {
        const restante = total - 200;
        alert(`O valor ultrapassou R$ 200. Restante: R$ ${restante.toFixed(2)}`);
    }
});