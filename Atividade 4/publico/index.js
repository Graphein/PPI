const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

// Middleware para permitir o uso de req.body
app.use(bodyParser.urlencoded({ extended: true }));

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'publico')));

app.post('/processarCadastro', (req, res) => {
    const { nome, email, cpf, data_nascimento, telefone } = req.body;

    // Aqui você pode adicionar a lógica para salvar o usuário no banco de dados
    // Exemplo: await Usuario.create({ nome, email, cpf, data_nascimento, telefone });

    // Para fins de exemplo, vamos apenas retornar uma mensagem de sucesso
    res.json({ mensagem: 'Cadastro realizado com sucesso!', usuario: { nome, email, cpf, data_nascimento, telefone } });
});

// Resto do código do servidor
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
