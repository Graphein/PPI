import EventoDAO from "../DAO/EventoDAO.js";

export default class Evento {
    #nome;
    #data;
    #local;
    #preco;
    #descricao;

    constructor(nome, data, local, preco, descricao){
        this.#nome = nome;
        this.#data = data;
        this.#local = local;
        this.#preco = preco;
        this.#descricao = descricao;
    }
    toJSON() {
        return {
            nome: this.nome,
            data: this.data,
            local: this.local,
            preco: this.preco,
            descricao: this.descricao,
        };
    }

    // Getters e Setters
    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }

    get data() {
        return this.#data;
    }

    set data(novaData) {
        this.#data = novaData;
    }

    get local() {
        return this.#local;
    }

    set local(novoLocal) {
        this.#local = novoLocal;
    }

    get preco() {
        return this.#preco;
    }

    set preco(novoPreco) {
        this.#preco = novoPreco;
    }

    get descricao() {
        return this.#descricao;
    }

    set descricao(novaDescricao) {
        this.#descricao = novaDescricao;
    }

    // Métodos para CRUD
    async incluir() {
        const eventoDAO = new EventoDAO();
        await eventoDAO.gravar(this);
    }

    async alterar() {
        const conexao = await conectar();
        const sql = `UPDATE evento SET nome = ?, data = ?, local = ?, preco = ?, descricao = ? WHERE id = ?`; // Supondo que você tenha uma coluna id
        const parametros = [this.nome, this.data, this.local, this.preco, this.descricao, this.id];
        await conexao.execute(sql, parametros);
        conexao.release(); // Use release() em vez de end()
    }

    async atualizar(id) {
        const conexao = await conectar();
        const sql = `UPDATE evento SET nome = ?, data = ?, local = ?, preco = ?, descricao = ? WHERE id = ?`; // Supondo que você tenha uma coluna id
        const parametros = [this.nome, this.data, this.local, this.preco, this.descricao, id]; // Use o id da rota
        await conexao.execute(sql, parametros);
        conexao.release(); // Use release() em vez de end()
    }
    


    static async excluir(id) {
        const conexao = await conectar();
        const sql = 'DELETE FROM evento WHERE id = ?'; // Substitua 'id' pelo nome correto da coluna no seu banco
        const [resultado] = await conexao.execute(sql, [id]);
        conexao.release();
        return resultado; // Retorne o resultado se necessário
    }

    static async consultar(termoBusca) {
        const eventoDAO = new EventoDAO();
        return await eventoDAO.consultar(termoBusca);
    }

    // Método toString()
    toString() {
                    return `Nome: ${this.#nome}
                    Data: ${this.#data}
                    Local: ${this.#local}
                    Preço: ${this.#preco}
                    Descrição: ${this.#descricao}`;
             }
}
