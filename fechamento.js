document.getElementById('calcular').addEventListener('click', function() {
    const valores = [0.05, 0.10, 0.25, 0.50, 1.00, 2.00, 5.00, 10.00, 20.00];
    let total = 0;

    for (let i = 0; i < valores.length; i++) {
        const valor = valores[i];
        const quantidadeElement = document.getElementById(valor.toFixed(2));
        const quantidade = parseInt(quantidadeElement.value);

        if (isNaN(quantidade)) {
            alert(`Por favor, insira um número válido para o valor ${valor.toFixed(2)}`);
            return; // Interrompe a execução da função se um valor inválido for encontrado
        }

        total += valor * quantidade;
    }

    document.getElementById('total').value = total.toFixed(2);
});