const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/process_form', (req, res) => {
    const { nome, email, telefone } = req.body;


    console.log('Dados recebidos:');
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Telefone:', telefone);

    res.send('Dados do formulário recebidos. Verifique o console para detalhes.');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});