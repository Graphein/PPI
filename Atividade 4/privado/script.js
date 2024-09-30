$(document).ready(function () {
    $('#cadastro-form').on('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Coleta os dados do formulário
        const usuario = {
            nome: $('#nome').val(),
            email: $('#email').val(),
            cpf: $('#cpf').val(),
            data_nascimento: $('#data_nascimento').val(),
            telefone: $('#telefone').val()
        };

        // Envia os dados para o servidor usando fetch
        fetch('/processarCadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })
        .then(response => response.json())
        .then(data => {
            // Exibe mensagem de feedback
            $('#feedback').html(`<div class="alert alert-success">${data.mensagem}</div>`);

            // Adiciona o novo usuário à tabela
            const novoRegistro = `
                <tr>
                    <td>${data.usuario.nome}</td>
                    <td>${data.usuario.email}</td>
                    <td>${data.usuario.cpf}</td>
                    <td>${data.usuario.data_nascimento}</td>
                    <td>${data.usuario.telefone}</td>
                </tr>
            `;
            $('#tabela-registros tbody').append(novoRegistro);

            // Limpa o formulário
            $('#cadastro-form')[0].reset();
        })
        .catch(error => {
            console.error('Erro:', error);
            $('#feedback').html(`<div class="alert alert-danger">Erro ao cadastrar usuário. Tente novamente.</div>`);
        });
    });
});
