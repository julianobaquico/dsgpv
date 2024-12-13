<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Valores</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        #resultados-parciais > div {
            display: inline-block;
            margin-right: 10px;
            padding: 5px 10px;
            border: 1px solid #ccc;
            min-width: 60px;
            text-align: center;
            background-color: #f9f9f9;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Calculadora de Valores</h1>
        <div class="table-responsive">  
            <table class="table table-bordered">
                <thead>
                    <tr class="table-danger">
                        <th>X</th>
                        <th>0.05</th>
                        <th>0.10</th>
                        <th>0.25</th>
                        <th>0.50</th>
                        <th>1.00</th>
                        <th>2.00</th>
                        <th>5.00</th>
                        <th>10.00</th>
                        <th>20.00</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Quantidade</td>
                        <td><input type="number" value="0" min="0" class="form-control quantidade"></td>
                        <td><input type="number" value="0" min="0" class="form-control quantidade"></td>
                        <td><input type="number" value="0" min="0" class="form-control quantidade"></td>
                        <td><input type="number" value="0" min="0" class="form-control quantidade"></td>
                        <td><input type="number" value="0" min="0" class="form-control quantidade"></td>
                        <td><input type="number" value="0" min="0" class="form-control quantidade"></td>
                        <td><input type="number" value="0" min="0" class="form-control quantidade"></td>
                        <td><input type="number" value="0" min="0" class="form-control quantidade"></td>
                        <td><input type="number" value="0" min="0" class="form-control quantidade"></td>
                    </tr>
                    <tr class="table-warning">
                        <td colspan="10" id="resultados-parciais"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="d-grid gap-2">
            <button id="calcular" class="btn btn-success">Calcular</button>
        </div>
        <div class="mt-3 alert alert-success" role="alert">
            <h4 class="alert-heading">Total:</h4>
            <p><span id="valor-total">0.00</span></p>
        </div>
    </div>

    <script>
        const valores = [0.05, 0.10, 0.25, 0.50, 1.00, 2.00, 5.00, 10.00, 20.00];
        const calcularButton = document.getElementById('calcular');
        const quantidadesInputs = document.querySelectorAll('.quantidade');
        const resultadosParciaisDiv = document.getElementById('resultados-parciais');
        const valorTotalDiv = document.getElementById('valor-total');

        calcularButton.addEventListener('click', () => {
            let total = 0;
            resultadosParciaisDiv.innerHTML = ''; // Limpa resultados anteriores

            quantidadesInputs.forEach((input, index) => {
                const quantidade = parseFloat(input.value) || 0;
                const resultadoParcial = valores[index] * quantidade;
                total += resultadoParcial;

                // Adiciona os resultados parciais
                const resultadoDiv = document.createElement('div');
                resultadoDiv.textContent = `R$ ${resultadoParcial.toFixed(2)}`;
                resultadosParciaisDiv.appendChild(resultadoDiv);
            });

            // Atualiza o valor total
            valorTotalDiv.textContent = total.toFixed(2);

            // Exibe alerta se ultrapassar R$ 200
            if (total > 200) {
                alert(`O valor total excedeu R$ 200. Excedente: R$ ${(total - 200).toFixed(2)}`);
            }
        });
    </script>
</body>
</html>
