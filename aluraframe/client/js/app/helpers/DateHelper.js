class DateHelper {
    constructor() {
        throw new Error('DateHelper não pode ser instanciado!');
    }

    static textoParaData(texto) {
        if (!/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/.test(texto)) throw new Error('Deve estar no formato YYYY-MM-DD');
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2))
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
    }
}