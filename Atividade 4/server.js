const cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;

// Middleware para CORS
app.use(cors());

// Middleware para interpretar JSON
app.use(bodyParser.json());

// Simulação de armazenamento em memória
let events = [];

// Rota para cadastrar um evento (POST)
app.post('/evento', (req, res) => {
    const { name, cpf, Show, date } = req.body;
    const newEvent = { id: events.length + 1, name, cpf, Show,  date };
    events.push(newEvent);
    res.status(201).json(newEvent);
});

// Rota para listar eventos (GET)
app.get('/evento', (req, res) => {
    res.json(events);
});
// Endpoint para obter todos os clientes cadastrados
app.get('/api/clientes', (req, res) => {
    res.json(clientes);
});

// Rota para deletar um evento (DELETE)
app.delete('/evento/:id', (req, res) => {
    const id = parseInt(req.params.id);
    events = events.filter(event => event.id !== id);
    res.status(204).send();
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
