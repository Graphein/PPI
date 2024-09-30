document.addEventListener('DOMContentLoaded', function() {
    function calcularTotal() {
        const quantidadeInput = document.getElementById('quantidade');
        const totalSpan = document.getElementById('total');
        const preco = parseFloat(document.getElementById('preco').textContent);

        quantidadeInput.addEventListener('input', function() 
        {
            const quantidade = parseInt(quantidadeInput.value) || 0;
            const total = quantidade * preco;
            totalSpan.textContent = total.toFixed(2);
        });
    }
    if (document.getElementById('quantidade')) 
    {
        calcularTotal();
    }
});