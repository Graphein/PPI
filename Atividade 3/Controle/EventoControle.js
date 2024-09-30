import Evento from '../Modelo/Evento.js';

class EventoControle {
    // Método para consultar todos os eventos
    async consultar(req, res) {
        try {
            const registros = await Evento.consultar(); // Chame o método de consulta
            const eventos = registros.map(registro => new Evento(
                registro.id, // Adicionando ID
                registro.nome,
                registro.data,
                registro.local,
                registro.preco,
                registro.descricao
            ));
            res.status(200).json(eventos); // Retorne a lista formatada
        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao consultar eventos', error: error.message });
        }
    }

    // Método para gravar um novo evento
    async gravar(req, res) {
        try {
            const { nome, data, local, preco, descricao } = req.body;
            const novoEvento = new Evento(nome, data, local, preco, descricao);
            await novoEvento.incluir(); // Método para incluir no banco de dados
            res.status(201).json({ mensagem: 'Evento criado com sucesso!' });
        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao gravar evento', error: error.message });
        }
    }

    // Método para alterar um evento
    async alterar(req, res) {
        try {
            console.log('Requisição para alterar evento recebida', req.params.id);
            const { id } = req.params; // Obter ID da rota
            const { nome, data, local, preco, descricao } = req.body;
            const eventoAtualizado = new Evento(nome, data, local, preco, descricao);
            
            await eventoAtualizado.atualizar(id); // Chame o método de atualizar com o ID da rota
            res.status(200).json({ mensagem: 'Evento atualizado com sucesso!' });
        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao atualizar evento', error: error.message });
        }
    }
    
    // Método para excluir um evento
    async excluir(req, res) {
        try {
            const { id } = req.params; // Obter ID da rota
            await Evento.excluir(id); // Método para excluir no banco de dados
            res.status(200).json({ mensagem: 'Evento excluído com sucesso!' });
        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao excluir evento', error: error.message });
        }
    }
}

export default new EventoControle();
