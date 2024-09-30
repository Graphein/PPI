import conectar from "./Conexao.js";
import Evento from "../Modelo/Evento.js";

export default class EventoDAO {
    // Inicializa a tabela de eventos
    constructor() {
        this.init(); // inicializa o banco de dados
    }

    async init() {
        try {
            const conexao = await conectar();
            const sql = `CREATE TABLE IF NOT EXISTS evento (
                nome VARCHAR(100) NOT NULL,
                data DATETIME NOT NULL,
                local VARCHAR(200) NOT NULL,
                preco DECIMAL(10, 2) NOT NULL,
                descricao TEXT,
                PRIMARY KEY (nome, data));`;
            await conexao.execute(sql);
            await conexao.release();
            console.log("Tabela de eventos criada com sucesso!");
        } catch (erro) {
            console.error("Erro ao criar a tabela de eventos:", erro);
        }
    }

    async gravar(evento) {
        if (evento instanceof Evento) {
            const conexao = await conectar();
            const sql = `INSERT INTO evento (nome, data, local, preco, descricao) 
                         VALUES (?, ?, ?, ?, ?);`;
            const parametros = [
                evento.nome,
                evento.data,
                evento.local,
                evento.preco,
                evento.descricao
            ];
            await conexao.execute(sql, parametros);
            await conexao.release();
        }
    }

    async alterar(evento) {
        if (evento instanceof Evento) {
            const conexao = await conectar();
            const sql = `UPDATE evento SET local = ?, preco = ?, descricao = ? 
                         WHERE nome = ? AND data = ?;`;
            const parametros = [
                evento.local,
                evento.preco,
                evento.descricao,
                evento.nome,
                evento.data
            ];
            await conexao.execute(sql, parametros);
            await conexao.release();
        }
    }

    async excluir(evento) {
        if (evento instanceof Evento) {
            const conexao = await conectar();
            const sql = `DELETE FROM evento WHERE nome = ? AND data = ?;`;
            const parametros = [
                evento.nome,
                evento.data
            ];
            await conexao.execute(sql, parametros);
            await conexao.release();
        }
    }

    async consultar(termoBusca) {
        let sql = "";
        let parametros = [];
        if (termoBusca) {
            sql = `SELECT * FROM evento WHERE nome LIKE ?;`; // Use LIKE para busca parcial
            parametros.push(`%${termoBusca.nome}%`); // Permite busca por parte do nome
        } else {
            sql = `SELECT * FROM evento;`;
        }

        const conexao = await conectar();
        const [registros] = await conexao.execute(sql, parametros);
        let listaEventos = [];
        for (const registro of registros) {
            const evento = new Evento(
                registro.nome,
                registro.data,
                registro.local,
                registro.preco,
                registro.descricao
            );
            listaEventos.push(evento);
        }
        conexao.release(); // Use release() em vez de end()
        return listaEventos;
    }
}
