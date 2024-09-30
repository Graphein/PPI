document.getElementById('event-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Captura os dados do formulário
    const name = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const showName = document.getElementById('show-name').value;
    const date = document.getElementById('date').value;

    // Adiciona uma nova linha à tabela
    const tableBody = document.getElementById('event-table-body');
    const newRow = tableBody.insertRow();

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${cpf}</td>
        <td>${showName}</td>
        <td>${date}</td>
        <td>
            <button class="btn btn-warning btn-sm" onclick="editEvent(this)">Editar</button>
            <button class="btn btn-danger btn-sm" onclick="deleteEvent(this)">Deletar</button>
        </td>
    `;

    // Limpa o formulário
    document.getElementById('event-form').reset();

    // Exibe a mensagem de sucesso
    showFeedbackMessage("Cliente cadastrado com sucesso!", "success");
});

// Função para editar o evento
function editEvent(button) {
    const row = button.parentNode.parentNode;
    const cells = row.getElementsByTagName('td');

    document.getElementById('name').value = cells[0].innerText;
    document.getElementById('cpf').value = cells[1].innerText;
    document.getElementById('show-name').value = cells[2].innerText;
    document.getElementById('date').value = cells[3].innerText;

    row.remove(); // Remove a linha da tabela para edição

    // Exibe a mensagem de sucesso
    showFeedbackMessage("Cliente alterado com sucesso!", "success");
}

// Função para deletar o evento
function deleteEvent(button) {
    const row = button.parentNode.parentNode;
    row.remove(); // Remove a linha da tabela

    // Exibe a mensagem de sucesso
    showFeedbackMessage("Cliente excluído com sucesso!", "success");
}

// Função para mostrar mensagens de feedback
function showFeedbackMessage(message, type) {
    const feedbackDiv = document.getElementById('feedback');
    feedbackDiv.innerText = message;

    // Define a cor da mensagem
    feedbackDiv.style.color = type === "success" ? "green" : "red";
    feedbackDiv.style.display = "block"; // Mostra a mensagem

    // Remove a mensagem após 3 segundos
    setTimeout(() => {
        feedbackDiv.innerText = "";
        feedbackDiv.style.display = "none"; // Esconde a mensagem novamente
    }, 3000);
}
