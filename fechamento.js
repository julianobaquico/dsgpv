document.getElementById('calcular').addEventListener('click', function() {
    const valores = [0.05, 0.10, 0.25, 0.50, 1.00, 2.00, 5.00, 10.00, 20.00];
    let total = 0;

    valores.forEach(valor => {
        const quantidade = parseInt(document.getElementById(valor.toFixed(2)).value);
        total += valor * quantidade;
    });

    document.getElementById('total').value = total.toFixed(2);
});