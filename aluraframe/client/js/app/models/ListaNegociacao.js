class ListaNegociacao {
    #negociacoes
    constructor() {
        this.#negociacoes = [];
    }

    adiciona(negociacao) {
        this.#negociacoes.push(negociacao)
    }

    get negociacao() {
        return this.#negociacoes;
    }
}