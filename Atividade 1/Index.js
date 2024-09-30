const express = require('express');
const sequelize = require('./config/database');
const Evento = require('./models/Evento');
const eventoRoutes = require('./routes/eventos');

const app = express();
app.use(express.json());

app.use('/eventos', eventoRoutes);

sequelize.sync()
    .then(() => console.log('Banco de dados sincronizado'))
    .catch(err => console.error('Erro ao sincronizar o banco de dados:', err));

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
