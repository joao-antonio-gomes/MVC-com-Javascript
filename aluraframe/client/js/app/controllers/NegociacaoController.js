class NegociacaoController {
    #inputData;
    #inputQuantidade;
    #inputValor;
    #listaNegociacao;
    constructor() {
        let $ = document.querySelector.bind(document);

        this.#inputData = $("#data");
        this.#inputQuantidade = $("#quantidade");
        this.#inputValor = $("#valor");
        this.#listaNegociacao = new ListaNegociacao();
    }

    adiciona(event) {
        event.preventDefault();

        this.#listaNegociacao.adiciona(this.#criaNegociacao());
        this.#limpaFormulario();

        console.log(this.#listaNegociacao)
    }

    #criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this.#inputData.value),
            this.#inputQuantidade.value,
            this.#inputValor.value
        )
    }

    #limpaFormulario() {
        this.#inputData.value = '';
        this.#inputQuantidade.value = '1';
        this.#inputValor.value = '0.0';

        this.#inputData.focus()
    }
}