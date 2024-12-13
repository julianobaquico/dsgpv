const valores = [0.05, 0.10, 0.25, 0.50, 1.00, 2.00, 5.00, 10.00, 20.00];
const quantidadesInputs = document.querySelectorAll('.quantidade');
const resultadosParciaisDiv = document.getElementById('resultados-parciais');
const valorTotalDiv = document.getElementById('valor-total');
const calcularButton = document.getElementById('calcular');

calcularButton.addEventListener('click', () => {
    let total = 0;
    resultadosParciaisDiv.innerHTML = ''; // Limpa resultados anteriores

    quantidadesInputs.forEach((input, index) => {
        const quantidade = parseFloat(input.value) || 0; // Garante que valores inválidos sejam 0
        if (valores[index] !== undefined) {
            const resultadoParcial = valores[index] * quantidade;
            total += resultadoParcial;

            // Exibe o resultado parcial
            const resultadoDiv = document.createElement('div');
            resultadoDiv.textContent = `R$ ${resultadoParcial.toFixed(2)}`;
            resultadosParciaisDiv.appendChild(resultadoDiv);
        }
    });

    // Atualiza o total
    valorTotalDiv.textContent = total.toFixed(2);

    // Exibe alerta se ultrapassar R$ 200
    if (total > 200) {
        const restante = total - 200;
        alert(`O valor total (R$ ${total.toFixed(2)}) excedeu o limite de R$ 200 em R$ ${restante.toFixed(2)}.`);
    }
});
