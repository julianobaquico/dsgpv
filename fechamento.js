const values = [0.05, 0.10, 0.25, 0.50, 1.00, 2.00, 5.00, 10.00, 20.00];

function calculate() {
    let total = 0;

    values.forEach(value => {
        const qty = document.getElementById(`qty-${value.toFixed(2)}`).value;
        const result = value * qty;
        document.getElementById(`result-${value.toFixed(2)}`).innerText = result.toFixed(2);
        total += result;
    });

    document.getElementById('total').innerText = total.toFixed(2);
}

document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', calculate);
});
