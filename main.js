class Transacao{
    constructor(descricao, valor){

        this._descricao = descricao;
        this._valor = valor;
    }

    getDescricao(){
        return this._descricao
    }

    setDescricao(descricao){
        this._descricao = descricao
    }

    getValor(){
        return this._valor
    }

    setValor(valor){
        this._valor = valor
    }
}
exports.Transacao = Transacao