import express from 'express';
import EventoControle from './Controle/EventoControle.js';

const app = express();
app.use(express.json()); // Para interpretar o corpo das requisições como JSON

app.get('/evento', EventoControle.consultar);
app.post('/evento', EventoControle.gravar);
app.put('/evento/:id', EventoControle.alterar);
app.delete('/evento/:id', EventoControle.excluir);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
