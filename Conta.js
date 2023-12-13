const {Transacao} = require("./main");
class Conta extends Transacao{
    constructor(descricao, valor, vencimento){
        super(descricao, valor)
        this._vencimento = vencimento
    }

    getVencimento(){
        return this._vencimento
    }
    setVencimento(vencimento){
        this._vencimento = vencimento
    }
}
exports.Conta = Conta