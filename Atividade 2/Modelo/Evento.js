import EventoDAO from "../DAO/EventoDAO.js"

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
        const eventoDAO = new EventoDAO();
        await eventoDAO.alterar(this);
    }

    async excluir() {
        const eventoDAO = new EventoDAO();
        await eventoDAO.excluir(this);
    }

    async consultar(termoBusca) {
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
