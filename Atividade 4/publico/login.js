document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Autenticação simples (substitua por lógica de autenticação real, se necessário)
    if (username === 'admin' && password === '12345') {
        // Se login for bem-sucedido, redireciona para a página de cadastro
        window.location.href = 'index.html';
    } else {
        // Exibe mensagem de erro
        document.getElementById('loginError').style.display = 'block';
    }
});
