document.getElementById('cadastroCandidatoForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Captura os dados do formulário
    const nome = document.getElementById('nome').value;
    const partidoId = document.getElementById('partido-select').value;
    const numeroCandidato = document.getElementById('numeroCandidato').value;

    // Envia os dados para o servidor
    fetch('/cadastroCandidato', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, partido: partidoId, numeroCandidato }),
    })
    .then(res => {
        if (res.ok) {
            showFeedbackMessage("Candidato cadastrado com sucesso!", "success");
            document.getElementById('cadastroCandidatoForm').reset(); // Limpa o formulário após cadastro
        } else {
            throw new Error('Erro ao cadastrar candidato');
        }
    })
    .catch(erro => {
        showFeedbackMessage("Erro ao cadastrar candidato. Tente novamente.", "error");
        console.error('Erro:', erro);
    });
});

// Função para mostrar mensagens de feedback
function showFeedbackMessage(message, type) {
    const feedbackDiv = document.getElementById('feedback');
    feedbackDiv.innerText = message;
    feedbackDiv.style.color = type === "success" ? "blue" : "red"; // Define a cor da mensagem
    feedbackDiv.style.display = "block"; // Mostra a mensagem

    // Esconde a mensagem após 3 segundos
    setTimeout(() => {
        feedbackDiv.style.display = "none";
    }, 3000);
}
