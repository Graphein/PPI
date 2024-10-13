const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 4000; // Porta onde o servidor será executado

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('priv')); // Serve arquivos estáticos da pasta 'priv'
app.use(express.static('pub'));  // Serve arquivos estáticos da pasta 'pub'

// Configuração do MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Insira seu usuário do MySQL
  password: '', // Insira sua senha do MySQL
  port: '3306',
  database: 'sistema_eleicoes',
});


// Conectar ao banco de dados
db.connect(err => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      return;
    }
    console.log('Conectado ao banco de dados');
});

// Rota para cadastro de candidatos
app.post('/cadastroCandidato', (req, res) => {
    const { nome, partido, numeroCandidato } = req.body;

    const sql = 'INSERT INTO candidatos (nome, partido_id, numero_candidato) VALUES (?, ?, ?)';
    db.query(sql, [nome, partido, numeroCandidato], (err, result) => {
      if (err) {
        console.error('Erro ao cadastrar candidato:', err);
        res.status(500).send('Erro ao cadastrar candidato');
      } else {
        res.redirect('/candidatosLista.html');
      }
    });
});

// Rota para listar candidatos
app.get('/api/candidatos', (req, res) => {
    const sql = 'SELECT c.nome, p.nome AS partido, c.numero_candidato FROM candidatos c JOIN partidos p ON c.partido_id = p.id';
    db.query(sql, (err, resultados) => {
      if (err) {
        console.error('Erro ao obter candidatos:', err);
        res.status(500).send('Erro ao obter candidatos');
      } else {
        res.json(resultados);
      }
    });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
