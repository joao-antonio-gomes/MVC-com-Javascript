class NegociacaoController {
    #inputData;
    #inputQuantidade;
    #inputValor;
    constructor() {
        let $ = document.querySelector.bind(document);

        this.#inputData = $("#data");
        this.#inputQuantidade = $("#quantidade");
        this.#inputValor = $("#valor");
    }

    adiciona(event) {
        event.preventDefault();

        let data = DateHelper.textoParaData(this.#inputData.value)

        let negociacao = new Negociacao(
            data,
            this.#inputQuantidade.value,
            this.#inputValor.value
        )

        console.log(negociacao)

        console.log(DateHelper.dataParaTexto(negociacao.data))
    }
}