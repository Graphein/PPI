const cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;


app.use(cors());


app.use(bodyParser.json());


let events = [];


app.post('/evento', (req, res) => {
    const { name, cpf, Show, date } = req.body;
    const newEvent = { id: events.length + 1, name, cpf, Show,  date };
    events.push(newEvent);
    res.status(201).json(newEvent);
});


app.get('/evento', (req, res) => {
    res.json(events);
});

app.get('/api/clientes', (req, res) => {
    res.json(clientes);
});


app.delete('/evento/:id', (req, res) => {
    const id = parseInt(req.params.id);
    events = events.filter(event => event.id !== id);
    res.status(204).send();
});


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
