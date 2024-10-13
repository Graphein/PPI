// partidos.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form'); // Seleciona o formulário

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const nome = document.getElementById('nome').value;
        const sigla = document.getElementById('sigla').value;
        const numeroRegistro = document.getElementById('numeroRegistro').value;

        // Enviar dados para o servidor usando fetch
        fetch('/cadastroPartido', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                nome: nome,
                sigla: sigla,
                numeroRegistro: numeroRegistro,
            }),
        })
        .then(response => {
            if (response.ok) {
                // Redirecionar para menu.html em caso de sucesso
                window.location.href = '/menu.html';
            } else {
                throw new Error('Erro ao cadastrar o partido.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao cadastrar o partido.');
        });
    });
});
